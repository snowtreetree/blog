module.exports = {
    themeConfig: {
    // 顶部导航
      nav: [
        { text: 'Home',  ariaLabel: 'Language Menu',link: '/', },
        { text: 'Guide', link: '/guide/', items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ] },
      ],
      sidebar:[
          {
            title:'常用',
            path:'/',
            // children:[
            //     '/EventLoop'
            // ]
        },
        {
            title:'JavaScript',
            path:'/js',
            
            children:[
                '/scroll',
                '/EventLoop'
            ]
        },
        {
          title:'其他',
          path:'/',
          children:[
              '/other/select'
          ]
      },
      ]
    }
  }