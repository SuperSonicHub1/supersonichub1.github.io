---
title: Interesting Search Ideas
date: 2022-05-27T00:00:00.000Z
tags:
- computer science
- software design
- theory crafting
---
<!-- # Interesting Search Ideas -->
that I hope to pursue some day

Feel free to take any of them, though. Can't copyright ideas after all. :p

## Indexing the Web Using APIs

There are a lot of existing search engines that index themselves using APIs, including:
* Algolia's [HN Search][hn-search]
* [pushshift.io][pushshift] for Reddit

These websites are extremely limited in scope, though, as they're usually focused on
the content of one site.
My idea is to hyperscale this to a general search engine like Google.
I can see an early prototype using a simple schema--title, description,
link, upload date--for a relational database with full-text search and normalizing
data from these APIs using some sort of plugin/interface system. This schema
could then be expanded overtime (author, upvotes, reccomendations), allowing for
more powerful search features.

I believe this approach to indexing the net has a lot of great approaches:
* [lots of big websites have free APIs][public-api-lists]
	* if they don't, we can find their internal ones >:)
* data is already organized for us
* lots of big sites are hostile to crawlers but not to people with API keys
* pagination is built in to many of these APIs, allowing us to quickly catch up
to the quantity of content existing search engines have

The main issues I can forsee with this idea are needing to pay for APIs and
admitting that the majority of the web's content is centralized.

## Graph-Based Search Powered by Schema.org

This idea ties in a bit with the previous idea, but could still work well with
traditional crawling.

Google and the other search engine giants created [Schema.org][schema-org] a few
years back in order to make a push for structured data on the Web.
Their vocabulary would be the basis of the schema for our graph-based search engine.
Webpages would be converted (APIs, JSON-LD, OpenGraph) in order to match Schema.org's
vocabulary.
They would then be ingested into our database as nodes and edges.

The important thing about Schema.org is that its many schemas revolve heavily around
*relationships* (articles have authors, for example).
This can enable some powerful queries:
* find discussion threads about a webpage on Reddit, Hacker News, Slashdot
* view an author's articles across multiple publications
* all songs by a specific artist that have music videos
* Hacker News threads with more than 50 comments
* Tweet with image attatchments that have more than 50 likes (fan art)

Another cool thing we can do since we already have all the data lying around is
to show users a "normalized" view of the web, a la [Tachyomi][tachyomi]
or [mpv+youtube-dl][mpv-youtube-dl].
If you think about it, a tweet or Show HN post aren't all that different from one
another, data-wise.
They're both [SocialMediaPosting][social-media-post]s with a number of
[UserLikes][user-likes] and [Comment][comment]s.
Therefore, if they're both the same, why should we have to deal with the cognitive
dissonance of multiple UIs?
This would also make one's browsing experience faster since we wouldn't have to
load JavaScript, trackers, ads or any other kinds of web bloat.

A neat side-effect of this would be that we could create a command-line tool for
accessing normalized data on the web; think [jc][jc] for the web or
[extruct][extruct] on steroids.

The only downsides to this idea I see right now are that Schema.org is at times
vague in its documentation and concerns about graph database performance compared
to that of relational databases due to personal lack of experience.

## Reverse Image Metasearch

I use reverse image search pretty regularly (two to three times a week). I find it
quite inconvienent that there isn't a good reverse search UI for mobile devices;
most websites require you to enter your browser's "desktop mode"
in order to the functionality to even appear. It's also hard to make a search on
multiple engines at once; this is necessary for content like anime as sometimes an
engine may be able to cover for another's gaps. A reverse image
[metasearch][metasearch] engine would solve both of these issues with one stone.
If you're looking for engines to implement,
the [Search by Image extension][search-by-image] is a good place to start.

I actually tried doing something like this a while back, but lost energy due to
focusing too much on the backend of implementing engines and not enough on the frontend,
along with using it as an opportunity to teach myselfPython asyncio, metaclasses,
dataclasses, and unit testing all at the same time; I think that that may have been
a bit too much for me. I certainly plan to come back to this idea some day, though,
as it would genuinely be helpful to me.

## The Ultimate Personal Search Engine

The metasearch engine to end all metasearch engines; a direct attack on [Neeva][neeva].
This engine would run entirely locally, and maintain an index in an SQLite file.
You would net yourself the powerful metasearch functionality of [searX][searx],
the Web 2.0 personalization of Neeva, and the locality of [Finda][finda].
You'd have your browsing history, web search results, and GitHub stars all in one place
and away from prying eyes.

## Ranking by Functionality

This would be very similar to that of [Marginalia][marginalia], and would ideally be
combined with other algorithms like PageRank and full-text search.

This algorithm would rank highly websites that:
* have no ads or trackers
* have small page sizes
* have minimal or no JavaScript
* a small number of requests within the first 10 seconds
* have mobile support
* are a11y-compliant
* have generally fast page loads
* have HTTPS
* are [LibreJS][librejs]-compliant

The main conundrum would come from efficiently testing webpages for all of this
functionality.

[hn-search]: https://hn.algolia.com/
[pushshift]: https://pushshift.io/
[public-api-lists]: https://github.com/public-api-lists/public-api-lists
[schema-org]: https://schema.org/
[tachyomi]: https://tachiyomi.org/
[mpv-youtube-dl]: https://mpv.io/manual/master/#options-ytdl
[social-media-post]: https://schema.org/SocialMediaPosting
[user-likes]: https://schema.org/UserLikes
[comment]: https://schema.org/Comment
[jc]: https://github.com/kellyjonbrazil/jc
[extruct]: https://pypi.org/project/extruct/
[metasearch]: https://en.wikipedia.org/wiki/Metasearch_engine
[search-by-image]: https://github.com/dessant/search-by-image/
[searx]: https://github.com/searx/searx
[neeva]: https://neeva.com/
[finda]: https://keminglabs.com/finda/
[marginalia]: https://search.marginalia.nu/
[librejs]: https://www.gnu.org/software/librejs/
