function waterfall(a) { function b(a, b) { var c = window.getComputedStyle(b); return parseFloat(c["margin" + a]) || 0 } function c(a) { return a + "px" } function d(a) { return parseFloat(a.style.top) } function e(a) { return parseFloat(a.style.left) } function f(a) { return a.clientWidth } function g(a) { return a.clientHeight } function h(a) { return d(a) + g(a) + b("Bottom", a) } function i(a) { return e(a) + f(a) + b("Right", a) } function j(a) { a = a.sort(function (a, b) { return h(a) === h(b) ? e(b) - e(a) : h(b) - h(a) }) } function k(b) { f(a) != t && (b.target.removeEventListener(b.type, arguments.callee), waterfall(a)) } "string" == typeof a && (a = document.querySelector(a)); var l = [].map.call(a.children, function (a) { return a.style.position = "absolute", a }); a.style.position = "relative"; var m = []; l.length && (l[0].style.top = "0px", l[0].style.left = c(b("Left", l[0])), m.push(l[0])); for (var n = 1; n < l.length; n++) { var o = l[n - 1], p = l[n], q = i(o) + f(p) <= f(a); if (!q) break; p.style.top = o.style.top, p.style.left = c(i(o) + b("Left", p)), m.push(p) } for (; n < l.length; n++) { j(m); var p = l[n], r = m.pop(); p.style.top = c(h(r) + b("Top", p)), p.style.left = c(e(r)), m.push(p) } j(m); var s = m[0]; a.style.height = c(h(s) + b("Bottom", s)); var t = f(a); window.addEventListener ? window.addEventListener("resize", k) : document.body.onresize = k }


var percentFlag = false; // 节流阀
var rootlex_musicPlaying = false;
var talksurl = 'https://xxx.xxx.xxx';
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
                while (i < json.count) {
                    if (json.data[i].type == 'administrator') {
                        talksdata += '<li class="bber-item"><div class="bber-content">' + json.data[i].comment + '</div><hr><div class="bber-bottom"><div class="bber-info"><div class="bber-info-time"><i class="far fa-clock"></i><time class="datatime" style="display: inline;">' + dayjs(json.data[i].createdAt).format('YYYY/MM/DD') + '</time></div></div></div></li>'
                    }
                    i++;
                }
                document.getElementById('waterfall').innerHTML = talksdata;
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