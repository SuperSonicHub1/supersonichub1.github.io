---
title: Easy Type Encapsulation in Rust with the std::ops::Deref Trait
date: 2023-06-08T04:03:46Z
tags:
- blogging in june 2023
- programming
- rust
- competitive programming
---

My friend Jair Santana shared with me
[a very cool competitive programming challenge from IOI 2021](https://oj.uz/problem/view/IOI21_registers)
and so I've been working through it in Rust. The goal of the challenge is to implement two
programs using the instruction set of a virtual machine. An implementation of the virtual
machine is given to the competitors in C++, but I'm rewriting it in Rust because Rust is
awesome. :sunglasses: The virtual machine has many registers, which are defined as
sequences of bits. My first instinct was to implement this as an array of booleans
using a `const` generic type alias:

```rust
/// Each register is an array of `B` bits, numbered from `0`
/// (the rightmost bit) to `b − 1` (the leftmost bit).
type Register<const B: usize> = [ bool; B ];
```

This is a good start, but becomes annoying once you want to start
implementing methods on your type. This is because the `type`
keyword, again, creates a type *alias*, not a new type, and Rust does not let you
create an `impl` block for a primitive type.


```
error[E0390]: cannot define inherent `impl` for primitive types
  |
  | impl<const B: usize> Register<B> {}
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```

Instead, we must implement our methods as a collection of loosely collected functions.

```rust
fn bool_to_u64(b: bool) -> u64 {
	match b {
		true => 1,
		false => 0,
	}
}

fn integer_value<const B: usize>(register: Register<B>) -> u64 {
	return register
		.iter()
		.enumerate()
		.map(|(i, bit)| 2u64.pow(i as u32) * bool_to_u64(*bit))
		.sum()
}
```

We can create a new type by taking the guts of the type alias and
wrapping it in a struct tuple.

```diff
/// Each register is an array of `B` bits, numbered from `0`
/// (the rightmost bit) to `b − 1` (the leftmost bit).
- type Register<const B: usize> = [ bool; B ];
+ struct Register<const B: usize>([ bool; B ]);
```

Now that we have a new type, we can implement whatever methods
and traits we want.

```rust
impl<const B: usize> Register<B> {
    fn integer_value(self: Self) -> u64 {
        return self.0
            .iter()
            .enumerate()
            .map(|(i, bit)| 2u64.pow(i as u32) * bool_to_u64(*bit))
            .sum()
    }
}
```

We are also now *enforcing* that a register must be a `Register`, not an boolean
array that looks and acts like one; this property becomes much more useful
when you have two types that wrap the same inner type, for example, `Year(i16)`
and `Month(i16)`, and it's crucial that you can tell them apart.

```
error[E0308]: mismatched types
   |
   |     let a: Register<64> = [false; 64];
   |            ------------   ^^^^^^^^^^^ expected `Register<64>`, found `[bool; 64]`
   |            |
   |            expected due to this
   |
   = note: expected struct `Register<64>`
               found array `[bool; 64]`
help: try wrapping the expression in `Register`
   |
   |     let a: Register<64> = Register([false; 64]);
   |                           +++++++++           +
```

However, one could argue that we've put too much distance between ourselves and the
original type. Arrays in Rust come with a lot of great methods, but now we either
need to use ugly syntax to reach through to the original type (`register.0.iter()`)
or manually "forward" all the methods and traits we need.

We can have the best of both worlds by overriding Rust's dereference operator (`*x`)
using the `std::ops::Deref` trait; it will effectively forward all of the methods
and traits for us. Implementing the trait is trivial:

```rust
impl<const B: usize> Deref for Register<B> {
    type Target = [ bool; B ];

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}
```

We now save two characters in `Register::integer_value`.

```rust
impl<const B: usize> Register<B> {
    fn integer_value(self: Self) -> u64 {
-         return self.0
+         return self
            .iter()
            .enumerate()
            .map(|(i, bit)| 2u64.pow(i as u32) * bool_to_u64(*bit))
            .sum()
    }
}
```

Rust in many places makes use of the dereference operator
[automatically](https://doc.rust-lang.org/std/ops/trait.Deref.html#more-on-deref-coercion),
so the forwarding is effectively transparent.

I think that this neat little trick can save you a lot of grief when wanting to write correct
code, so use them liberally.

> Implementing `Deref` for smart pointers makes accessing the data behind them convenient,
> which is why they implement Deref. On the other hand, the rules regarding `Deref` and `DerefMut`
> were designed specifically to accommodate smart pointers. Because of this, `Deref` should only be
> implemented for smart pointers to avoid confusion.

Uhh, well, seeing as `Vec` uses `Deref` to forward its inner slice, I think using `Deref`
in a similar way is fair game!
