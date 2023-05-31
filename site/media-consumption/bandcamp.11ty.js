const fetch = require('node-fetch'),
	cheerio = require('cheerio')


const url = "https://bandcamp.com/supersonicbandcamp1"

module.exports = class Bandcamp {
	data() {
		return {
			templateEngineOverride: "11ty.js,md",
			title: "My Bandcamp Collection"
		}
	}

	work(work) {
		return `## *[${work.item_title}](${work.item_url})*

![album art for ${work.item_title}](https://f4.bcbits.com/img/a0${work.item_art_id}_10.jpg)

${work.item_type} by ${work.band_name}

${work.featured_track_url ? `Featured track: ["${work.featured_track_title}"](${work.featured_track_url})` : ''}

purchased on ${new Date(Date.parse(work.purchased))}`
	}

	async render() {
		const res = await fetch(url)

		const $ = cheerio.load(await res.text(), { baseURI: res.url }),
			pageData = JSON.parse($('div#pagedata').attr('data-blob'))

		return `
Bandcamp is one of the few moderately-sized websites left on the net
that still cares about its users. Plus, owning your music is dope.
Give an artist you like seven bucks once for FLAC-quality jams
you can hold onto for the rest of your life instead of paying a
seven-dollars-per-month subscription to Spotify while putting
only cents in the pockets of your favorite artists. 

If you must, you can find me on the Bandcamp site under the
moniker [${pageData.fan_data.name}](${pageData.fan_data.trackpipe_url}).

What follows is a list of all works I own on the platform.

${Object.values(pageData.item_cache.collection).sort((a, b) => Date.parse(b.purchased) - Date.parse(a.purchased)).map(this.work).join('\n')}`
	}
}