
// 右下角顶部返回按钮
function fly_to_top() {
    btf.scrollToDest(0, 500);
  }
  window.addEventListener("scroll", function (event) {
    var scrollTop =
      document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop;
    if (scrollTop > 56) {
      document
        .getElementById("doraemon_to_top")
        .classList.add("doraemon_fixed");
    } else {
      document
        .getElementById("doraemon_to_top")
        .classList.remove("doraemon_fixed");
    }
  });


//   控制台输出字符画
  if (window.console) {
    Function.prototype.makeMulti = function () {
      let l = new String(this);
      l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
      return l;
    };
    let string = function () {
      /*
  我是字符画
      */
    };
    console.log(string.makeMulti());
  }