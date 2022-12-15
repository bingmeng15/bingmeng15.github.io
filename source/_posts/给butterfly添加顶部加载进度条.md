---
title: 给butterfly添加顶部加载进度条
tags: butterfly
abbrlink: 5e3a
date: 2022-12-10 00:00:32
categories: 魔改教程
cover: https://tva3.sinaimg.cn/large/87c01ec7gy1fs5dmi0fs1j21hc0u0npd.jpg
---

## 转自

{% link  https://xlenco.eu.org, Xlenco, https://xlenco.onmicrosoft.cn/img/head.webp , %}

## Dome

显示的效果：

![](https://www.chuckle.top/images/10-1.webp)


## 引入 css

```css
.pace {
  pointer-events: none;
  user-select: none;
  z-index: 2;
  position: fixed;
  margin: auto;
  top: 4px;
  left: 0;
  right: 0;
  height: 8px;
  border-radius: 8px;
  width: 6rem;
  background: #eaecf2;
  overflow: hidden;
}

.pace-inactive .pace-progress {
  opacity: 0;
  transition: 0.3s ease-in;
}

.pace.pace-inactive {
  opacity: 0;
  transition: 0.3s;
  top: -8px;
}

.pace .pace-progress {
  box-sizing: border-box;
  transform: translate3d(0, 0, 0);
  position: fixed;
  z-index: 2;
  display: block;
  position: absolute;
  top: 0;
  right: 100%;
  height: 100%;
  width: 100%;
  background: #49b1f5;
  background: linear-gradient(
    to right,
    rgb(18, 194, 233),
    rgb(196, 113, 237),
    rgb(246, 79, 89)
  );
  animation: gradient 2s ease infinite;
  background-size: 200%;
}
```

## 引入 JS

```javascript
<script src="//cdn.bootcss.com/pace/1.0.2/pace.min.js"></script>
```

hexo 三连就可以看到效果了