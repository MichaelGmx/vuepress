module.exports = {
  title: 'Little Oat',
  description: 'LitteOat\'s Notes',
  base: '/vuepress/',   // 部署时 网址域名后紧接着的，通常为：域名/<REPO Name>
  markdown: {           // markdown 设置
    lineNumbers: true     // 代码块是否显示序号
  },

  theme: 'reco',        // 设置主题

  themeConfig: {
    logo: '/images/logo.jpg',    // 导航栏Logo
    // lastUpdated: '最后更新于',        // 最后更新时间（string | boolean）string是自定义前缀，使用的是git commit的时间戳，所以时间不合适

    locales: {                       // 使用locales可以实现语言国际化
      '/': {  // 此处默认 / 是中文
        lang: 'zh-CN',
        nav: [
          { text: 'Github', link: 'https://github.com/MichaelGmx' },
          { text: 'vuepress官网', link: 'https://vuepress.vuejs.org/zh/' },
        ],
        sidebar: {
          '/': [
            { title: '首页', path: '/' },
            // git
            {
              title: 'git',    // 标题，必要
              // path: '/git',        // 绝对路径，可选（默认指向README.md）
              // collapsable: false,  // 是否折叠（true：折叠 需要点击展开，false：直接展开所有），默认：true
              // sidebarDepth: 0,     // 是否开启子标题作为单独链接（0: 不启用，1：启用一级标题，2：启用一级、二级标题），默认：1
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
            // Angular
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
            // React
            {
              title: 'React',
              collapsable: true,
              sidebarDepth: 0,
              children: [
                {
                  title: '基础',
                  path: '/react',
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                    ['react/react-class', 'React Class'],
                    ['react/react-hook', 'React Hook'],
                    ['react/react-form', '表单'],
                    ['react/prop-types', 'Prop-Types'],
                  ]
                },
                {
                  title: 'Router',
                  path: '/react/router',
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                    ['react/router/react-router-dom5.x', 'react-router-dom 5.x'],
                    ['react/router/react-router-dom6.x', 'react-router-dom 6.x'],
                  ]
                }
              ]
            },
            // vue
            {
              title: 'vue',
              collapsable: true,
              sidebarDepth: 0,
              children: [
                {
                  collapsable: false,
                  sidebarDepth: 0,
                  children: [
                    ['vue/vue-getting-started', 'vue 入门'],
                  ]
                }
              ]
            },
            // Android
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
  },

  head: [
    ['link', { rel: 'icon', href: '/images/logo.jpg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-moblie-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-moblie-web-app-status-bar-style', content: 'black' }],
  ],

  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    ],
    [ require('./vuepress-plugin-code-copy'),
      {
        copyButtonText: '复制',
        copiedButtonText: '已复制!'
      }
    ]
  ]
}