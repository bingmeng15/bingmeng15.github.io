// 音乐绑定事件
function musicBindEvent() {
    document.querySelector("#nav-music .aplayer-music").addEventListener("click", function () {
      anzhiyu.musicTelescopic();
    });
    document.querySelector("#nav-music .aplayer-button").addEventListener("click", function () {
      anzhiyu.musicToggle(false);
    });
  }
  // 进阶实现
  // const metingJs = document.querySelector("#nav-music meting-js");
  // //判断是否是音乐
  // if (metingJs.contains(event.target)) {
  // } else {
  // }