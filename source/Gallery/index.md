---
title: 壁纸
date: 2022-10-28 21:28:04
aside: false
comments: false
type: "Gallery"
description:
keywords:
top_img:
mathjax:
katex:
aplayer:
highlight_shrink:
---

{% note info  %}
温馨提示：点击可以查看图片，`电脑端拖动图片/手机端长按图片` 可以实现切换壁纸哦~
{% endnote %}

<script>
let time = ''
let imgbox = document.querySelector('.fj-gallery')
imgbox.addEventListener('contextmenu', e => e.preventDefault())
imgbox.addEventListener('dragend', e => { changeBg('url(' + e.target.src + ')'); })
imgbox.addEventListener('touchstart', e => { time = setTimeout(() => { changeBg('url(' + e.target.src + ')'); }, 500); })
imgbox.addEventListener('touchend', ()=>{clearTimeout(time)})
</script>

<!-- 恢复默认背景 -->
<button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button>

## 图片（手机）
<div class="bgbox">
<a href="javascript:;" style="background-image:url(https://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)" class="pimgbox" onclick="changeBg('url(https\://img.vm.laomishuo.com/image/2021/12/2021122715170589.jpeg)')"></a>
</div>

## 图片（电脑）
<div class="bgbox">
<a href="javascript:;" style="background-image:url(https://cn.bing.com/th?id=OHR.GBRTurtle_ZH-CN6069093254_1920x1080.jpg)" class="imgbox" onclick="changeBg('url(https\://cn.bing.com/th?id=OHR.GBRTurtle_ZH-CN6069093254_1920x1080.jpg)')"></a>
</div>



## 渐变色
<div class="bgbox">
<a href="javascript:;" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
</div>

## 纯色
<div class="bgbox">
<!-- 拾色器，可自定义颜色 -->
<input type="color" id="color">
<a href="javascript:;" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a>
</div>

<!-- 监听拾色器 -->
<script>document.getElementById('color').addEventListener('change', (e) => { changeBg(e.path[0].value); })</script>



## 渐变色
<div class="bgbox">
<a href="javascript:;" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
</div>

## 纯色
<div class="bgbox">
<!-- 拾色器，可自定义颜色 -->
<input type="color" id="color">
<a href="javascript:;" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a>
</div>

<!-- 监听拾色器 -->
<script>document.getElementById('color').addEventListener('change', (e) => { changeBg(e.path[0].value); })</script>
