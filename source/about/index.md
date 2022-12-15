---
title: 关于
date: 2022-10-20 15:51:42
type: "about"
#https://img.xjh.me/img/58287207_p0.jpg
#https://img.xjh.me/img/62907342_p0.jpg
---

<div class="poem-wrap">
  <div class="poem-border poem-left"></div>
  <div class="poem-border poem-right"></div>
    <h>念两句诗</h>
    <p id="poem">挑选中...</p>
    <p id="info">
  <script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>
  <script type="text/javascript">
    jinrishici.load(function(result) {
      poem.innerHTML = result.data.content
      info.innerHTML = '【' + result.data.origin.dynasty + '】' + result.data.origin.author + '《' + result.data.origin.title + '》'
      document.getElementById("poem").value(poem);
      document.getElementById("info").value(info);
  });
  </script>
</div>
