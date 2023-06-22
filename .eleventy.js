const pluginRss = require("@11ty/eleventy-plugin-rss"),
	eleventyAsciidoc = require("eleventy-plugin-asciidoc"),
	syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight"),
	markdownIt = require("markdown-it"),
	markdownItFootnote = require("markdown-it-footnote")

module.exports = eleventyConfig => {
	eleventyConfig.addPlugin(pluginRss)
	eleventyConfig.addPlugin(eleventyAsciidoc, {
		template_dir: `${__dirname}/asciidoc-templates`,
	})
	eleventyConfig.addPlugin(syntaxHighlight)
	eleventyConfig.setLibrary(
		"md",
		markdownIt({
			html: true, // Enable HTML tags in source
			breaks: false,  // Convert '\n' in paragraphs into <br>
			linkify: true // Autoconvert URL-like text to links
		})
			.use(markdownItFootnote)
	)

	const input = 'site'

	// Copy CSS
	// https://michaelsoolee.com/add-css-11ty/
	eleventyConfig.addPassthroughCopy(`${input}/css`)
	// Copy media
	eleventyConfig.addPassthroughCopy(`${input}/media`)
	
	return {
		passthroughFileCopy: true,
		dir: {
			input,
			output: "_output"
		}
	}
}
