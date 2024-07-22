const pluginRss = require("@11ty/eleventy-plugin-rss"),
	eleventyAsciidoc = require("eleventy-plugin-asciidoc"),
	syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight"),
	markdownIt = require("markdown-it"),
	markdownItFootnote = require("markdown-it-footnote"),
	{ exec } = require('node:child_process'),
	util = require('node:util'),
	path = require('node:path'),
	fs = require('node:fs/promises')

const execp = util.promisify(exec)

module.exports = eleventyConfig => {
	const input = 'site'
	const output = "_output"


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

	eleventyConfig.addTemplateFormats("rendercv.yaml")
	eleventyConfig.addExtension(
		"rendercv.yaml",
		{
			read: false,
			compile: async (_inputContent, inputPath) => {
				const parsedInputPath = path.parse(inputPath)
				const name = parsedInputPath.name.split('.rendercv')[0]
				try {
					await fs.mkdir(`${output}/resume`, { recursive: true })
					await execp(`rendercv render '${inputPath}' --pdf-path ${output}/resume/${name}.pdf --html-path ${output}/resume/${name}.html --dont-generate-png`)
				} catch (e) {
					console.log(e.stdout)
					console.log(e.stderr)
					throw e
				}
			}
		}
	)


	// Copy CSS
	// https://michaelsoolee.com/add-css-11ty/
	eleventyConfig.addPassthroughCopy(`${input}/css`)
	// Copy media
	eleventyConfig.addPassthroughCopy(`${input}/media`)
	// Copy résumé
	// eleventyConfig.addPassthroughCopy(`${input}/resume.pdf`)
	
	return {
		passthroughFileCopy: true,
		dir: {
			input,
			output,
		}
	}
}
