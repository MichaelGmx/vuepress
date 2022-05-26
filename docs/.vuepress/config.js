module.exports = {
  title: 'Little Oat',
  description: 'LitteOat\'s Notes',
  base: '/vuepress/',   // 部署时 网址域名后紧接着的
  markdown: {           // markdown 设置
    lineNumbers: true     // 代码块是否显示序号
  },
  themeConfig: {
    logo: '/assets/img/logo.jpg',    // 导航栏Logo
    // lastUpdated: '最后更新于',        // 最后更新时间（string | boolean）string是自定义前缀，使用的是git commit的时间戳，所以时间不合适

    locales: {                       // 使用locales可以实现语言国际化
      '/': {  // 此处默认 / 是中文
        nav: [
          { text: 'Github', link: 'https://github.com/MichaelGmx' },
          { text: 'vuepress官网', link: 'https://vuepress.vuejs.org/zh/' },
        ],
        sidebar: {
          '/': [
            {
              title: 'git',    // 标题，必要
              path: '/',           // 绝对路径，可选（默认指向README.md）
              collapsable: false,  // 是否展开子标题内容，默认：true
              sidebarDepth: 0,     // 是否开启子标题作为单独链接（0: 不启用，1：启用一级标题，2：启用一级、二级标题），默认：1
              children: [
                {
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                    ['git/git-cli', 'git 常用命令行'],
                  ]
                }
              ]
            },
            {
              title: 'Angular',
              collapsable: true,
              sidebarDepth: 0,
              children: [
                {
                  title: 'angularJs',
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                    {
                      collapsable: false,
                      sidebarDepth: 0,
                      children: [
                        ['angular/angular-js/angularjs-directive-scope', 'angularjs Directive中的scope设置'],
                      ]
                    }
                  ]
                },
                {
                  title: 'Angular2x',
                  collapsable: false,
                },
              ]
            },
            {
              title: 'Android',
              collapsable: true,
              sidebarDepth: 0,
              children: [
                {
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                    ['android/android-build-error', 'Android编译问题汇总'],
                  ]
                }
              ]
            },
          ]
        },
      }
    }
  }
}