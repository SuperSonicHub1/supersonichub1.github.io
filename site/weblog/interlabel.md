---
title: What in the World is INTERLABEL?
date: 2021-09-16T01:51:00.000Z
---
<!-- # What in the World is INTERLABEL? -->

I know Interlabel (stylized in all caps) for one thing and one thing only: being the publisher of the [VShojo][vshojo] girls' music. Let's go on a small adventure to figure out what in the world this company is.

## [The Website][interlabel_site]

![An opened coconut in front of palm leaves and a pink background. Text reads "Batsu Drink Jam."][drink_jam_cover]

Their front page advertises the song "Drink Jam" by artist Batsu, even though their latest song at the time of writing is Projekt Melody's "Y4ND3RE." Also, it seems that the creator of the site has forgotten that music is a [mass noun][mass_noun], and so "musics" is plastered all over the site.

![The header of the page reads "Musics."][interlabel_site_musics_screenshot]

Clicking on [the link][interlabel_site_musics] to view the song leads to an empty page. Real professional.

Moving on to their [artists page][interlabel_site_artists] shows us they're only carrying one artist, that being Batsu again. Where are Melody and Nyanners? Ignoring the obvious questions, it seems that Batsu has composed music for the *Owarimonogatari* anime, so that's quite awesome, but I'm struggling to find evidence of this online, along with the game that he composed for.

Their [about page][website_about] is in Japanese, and I don't trust Google Translate to spit out a good translation, so I'm going to skip reading it and hope for something English later down the line.

The site seems to also have an unfinished shopping feature, with a forever cart in the upper right-hand corner. It's likely that this entire site is just some template and the creator never bothered removing it. Speaking of templates, if you press the Escape key while on the site, you'll be asked to log into Squarespace for some reason; guess they must be hosting the site. Let's move on to their YouTube and Twitter.

## [The YouTube Channel][youtube_channel]

The channel was created on Monday, January 27, 2020, 22:00:00 GMT according to the [YouTube API][invidious_channel]. The channel description elaborates on the existence of Interlabel.

> INTERLABEL is the nomad music label based in Tokyo, Japan.
>
>Run by music producers / DJs community.
>
>Established to deliver new underground musics from upcoming track makers in Tokyo.

A Japanese underground music label by artists, for artists. This does a much better job of telling me what this company is than their site did. I don't understand the use of "nomad," though. Does this label not intend to stick around for forever?

Their most recent video is a plain upload of Nyanner's "Foolish Heart" (again, where's "Yandere?"), and it's preceded by what you would actually expect from a channel like this: electronic music from numerous Japanese artists who aren't on their site for some reason. Funnily enough, "Drink Mix" is missing from this channel. Wonder where it could be...

## [The Twitter Account][twitter_account]

Their Twitter, also founded in January 2020, is mostly in Japanese, so I'm not going to pretend I understand what's going on. Their only English post can be traced back to the release of "Foolish Heart":

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We&#39;re proud to Announce.<br>Our new song with <a href="https://twitter.com/NyanNyanners?ref_src=twsrc%5Etfw">@NyanNyanners</a> &amp; <a href="https://twitter.com/kissmenerdygirl?ref_src=twsrc%5Etfw">@kissmenerdygirl</a> has been released.<br>Thanks a lot to <a href="https://twitter.com/VShojoOfficial?ref_src=twsrc%5Etfw">@VShojoOfficial</a> .<br>Check out on:<a href="https://t.co/MHHJecXpNi">https://t.co/MHHJecXpNi</a><br>Streaming release is following:<a href="https://t.co/b1gqFHq8CY">https://t.co/b1gqFHq8CY</a><a href="https://twitter.com/hashtag/foolishheart?src=hash&amp;ref_src=twsrc%5Etfw">#foolishheart</a> <a href="https://twitter.com/hashtag/vshojo?src=hash&amp;ref_src=twsrc%5Etfw">#vshojo</a> <a href="https://twitter.com/hashtag/nyanners?src=hash&amp;ref_src=twsrc%5Etfw">#nyanners</a></p>&mdash; INTERLABEL (@interlabeljp) <a href="https://twitter.com/interlabeljp/status/1386092589120507904?ref_src=twsrc%5Etfw">April 24, 2021</a></blockquote>

The grammar is slightly broken, but whatever.

The thing that is of most interest to me is a retweet of VShojo CEO theGunrun announcing the track:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Releasing a new single from <a href="https://twitter.com/NyanNyanners?ref_src=twsrc%5Etfw">@NyanNyanners</a>!<a href="https://twitter.com/hashtag/FoolishHeart?src=hash&amp;ref_src=twsrc%5Etfw">#FoolishHeart</a> with through my Music Label and VTuber Agency. So excited right now! <a href="https://twitter.com/VShojoOfficial?ref_src=twsrc%5Etfw">@VShojoOfficial</a> <a href="https://twitter.com/interlabeljp?ref_src=twsrc%5Etfw">@interlabeljp</a> <a href="https://t.co/1KQHiyYinH">https://t.co/1KQHiyYinH</a> <a href="https://t.co/OLW0RsSfLr">pic.twitter.com/OLW0RsSfLr</a></p>&mdash; theGunrun (@theGunrun) <a href="https://twitter.com/theGunrun/status/1386087723388129282?ref_src=twsrc%5Etfw">April 24, 2021</a></blockquote>

The tweet implies that he owns or has some sort of stake in INTERLABEL. This isn't on his Twitter bio nor his LinkedIn, and none of INTERLABEL's social presence, at least the stuff in English, mention any kind of ownership. Already, a very important question that will probably never get answered.

This is going to be a running theme in this article: Where is "Yandere?"

We're now going to transition to Interlabel's Bandcamp. They don't link to it at all using their Twitter or YouTube, only when they've published VShojo singles, so we'll manually head there ourselves.

## [The Bandcamp Page][bandcamp_page]

Interlabel's Bandcamp discography is quite short, only featuring the debut singles of the previously mentioned VTubers and not any of the artists seen on their site, Twitter, or YouTube. The funniest thing is that Batsu, who seems to be their premier artist, indirectly has a song on this Bandcamp: he's credited as the composer for "Yandere." Must kinda suck having one of the few songs actually published by your label kinda suck.

Clicking on the [community tab][bandcamp_community], you can see the post that commemorates the release of "Foolish Heart" actually has a comment and four likes. Quite stupidly, Bandcamp allows you to easily see the contents of a community post without following the account if you can simply bother to look inside their HTML. Run this snippet of JS inside your dev console to take a look at it:

```js
JSON.parse(document.getElementById("pagedata").dataset.blob)
```

We can take a look at the comment for "Foolish Heart" via the property path `.community.feed.stories[1]`. Now, we can see the comment by the one [Travalore][travalore] posted on April 24, 2021 23:38:10 GMT:

> BANGER ALERT

Beautiful.

## Conclusion

What have we learned today, everyone?

* maintaining a consistent and timely internet presence is important to keeping up appearances
* INTERLABEL thinks more highly of cute abominations than computer programs
* site scraping is much more fun than doing research on some boring company

[vshojo]: https://vshojo.com/
[interlabel_site]: https://www.interlabel.jp/
[drink_jam_cover]: https://images.squarespace-cdn.com/content/v1/5e2d5ff87584647062262a9f/1580235547847-63P1YYMVMEJQU7PRGQ3I/%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9B%E3%82%99%E3%83%BC%E3%83%88%E3%82%99+1.png
[mass_noun]: https://en.wikipedia.org/wiki/Mass_noun
[interlabel_site_musics]: https://www.interlabel.jp/musics
[interlabel_site_musics_screenshot]: https://i.imgur.com/r3Lwue2.png
[interlabel_site_artists]: https://www.interlabel.jp/artists
[website_about]: https://www.interlabel.jp/about
[youtube_channel]: https://www.youtube.com/channel/UCkDC56eQuLLNzjOauC3f-9A
[invidious_channel]: https://invidious.snopyta.org/api/v1/channels/UCkDC56eQuLLNzjOauC3f-9A
[twitter_account]: https://twitter.com/interlabeljp
[bandcamp_page]: https://interlabel.bandcamp.com/
[bandcamp_community]: https://interlabel.bandcamp.com/community
[travalore]: https://bandcamp.com/travalore