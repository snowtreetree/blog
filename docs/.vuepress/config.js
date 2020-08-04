module.exports = {
  title: "青沛🌲",
  description: "个人博客-技术总结，问题归纳",
  head:[
		['link',{rel:'icon',href:'favicon.ico'}]
  ],
  // https://favicon.io/emoji-favicons/potted-plant/
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
          children: [
            "js/script",
            "js/scroll",
            "js/select",
            "js/EventLoop",
            "js/debounceandthrottle",
            "js/module",
            "js/promise",
            "js/sort",
            "js/calc",
            "js/prototype",
            "js/executionContext"
          ]
        },
        {
          title: "CSS",
          collapsable: false,
          children: ["css/greyFilter", "css/BFC"]
        },
        {
          title: "HTTP",
          collapsable: false,
          base:'',
          children: [
            "http/HTTP",
            "http/InterconnectionModel",
            "http/http2",
            "http/SSL&TLS",
            "http/cache",
            "http/localCache",
            "http/attack"
          ]
        },
        {
          title: "HTTP深入学习",
          collapsable: false,
          children: [
            "http/protocol",
            "http/layer",
            "http/DomainName",
            "http/RequestResponse",
            "http/methods",
            "http/status",
            "http/transfer",
            "http/connect"
          ]
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
        {
          title: "webpack",
          collapsable: false,
          children: ["webpack/base","webpack/loader&plugin", "webpack/config","webpack/upgrade"]
        },
        {
          title: "Docker",
          collapsable: false,
          children: ["docker/read","docker/container","docker/image"]
        }
      ],
      "/base/": [
        {
          title: "基础",
          collapsable: false,
          children: ["", "bind", "promise"]
        },
        {
          title: "正则",
          collapsable: false,
          children: ["RegExp/base"]
        }
      ],
      "/interview/": [
        {
          title: "面试",
          collapsable: false,
          children: ["HTML", "array", "date","afterInputUrl","VueVsReact","vue/vue3"]
        }
      ]
    }
  }
};
