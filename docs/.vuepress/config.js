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
    ],
    lastUpdated: 'Last Updated',
    record: '鲁ICP备2021013011号',
    recordLink: 'https://beian.miit.gov.cn/',
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};
