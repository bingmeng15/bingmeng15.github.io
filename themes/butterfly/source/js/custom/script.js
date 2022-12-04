setInterval(() => {
    // let create_time = Math.round(new Date('2021-10-15 00:00:00').getTime() / 1000); //在此行修改建站时间
    // 有苹果用户发现safari浏览器不能正常运行，百度了一下发现是格式化的问题，改成下面这种应该就可以了。感谢反馈。
    let create_time = Math.round(new Date('2021/10/15 00:00:00').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);

    var nol = function(h) {
        return h > 9 ? h : '0' + h;
    }
    if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[2] = nol(parseInt(second / 3600));
        second %= 3600;
    }
    if (second >= 60) {
        time[3] = nol(parseInt(second / 60));
        second %= 60;
    }
    if (second >= 0) {
        time[4] = nol(second);
    }
    let currentTimeHtml = ""
    if (time[0] != 0) {
        // currentTimeHtml += time[0] + ''
    }
    currentTimeHtml += '<font style=color:#23a6d5>&nbsp本站已运行：&nbsp</font>' + time[1] + '<font style=color:#aff4df>&nbsp天</font>' + time[2] + '<font style=color:#f391a9>&nbsp时&nbsp</font>' + time[3] + '<font style=color:#fdb933>&nbsp分&nbsp</font>' + time[4] + '<font style=color:#a3cf62>&nbsp秒</font>';
    document.getElementById("runtime").innerHTML = currentTimeHtml;
}, 1000);