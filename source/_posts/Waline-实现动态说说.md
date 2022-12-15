---
title: Waline 实现动态说说
abbrlink: f675
date: 2022-12-15 23:38:37
tags: butterfly
categories: 魔改教程
cover: https://img.xjh.me/img/62907342_p0.jpg
---

{% note blue 'fas fa-bullhorn' simple %}这是我找到的一篇关于[Waline](https://waline.js.org/)动态说说的部署方法，我直接搬过来了,当然你不喜欢这个也可以去看[安知鱼](https://anzhiy.cn/) 的说说部署方式，看自己的喜好来布置。

也可以去看:[BBtalk](https://bb.js.org/)，[Artitalk](https://artitalk.js.org/)，[小康哔哔](https://www.antmoe.com/)。

{% endnote %}

转自：
<div>
    {% link https://stupendous-beignet-e35e4a.netlify.app,Rootlex,https://bu.dusays.com/2022/09/23/632da74cec6dd.jpg,Waline 实现动态说说 %}
</div>

{% note default simple %}由于我用的不是这个，其中有什么问题，可以留言，后面大家一起研究！{% endnote %}

优点

{% checkbox checked,没有本地局限性 %}

{% checkbox checked,支持 heo 同款瀑布流 %}

{% checkbox checked,无需额外部署 %}

## 引入 js 代码

创建自定义js文件名，放到`blog\themes\butterfly\source\js`文件夹下（可以自定义一个文件夹，方便管理）。

```JavaScript
var percentFlag = false; // 节流阀
var rootlex_musicPlaying = false;
var talksurl =  'https://xxx.xxx.xxx';
var talkspath = '/talks/';
function essayScroll() {
    let a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度
    const waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口
    result <= 99 || (result = 99);

    if (
        !percentFlag &&
        waterfallResult + 100 >= document.documentElement.clientHeight &&
        document.querySelector("#waterfall")
    ) {
        // console.info(waterfallResult, document.documentElement.clientHeight);
        setTimeout(() => {
            waterfall("#waterfall");
        }, 500);
    } else {
        setTimeout(() => {
            document.querySelector("#waterfall") && waterfall("#waterfall");
        }, 500);
    }

    const r = window.scrollY + document.documentElement.clientHeight;

    let p = document.getElementById("post-comment") || document.getElementById("footer");

    (p.offsetTop + p.offsetHeight / 2 < r || 90 < result) && (percentFlag = true);
}
function replaceAll(e, n, t) {
    return e.split(n).join(t);
}
var rootlex = {
    getTalks() {
        fetch(talksurl + '/comment?path=' + talkspath)
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                let i = 0, talksdata = '';
                while (i < json.count){
                    if (json.data[i].type == 'administrator'){
                        talksdata += '<li class="bber-item"><div class="bber-content">' + json.data[i].comment + '</div><hr><div class="bber-bottom"><div class="bber-info"><div class="bber-info-time"><i class="far fa-clock"></i><time class="datatime" style="display: inline;">' + dayjs(json.data[i].createdAt).format('YYYY/MM/DD') + '</time></div></div></div></li>'
                    }
                    i++;
                }
                document.getElementById('waterfall').innerHTML=talksdata;
                rootlex.reflashEssayWaterFall()
            })
            .catch((err => {
                console.log(err)
            }))
    },
    reflashEssayWaterFall: function () {
        document.querySelector("#waterfall") &&
        setTimeout(function () {
            waterfall("#waterfall");
            document.getElementById("waterfall").classList.add("show");
        }, 500);
    }
};
rootlex.reflashEssayWaterFall();
```

同理,新建一个名为 `waterfall.js` 的文件，放到`blog\themes\butterfly\source\js`文件夹下。

```JavaScript
function waterfall(a){function b(a,b){var c=window.getComputedStyle(b);return parseFloat(c["margin"+a])||0}function c(a){return a+"px"}function d(a){return parseFloat(a.style.top)}function e(a){return parseFloat(a.style.left)}function f(a){return a.clientWidth}function g(a){return a.clientHeight}function h(a){return d(a)+g(a)+b("Bottom",a)}function i(a){return e(a)+f(a)+b("Right",a)}function j(a){a=a.sort(function(a,b){return h(a)===h(b)?e(b)-e(a):h(b)-h(a)})}function k(b){f(a)!=t&&(b.target.removeEventListener(b.type,arguments.callee),waterfall(a))}"string"==typeof a&&(a=document.querySelector(a));var l=[].map.call(a.children,function(a){return a.style.position="absolute",a});a.style.position="relative";var m=[];l.length&&(l[0].style.top="0px",l[0].style.left=c(b("Left",l[0])),m.push(l[0]));for(var n=1;n<l.length;n++){var o=l[n-1],p=l[n],q=i(o)+f(p)<=f(a);if(!q)break;p.style.top=o.style.top,p.style.left=c(i(o)+b("Left",p)),m.push(p)}for(;n<l.length;n++){j(m);var p=l[n],r=m.pop();p.style.top=c(h(r)+b("Top",p)),p.style.left=c(e(r)),m.push(p)}j(m);var s=m[0];a.style.height=c(h(s)+b("Bottom",s));var t=f(a);window.addEventListener?window.addEventListener("resize",k):document.body.onresize=k}
```

{% note default simple %}这两个可以放在一起，不需要创建多余的文件，如果你觉得这样不方便管理，也可以自行创建一份新的文本文件。{% endnote %}

{% note warning flat %}这里需要配置`talksurl`和`talkspath`。{% endnote %}

| 变量      | 功能                 |
| --------- | -------------------- |
| talksurl  | 你的 waline 链接     |
| talkspath | 说说页面链接 `/talks/` |


## 创建`ccs`文件

在`css`文件中引入以下代码：

{% note default simple %}`css`有设置顶部图，可以自行修改（CTRL+F搜索`background`）。{% endnote %}

```css
#page:has(#essay_page) {
  border: 0;
  box-shadow: none !important;
  padding: 0 !important;
  background: transparent !important;
}
.layout.hide-aside{
  max-width: 1400px !important;
}
#page:has(#essay_page) .page-title {
  display: none;
}
#web_bg ~ .page:has(#essay_page) {
  background: var(--rootlex-background);
}
#bber .bber-content .datacont {
  order: 0;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--rootlex-fontcolor);
  width: 100%;
  line-height: 1.38;
  border-radius: 12px;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: justify;
}
#bber p {
  margin: 0px;
}
#bber div.bber-content {
  display: flex;
  flex-flow: wrap;
  border-radius: 12px;
  width: 100%;
  height: 100%;
}
#bber .timeline ul li.bber-item {
  position: relative;
  width: 32%;
  border: var(--style-border-always);
  border-radius: 12px;
  padding: 1rem 1rem 0.5rem;
  transition: all 0.3s ease 0s;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--rootlex-card-bg);
  box-shadow: var(--rootlex-shadow-border);
  margin-right: 2%;
}
#bber .timeline #waterfall.show {
  opacity: 1;
}
#bber .timeline #waterfall {
  opacity: 0;
  transition: all 0.3s ease 0s;
}
#bber ul.list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
#bber {
  margin-top: 1rem;
  width: 100%;
}
#bber > section > ul > li.bber-item {
  margin-bottom: 1rem;
}

#bber-tips {
  font-size: 14px;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

#bber .timeline ul li.bber-item hr {
  display: flex;
  position: relative;
  margin: 8px 0px;
  border: 1px dashed var(--rootlex-theme-op);
  width: 100%;
}

#bber .bber-info {
  display: flex;
  align-items: center;
}

#bber > section > ul > li > div .bber-info-time,
#bber > section > ul > li > div .bber-info-from {
  color: var(--rootlex-fontcolor);
  font-size: 0.7rem;
  background-color: var(--rootlex-background);
  padding: 0px 8px;
  border-radius: 20px;
  cursor: default;
  display: flex;
  align-items: center;
}

#bber .bber-info .far.fa-clock {
  margin-right: 4px;
}
#bber > section > ul > li > div .bber-info-from span,
#bber > section > ul > li > div .bber-info-from {
  margin-left: 4px;
  font-weight: 600;
}

#bber .bber-bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}
#bber .timeline ul li.bber-item:hover {
  border: var(--style-border-hover);
}
/* 顶部样式 */
.author-content.author-content-item.essayPage {
  height: 19rem;
  background: url(https://bu.dusays.com/2022/09/01/631068b943a16.jpg) left 28% / cover no-repeat;
  color: #fff;
  overflow: hidden;
  margin-top: 0px;
  border-radius: 10px;
}
```

## 创建说说`pug`文件

在`themes/butterfly/layout/includes/page`目录下创建一个`talks.pug`文件，加入以下代码：

```markdown
#essay_page
    .author-content.author-content-item.essayPage.single
        .card-content
            .author-content-item-tips 即刻短文
    #bber
        section.timeline.page-1
            ul#waterfall.list
                li.bber-item
                    .bber-content
                        p.datacont= '加载中'
    #bber-tips(style='color: var(--rootlex-secondtext);')
        | - 只展示最近30条短文 -

script.
    rootlex.getTalks()
```

## 修改`page.pug`文件

```diff
    if top_img === false
      h1.page-title= page.title

    case page.type
+      when 'talks'
+        include includes/page/talks.pug
      when 'tags'
        include includes/page/tags.pug
      when 'link'
        include includes/page/flink.pug
      when 'categories'
        include includes/page/categories.pug
      default
        include includes/page/default-page.pug
```

## 新建说说页面

在终端中输入`hexo new page talks`创建说说页面
```markdown
---
title: 说说
date: 2022-10-11 09:37:02
comments: true
aside: false
top_img: false
type: talks
---
```

{% tip info %}这里可以用[安知鱼](https://anzhiy.cn/)的主界面部署样式，如果不喜欢直接跳过下面的隐藏步骤。{% endtip %}

{% folding cyan,安知鱼🐟的部署方式 %}

{% note default simple %}详情看此文{% endnote %}

### 首页滚动显示即刻（可选）

创建`themes/butterfly/layout/includes/bbTimeList.pug` 部分`fontawesome`图标可能需要您自行修改（就是use(xlink:href="#icon-chrome")）。

```plaintext
#bbTimeList.bbTimeList.container
    svg.icon.bber-logo.iconfont.icon-chrome(onclick=`pjax.loadUrl("/essay/")`,title="即刻短文")
      use(xlink:href="#icon-chrome")
    #bbtalk.swiper-container.swiper-no-swiping.essay_bar_swiper_container(tabindex="-1")
      #bber-talk.swiper-wrapper(onclick=`pjax.loadUrl("/essay/")`)
        each i in site.data.essay
          each item, index in i.essay_list
            if index < 10
              - var contentText = item.image ? item.content + ' [图片]' : item.content
              .li-style.swiper-slide= contentText

    i.bber-gotobb.fas.fa-arrow-circle-right(onclick=`pjax.loadUrl("/essay/")`,title="查看全文")
```

### 引入`swiper`依赖

在`_config.butterfly.yml`引入依赖, 如果有使用轮播图插件的话此处无需引入

```yml
inject:
  head:
    - <link rel="stylesheet" href="https://npm.elemecdn.com/hexo-butterfly-swiper-anzhiyu@1.0.4/lib/swiper.min.css">
  bottom:
    - <script data-pjax src="https://npm.elemecdn.com/anzhiyu-blog@1.1.6/js/swiper.min.js"></script>
```

### 添加自定义`css`

在`source/css/essay_page`创建`home_essay_bar.css`。

```css
#bbTimeList {
  background: var(--anzhiyu-white);
  color: var(--anzhiyu-fontcolor);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  box-shadow: var(--anzhiyu-shadow-lightblack);
  display: flex;
  transition: all 0.3s ease 0s;
  margin: 1rem auto 0;
  border: var(--style-border);
  align-items: center;
  height: 50px;
  width: 100%;
}
[data-theme="dark"] #bbTimeList {
  background: #000 !important;
}
#bbtalk {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#bber-talk {
  width: 100%;
  height: 25px;
  line-height: 25px;
  display: flex;
  flex-direction: column;
}
.bber-logo {
  font-size: 1.5rem;
  line-height: 22px;
  margin-right: 1rem;
  transition: all 0.3s ease 0s;
  cursor: url(/img/x2.cur), auto !important;
}

.bber-gotobb {
  line-height: 25px;
  margin-left: 1rem;
  transition: all 0.3s ease 0s;
  cursor: url(/img/x2.cur), auto !important;
}

#bber-talk .li-style {
  width: 100%;
  max-width: 100%;
  height: 25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.3s;
  font-weight: 700;
  margin: auto;
  cursor: url(/img/x2.cur), auto !important;
  white-space: nowrap;
}

#bbTimeList:hover {
  border: var(--style-border-hover);
  box-shadow: var(--anzhiyu-shadow-main);
}

/* 文章页H1-H6图标样式效果 */
.bbTimeList .bber-logo {
  -webkit-animation: rotate 1.6s linear infinite;
  animation: rotate 1.6s linear infinite;
}
@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-1turn);
    transform: rotate(-1turn);
  }
}
@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-1turn);
    transform: rotate(-1turn);
  }
}
```

然后在`_config.butterfly.yml`中的inject下的head引入。

```yml
inject:
  head:
    - <link rel="stylesheet" href="/css/essay_page/home_essay_bar.css">
```

### 修改自定义`js`文件

{% note default simple %}这里需要进行`js`修改，再次声明，我由于没用这个，暂时不知道修改哪里，暂时把它搬过来。{% endnote %}

```JavaScript
var percentFlag = false; // 节流阀
function essayScroll() {
  let a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度
  const waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口
  result <= 99 || (result = 99);

  if (
    !percentFlag &&
    waterfallResult + 100 >= document.documentElement.clientHeight &&
    document.querySelector("#waterfall")
  ) {
    // console.info(waterfallResult, document.documentElement.clientHeight);
    setTimeout(() => {
      waterfall("#waterfall");
    }, 500);
  } else {
    setTimeout(() => {
      document.querySelector("#waterfall") && waterfall("#waterfall");
    }, 500);
  }

  const r = window.scrollY + document.documentElement.clientHeight;

  let p = document.getElementById("post-comment") || document.getElementById("footer");

  (p.offsetTop + p.offsetHeight / 2 < r || 90 < result) && (percentFlag = true);
}
function replaceAll(e, n, t) {
  return e.split(n).join(t);
}
var anzhiyu = {
  diffDate: function (d, more = false) {
    const dateNow = new Date();
    const datePost = new Date(d);
    const dateDiff = dateNow.getTime() - datePost.getTime();
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;

    let result;
    if (more) {
      const monthCount = dateDiff / month;
      const dayCount = dateDiff / day;
      const hourCount = dateDiff / hour;
      const minuteCount = dateDiff / minute;

      if (monthCount >= 1) {
        result = datePost.toLocaleDateString().replace(/\//g, "-");
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + " " + GLOBAL_CONFIG.date_suffix.day;
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + " " + GLOBAL_CONFIG.date_suffix.hour;
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + " " + GLOBAL_CONFIG.date_suffix.min;
      } else {
        result = GLOBAL_CONFIG.date_suffix.just;
      }
    } else {
      result = parseInt(dateDiff / day);
    }
    return result;
  },
  changeTimeInEssay: function () {
    document.querySelector("#bber") &&
      document.querySelectorAll("#bber time").forEach(function (e) {
        var t = e,
          datetime = t.getAttribute("datetime");
        (t.innerText = anzhiyu.diffDate(datetime, true)), (t.style.display = "inline");
      });
  },
  reflashEssayWaterFall: function () {
    document.querySelector("#waterfall") &&
      setTimeout(function () {
        waterfall("#waterfall");
        document.getElementById("waterfall").classList.add("show");
      }, 500);
  },
  commentText: function (e) {
    if (e == "undefined" || e == "null") e = "好棒！";
    var n = document.getElementsByClassName("el-textarea__inner")[0],
      t = document.createEvent("HTMLEvents");
    if (!n) return;
    t.initEvent("input", !0, !0);
    var o = replaceAll(e, "\n", "\n> ");
    (n.value = "> " + o + "\n\n"), n.dispatchEvent(t);
    var i = document.querySelector("#post-comment").offsetTop;
    window.scrollTo(0, i - 80),
      n.focus(),
      n.setSelectionRange(-1, -1),
      document.getElementById("comment-tips") && document.getElementById("comment-tips").classList.add("show");
  },
  initIndexEssay: function () {
    setTimeout(() => {
      let essay_bar_swiper = new Swiper(".essay_bar_swiper_container", {
        passiveListeners: true,
        direction: "vertical",
        loop: true,
        autoplay: {
          disableOnInteraction: true,
          delay: 3000,
        },
        mousewheel: true,
      });

      let essay_bar_comtainer = document.getElementById("bbtalk");
      if (essay_bar_comtainer !== null) {
        essay_bar_comtainer.onmouseenter = function () {
          essay_bar_swiper.autoplay.stop();
        };
        essay_bar_comtainer.onmouseleave = function () {
          essay_bar_swiper.autoplay.start();
        };
      }
    }, 100);
  },
};

anzhiyu.initIndexEssay();
anzhiyu.changeTimeInEssay();
anzhiyu.reflashEssayWaterFall();
```

### 引入到主页

```diff
block content
  include ./includes/mixins/post-ui.pug
  #recent-posts.recent-posts
    include includes/categoryList.pug
+   include includes/bbTimeList.pug
    +postUI
    include includes/pagination.pug
```

### 引入 swiper 依赖

在`_config.butterfly.yml`引入依赖, 如果有使用店长的轮播图插件的话此处无需引入

```yaml
inject:
  head:
    - <link rel="stylesheet" href="https://npm.elemecdn.com/hexo-butterfly-swiper-anzhiyu@1.0.4/lib/swiper.min.css">
  bottom:
    - <script data-pjax src="https://npm.elemecdn.com/anzhiyu-blog@1.1.6/js/swiper.min.js"></script>
```

{% endfolding %}

在`_config.butterfly.yml`中的`inject`加入以下代码:

```yaml
head:
  - <link rel="stylesheet" href="/css/custom.css" type="text/css">
bottom:
  - <script async data-pjax src="/js/custom.js"></script> # 自定义js
  - <script async data-pjax src="/js/waterfall.js"></script>  # waterfall库
  - <script async data-pjax src="https://cdn1.tianli0.top/npm/dayjs"></script> # 日期转换库
```

三连查看效果！