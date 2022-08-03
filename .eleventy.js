module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site

	// Copies images/ do _site/images
	eleventyConfig.addPassthroughCopy("images");

	// Copies css/ to _site/css/
	eleventyConfig.addPassthroughCopy("css");

  // Copies js/ to _site/js/
  eleventyConfig.addPassthroughCopy("js");

  return {
    // avaliable formates of layouts
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};