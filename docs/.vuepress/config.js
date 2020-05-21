module.exports = {
  title: "张雪林的个人博客",
  description: "张雪林的个人博客-技术总结，问题归纳",
  themeConfig: {
    repo: "snowtreetree/blog",
    // 顶部导航
    nav: [
      { text: "Home", ariaLabel: "Home", link: "/" },
      { text: "基础", ariaLabel: "Base", link: "/base/" },
      { text: "面试", ariaLabel: "Interview", link: "/interview/" }
    ],
    sidebar: {
      "/blog/": [
        {
          title: "JavaScript",
          collapsable: false,
          children: ["js/scroll", "js/select", "js/EventLoop", "js/debounceandthrottle", "js/module","js/promise","js/sort","js/calc","js/prototype"]
        },
        {
          title: "CSS",
          collapsable: false,
          children: ["css/greyFilter","css/BFC"]
        },
        {
          title: "HTTP",
          collapsable: false,
          children: ["http/InterconnectionModel","http/http2",'http/SSL&TLS','http/cache','http/localCache','http/attack']
        },
        {
          title: "HTML",
          collapsable: false,
          children: ["html/RepaintandReflow"]
        },
        {
          title: "NGINX",
          collapsable: false,
          children: ["nginx/base"]
        },
      ],
      "/base/": [
        {
          title:"基础",
          collapsable: false,
          children:['',"bind","promise",'recursive']
        }
      ],
      "/interview/":[
        {
          title: "面试",
          collapsable: false,
          children: ["HTML","array","date"]
        },
      ]
    },
  }
};
