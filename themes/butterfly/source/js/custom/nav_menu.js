// window.scrollCollect = () => {
//     return btf.throttle(function (e) {
//       const currentTop = window.scrollY || document.documentElement.scrollTop
//       const isDown = scrollDirection(currentTop)
//       if (currentTop > 56) {
// +           $header.classList.add('is-top-bar')
//         if (isDown) {
//           if ($header.classList.contains('nav-visible')) $header.classList.remove('nav-visible')
//           if (isChatBtnShow && isChatShow === true) {
//             chatBtnHide()
//             isChatShow = false
//           }
//         } else {
//           if (!$header.classList.contains('nav-visible')) $header.classList.add('nav-visible')
//           if (isChatBtnHide && isChatShow === false) {
//             chatBtnShow()
//             isChatShow = true
//           }
//         }
//         $header.classList.add('nav-fixed')
//         if (window.getComputedStyle($rightside).getPropertyValue('opacity') === '0') {
//           $rightside.style.cssText = 'opacity: 0.8; transform: translateX(-58px)'
//         }
//       } else {
//         if (currentTop === 0) {
// -             $header.classList.remove('nav-fixed', 'nav-visible')
// +             $header.classList.remove('is-top-bar')
//         }
//         $rightside.style.cssText = "opacity: ''; transform: ''"
//       }

//       if (document.body.scrollHeight <= innerHeight) {
//         $rightside.style.cssText = 'opacity: 0.8; transform: translateX(-58px)'
//       }
//     }, 200)()
//   }

// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector("#percent"); // 获取图标

  result <= 99 || (result = 99), (btn.innerHTML = result);
}

document.getElementById("page-name").innerText = document.title.split(" | 冰梦の博客")[0];