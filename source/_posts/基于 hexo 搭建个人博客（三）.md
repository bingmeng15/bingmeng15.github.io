---
title: 基于 hexo 搭建个人博客（三）
tags: 'hexo,butterfly'
cover: 'https://tva4.sinaimg.cn/large/0075auPSly1fqb9dyz4lwj31hc0tznds.jpg'
categories: hexo搭建教程
swiper_index: 3
abbrlink: 39771
date: 2022-07-09 14:01:53
---
## **安装主题**

本站基于<font color="red"> Hexo </font>搭建，用的是🦋[Butterfly](https://butterfly.js.org/) 主题，你也可以使用其他的主题。

> - 访问[Butterfly](https://butterfly.js.org/) 主题网页，安装 hexo-theme-butterfly 主题，此时你就可以在【博客目录\themes】下看到 `butterfly` 文件夹。
> - 如果后续想升级主题，在根目录下运行 'npm update hexo-theme-butterfly' 。
>
> <font color="red">注：</font>升级前请先备份 'butterfly' 文件夹，更新会覆盖新的包，有可能会出现 'bug'。

## **应用主题**

修改博客目录下的<font color="red"> _config.yml </font>文件，把主题改为 <font color="red"> butterfly </font>，大概在100行那里。

```bash
theme: butterfly
```

## **安装插件**

如果你 <font color="red"> hexo s </font>时，显示 `扩展包含/layout.pug 块内容包含 ./includes/mixins/post-ui.pug #recent-posts.recent-posts +postUI 包含包含/pagination.pug' ,则表示你没有配置 'pug' 以及 'stylus' 的渲染，请在你的博客目录下执行以下命令下载安装：

```bash
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

> <font color="red"> 注： </font>如果你安装失败的话，就代表你没有权限安装，请用管理员身份运行 cmd 来配置

## **升级建议**

为了减少升级主题带来的不便，请用以下方式。

> - 把主题文件夹中的 <font color="red"> _config.yml </font>（是主题下的文件，不是根目录下的文件），复制到根目录文件下，同时重命名为 <font color="red"> _config.butterfly.yml </font>。
> - 'hexo' 会自动合并到<font color="red"> _config.yml </font>和<font color="red"> _config.butterfly.yml </font>里的配置，<font color="red"> _config.butterfly.yml </font>其优先级比较高。

到此就配置完成，现在只需要执行<font color="red">hexo clean </font>&& <font color="red"> hexo g </font>&& <font color="red"> hexo s </font>就可以看到自己的成果了。