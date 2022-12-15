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
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6d4d539a5.webp)" class="pimgbox" onclick="changeBg('url(https://bu.dusays.com/2022/08/30/630d6d4d539a5.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6d4e15c9d.webp)" class="pimgbox" onclick="changeBg('url(https://bu.dusays.com/2022/08/30/630d6d4e15c9d.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6f22c03c6.webp)" class="pimgbox" onclick="changeBg('url(https://bu.dusays.com/2022/08/30/630d6f22c03c6.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6d56c83eb.webp)" class="pimgbox" onclick="changeBg('url(https://bu.dusays.com/2022/08/30/630d6d56c83eb.webp)')"></a>   
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6d50b439b.webp)" class="pimgbox" onclick="changeBg('url(https://bu.dusays.com/2022/08/30/630d6d50b439b.webp)')"></a>   

</div>

## 图片（电脑）
<div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6d5574d0e.webp)" class="imgbox" onclick="changeBg('url(https://bu.dusays.com/2022/08/30/630d6d5574d0e.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6d529adf9.webp)" class="imgbox" onclick="changeBg('url(https://bu.dusays.com/2022/08/30/630d6d529adf9.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6d5159b31.webp)" class="imgbox" onclick="changeBg('url(https://bu.dusays.com/2022/08/30/630d6d5159b31.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d718bbeef6.webp)" class="imgbox" onclick="changeBg('url(https://bu.dusays.com/2022/08/30/630d718bbeef6.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d72f237d19.jpg)" class="imgbox" onclick="changeBg('url(https://bu.dusays.com/2022/08/30/630d72f237d19.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d72f2032c8.jpg)" class="imgbox" onclick="changeBg('url(https://bu.dusays.com/2022/08/30/630d72f2032c8.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2021/12/01/7792ff0082ec4.jpg)" class="imgbox" onclick="changeBg('url(https://bu.dusays.com/2021/12/01/7792ff0082ec4.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d72ee6d4f3.png)" class="imgbox" onclick="changeBg('url(https://bu.dusays.com/2022/08/30/630d72ee6d4f3.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d72ed76532.jpg)" class="imgbox" onclick="changeBg('url(https://bu.dusays.com/2022/08/30/630d72ed76532.jpg)')"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://bu.dusays.com/2022/09/17/6324aea549be6.webp)')"><img src="https://bu.dusays.com/2022/09/17/6324aea549be6.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://bu.dusays.com/2022/09/17/6324aec701a68.webp)')"><img src="https://bu.dusays.com/2022/09/17/6324aec701a68.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://bu.dusays.com/2022/09/17/6324aef4a5543.webp)')"><img src="https://bu.dusays.com/2022/09/17/6324aef4a5543.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://bu.dusays.com/2022/09/17/6324af3622884.webp)')"><img src="https://bu.dusays.com/2022/09/17/6324af3622884.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/5.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/5.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/6.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/6.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/7.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/7.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/8.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/8.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/9.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/9.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/10.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/10.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/11.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/11.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/12.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/12.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/13.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/13.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/14.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/14.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/15.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/15.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/16.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/16.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/17.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/17.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/18.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/18.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/19.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/19.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/20.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/20.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/21.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/21.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/22.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/22.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/23.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/23.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/24.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/24.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/25.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/25.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/26.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/26.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/27.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/27.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/28.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/28.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/29.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/29.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/30.webp)')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/30.webp"></a>
    <a href="javascript:;" class="imgbox" onclick="changeBg('url(https://img.xjh.me/img/34844544_p0.jpg')"><img src="https://img.xjh.me/img/34844544_p0.jpg"></a>
    
</div>

## 渐变色
<div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)" onclick="changeBg('linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)" onclick="changeBg('linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)')"></a>
</div>

## 纯色
<div class="bgbox">
    <input type="color" id="colors" autocomplete="on" value="#FF0000"></input>
</div>

<!-- 监听拾色器 -->
<script>document.getElementById('color').addEventListener('change', (e) => { changeBg(e.path[0].value); })</script>


