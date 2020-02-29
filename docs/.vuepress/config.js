module.exports = {
  themeConfig: {
    repo: "snowtreetree/blog",
    // 顶部导航
    nav: [
      { text: "Home", ariaLabel: "Language Menu", link: "/" }
      // { text: 'Guide', link: '/guide/', items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/blog/scroll' }
      //   ] },
    ],
    sidebar: {
      "/blog/": [
        {
          title: "JavaScript",
          collapsable: false,
          children: ["scroll", "select", "EventLoop"]
        }
      ]
    }
  }
};
