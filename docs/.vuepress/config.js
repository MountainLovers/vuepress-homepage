module.exports = {
  title: "Zongjie Zhang",
  description: "Welcome to my homepage.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "https://blog.zongjie.xyz" },
      { text: "Love", link: "http://www.赵敬一.我爱你"}
    ],
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};
