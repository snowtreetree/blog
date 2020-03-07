module.exports = {
  title: "张雪林的个人博客",
  description: "张雪林的个人博客-技术总结，问题归纳",
  themeConfig: {
    repo: "snowtreetree/blog",
    // 顶部导航
    nav: [{ text: "Home", ariaLabel: "Language Menu", link: "/" }],
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
