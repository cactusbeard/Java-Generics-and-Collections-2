(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{533:function(n,d){n.exports="\x3c!--\ntitle: 网站准备 \nsort: 3\n--\x3e\n\n准备一个目录 `mkdir doc-example`, 在目录中创建一些文件，为你的网站规划一些目录结构。如果你不是初始化一个工程，那你在创建一个文档网站前，需要做一些准备工作，规划你的网站目录，比如 `顶部一级导航`。\n\n## 生成配置文件\n\n生成 `package.json` 文件\n\n```shell\n$ npm init -y\n```\n\n## 建立目录\n\n建立几个目录，用于存放 `Markdown` 文件，后面配置指定这些目录，这些目录帮助你生成 `顶部一级导航`。\n\n> 1. 一级导航目录下，建立目录，内容将展示在该栏目下面，会产生右边菜单栏。  \n> 2. 每个目录下面建立 `README.md` 文件，视为一级导航需要展示的内容。  \n> 3. 默认每个目录都需要建立一个 `README.md`。\n\n根据上面规则，我创建了如下目录结构：\n\n**目录结构**\n\n```\n├── about\n│   └── README.md\n├── home\n│   └── README.md\n├── introduce\n│   ├── README.md\n│   ├── api\n│   │   ├── README.md\n│   │   ├── commands.md\n│   │   ├── markdown-config.md\n│   │   └── theme-api.md\n│   ├── getting-started\n│   │   ├── README.md\n│   │   ├── install.md\n│   │   ├── site-creation.md\n│   │   └── site-preparation.md\n│   └── guides\n│       ├── README.md\n│       ├── add-blog.md\n│       ├── add-index.md\n│       ├── custom-menu.md\n│       ├── html.md\n│       ├── insert-img.md\n│       └── menu-sort.md\n└── package.json\n```\n"}}]);