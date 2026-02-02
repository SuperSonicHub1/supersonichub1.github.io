---
title: Creating a Database Cataloging the Capabilities of Logical Theories
layout: layout.njk
tags:
  - programming languages
  - databases
  - systems
  - proposal
---

*The following was written in a bid for the 2026 [Goldwater Scholarship](https://goldwaterscholarship.gov/).*
*I unfortunately didn't survive MIT's application process, but I did get to opportunity to write about an idea I've had for a while now about what the future of programming language theory might look like.*

---

Writing computer software is challenging.
This is in part because the problem of understanding what a computer program will do before it is executed, *static analysis*, is fundamentally hard.
In fact, there are various theorems in computer science and formal logic which rigorously prove this fact. [1][2][3]
In response, we construct programming languages which restrict what kinds of programs one can write such that answering specific questions like “will this program finish running” or “will this program crash” becomes tractable.
Making tradeoffs between the *capabilities* and *tractability* of programs in a programming language (PL) is a widespread principle in the theory of PLs. [^1]
However, starting from a set of restrictions on programs to then imply a property of interest (i.e. programs never crash) can lead to “spooky action at a distance:” some programs that we would expect to be able to write can become challenging or even impossible to describe in our new language.  

The following demonstrates the tradeoff principle in action.
Knowing whether a program will finish running is quite important when running untrusted code on limited resources.
A cloud provider, for example, may care greatly about equal distribution of resources between customers, and a “runaway program” may prohibit that.
There are strong empirical methods for knowing whether a program in many popular languages will never finish running [5], but one may desire absolute certainty.
To that end, a “total functional” programming language [6] ensures that all valid programs can be shown to finish running. [^2]
However, this comes at the cost of many inconveniences to the writer: all possible failure modes of the program must be handled ahead of time, and algorithms can be challenging to implement compared to a traditional “procedural” language.

Another example: knowing if a program will at some point run into an unhandled error is central to the design of critical systems like flight control systems and IV drip monitors.
In situations like these, irrecoverable errors can have tragic consequences like loss of life, and are to be avoided at all costs.
The [Rust](https://rust-lang.org/) language eliminates entire classes of such errors by making them impossible to describe.
As such, it has seen great adoption in much of the tech world.
As always, it comes at a cost: the semantics of the language can be quite restrictive, blocking mundane programs and making specific data structures challenging to implement [7].

The above examples show how applying the tradeoff principle can have surprising and frustrating implications on the use of a language.
This is in part because languages are designed by “discovering” a valid set of restrictions yielding the property of interest, with arguably little concern for other implications.
Ideally, we would instead start from a property of interest and then work our way towards a minimum set of restrictions on programs which makes that property possible, such that there are no surprises: we want to do science instead of engineering.
The issue is that we lack a theorem or formal framework that shows us a path through the capability-tractability tradeoff for our problem, thus making this kind of PL design generally impossible.
When one starts to look closely at the literature, it starts to become clear that everyone’s engaging in sufficiently advanced guessing regarding restrictions, thus making it hard to understand where results come from and how they compose.
The future of PL design is the development of a formal framework whose kernel is the tradeoff: we need a precise, interconnected definition of capability.

Like with much of mathematics, I believe formalization will come through the centralization and analysis of existing proof for patterns, enabling smart people to make otherwise hard-to-see connections.
The form of centralization I’m interested in is the *mathematical database*, a collection of mathematical objects and statements linking those objects to one another.
For example, [π-Base](https://topology.pi-base.org/) [8] has topological spaces as its objects of study and links those objects together using properties and theorems.
Databases create a living, growing hub for ideas where they can interact with one another, something that publications, the traditional form of mathematics communication, can’t do.
Databases can also act as a source of inspiration for mathematicians.
Say you conjecture that some property of a theory A implies some other property B.
A database, if sufficiently detailed, can then help you find counterexamples and, if you can’t find any, give credence to your hypothesis.
The database will catalog *logical theories* and their *decision problems*, and the statements that link them together will be *properties* and *theorems* capturing the capabilities of these theories.
Let’s break down each part of that sentence.
All computer systems are endowed with a logical theory: a set of rules describing whether a program is valid and what happens when it is run.
A decision problem, then, is just a yes/no question; “will this program finish running,” for example. I lean on these formalisms as computer science and logic have a rich language for describing them.
We’re then interested in how the properties, the capabilities, of our logical theories affect what we can know about them.
For example, if a logical theory underlying a programming language is shown to be too powerful, it may then be impossible to answer the decision question “will this program finish running” for some programs in that language.
The goal, then, is to identify important theories and properties through literature review, translate them into database entries, and then see what patterns arise.
Prior art in this regard includes the [Map of the Universe](https://www.forkinganddividing.com/) [9] and the [Complexity Zoo](https://complexityzoo.net/Complexity_Zoo) [10]. The Map of the Universe, a database of theories, is small in scope, is interested in properties very different from mine, and doesn’t discuss theories immediately relevant to computation.
The Complexity Zoo, a database of computational problems, is not expressly focused on decision problems and the existence of solutions.
In this sense, my proposal of **a database cataloging the capabilities of logical theories** is novel.

Developing and maintaining a mathematical database is quite the interdisciplinary effort.
Constructing the database is a highly technical task, requiring careful planning of an ontology and much software engineering expertise.
Construction is trivial in comparison to the intense amount of research required to fill it out such that it is actually useful.
Information relevant to the tradeoff principle is scattered across Wikipedia stubs, Math Stack Exchange posts, decades of contemporary literature, and the tacit knowledge of experts.
With regard to that last source, creating a database that is actually useful is not just a technical task, but a social one, too.
Once your database has a leg to stand on, you need to advertise it, make sure it’s user-friendly, encourage other experts to contribute entries, and ultimately rally people around using the database to solve important problems.
In this sense, creating a database of this kind is equal parts research software development and sociotechnical infrastructure maintenance, a task few mathematicians and computer scientists have subscribed themselves to.  

As an interdisciplinary researcher, my work primarily has me acting as a liaison between experts.
From re-architecting a data visualization advocating for climate policy, and implementing machine learning techniques to enable faster materials analysis, to developing data pipelines to make pollution forecasts more accessible to the general public, I meet teams where they are and use programming to help teams get their work done faster.
Outside of my research, I have helped to maintain sociotechnical infrastructure, whether it be helping to contribute to documentation of resources available to students at my school or maintaining server infrastructure for a club I help to run.
Above all, though, I think my insatiable curiosity and desire for clear, useful truth would best enable this project.
I believe the database can act as a tool that can bring both people and knowledge together, and those just happen to be two of my favorite activities.

## Bibliography

[1]	E. W. Weisstein, “Halting Problem.” Accessed: Sept. 25, 2025. Online. Available: https://mathworld.wolfram.com/HaltingProblem.html

[2]	E. W. Weisstein, “Rice’s Theorem.” Accessed: Sept. 25, 2025. Online. Available: https://mathworld.wolfram.com/RicesTheorem.html

[3]	E. W. Weisstein, “Gödel’s First Incompleteness Theorem.” Accessed: Sept. 25, 2025. Online. Available: https://mathworld.wolfram.com/GoedelsFirstIncompletenessTheorem.html

[4]	H. Wayne, “The Capability-Tractability Tradeoff,” Computer Things. Accessed: Feb. 04, 2025. Online. Available: https://buttondown.com/hillelwayne/archive/the-capability-tractability-tradeoff/

[5]	J. Vanegue, J. Villard, P. O’Hearn, and A. Raad, “Non-Termination Proving: 100 Million LoC and Beyond,” Sept. 05, 2025, *arXiv*: arXiv:2509.05293. doi: 10.48550/arXiv.2509.05293.

[6]	D. A. Turner, “Total Functional Programming,” *JUCS \- J. Univers. Comput. Sci.*, vol. 10, no. 7, pp. 751–768, July 2004, doi: 10.3217/jucs-010-07-0751.

[7]	A. Desires, *Learning Rust With Entirely Too Many Linked Lists*. Accessed: Sept. 28, 2025. Online. Available: https://rust-unofficial.github.io/too-many-lists/

[8]	S. Clontz, “Database-Driven Mathematical Inquiry,” Apr. 11, 2024, *arXiv*: arXiv:2404.05778. doi: 10.48550/arXiv.2404.05778.

[9]	G. Conant, “Forking and Dividing: The Map of the Model Theory Universe.” Accessed: Sept. 28, 2025. Online. Available: https://www.forkinganddividing.com/

[10]	S. Aaronson, G. Kuperberg, and C. Granade, “The complexity zoo.” 2005.

[^1]: Computer science researcher Hillel Wayne calls it the *capability-tracability tradeoff*: “the more things your system can represent, the less you can say about the things that are represented.” [4] As far as I know, there is no agreed upon name in computer science nor mathematics for this principle.
[^2]: An implementation of this paradigm can be found in the [Dhall](https://github.com/dhall-lang/dhall-lang) programming language.
