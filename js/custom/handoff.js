function saveData(a,e){localStorage.setItem(a,JSON.stringify({time:Date.now(),data:e}))}function loadData(a,e){let n=JSON.parse(localStorage.getItem(a));if(n){let a=Date.now()-n.time;if(a<60*e*1e3&&a>-1)return n.data}return 0}null==localStorage.getItem("font")&&localStorage.setItem("font","HYTMR"),setFont(localStorage.getItem("font"));try{let a=loadData("blogbg",1440);a?changeBg(a,1):localStorage.removeItem("blogbg")}catch(a){localStorage.removeItem("blogbg")}function changeBg(a,e){let n=document.getElementById("web_bg");"#"==a.charAt(0)?(n.style.backgroundColor=a,n.style.backgroundImage="none"):n.style.backgroundImage=a,e||saveData("blogbg",a)}function setFont(a){localStorage.setItem("font",a),"main"==a?document.body.style.fontFamily="-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif":(document.body.style.fontFamily="var(--global-font),-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif",document.documentElement.style.setProperty("--global-font",a))}var winbox="",isMax=!1;function createWinbox(){div=document.createElement("div"),document.body.appendChild(div),winbox=WinBox({id:"changeBgBox",index:999,title:"博客设置",x:"center",y:"center",minwidth:"300px",height:"60%",background:"#49b1f5",onmaximize:()=>{isMax=!0,div.innerHTML="<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>"},onrestore:()=>{isMax=!1,div.innerHTML=""}}),document.getElementsByClassName("wb-close")[0].onclick=function(){sessionStorage.setItem("settingWindow","close")},winResize(),window.addEventListener("resize",winResize),winbox.body.innerHTML='\n    <div id="article-container" style="padding:10px;">\n    \n    <p><button onclick="localStorage.removeItem(\'blogbg\');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>\n    <p></p>\n\n    <div id="article-container" style="padding:20px;">\n    <h3 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h3>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6d4d539a5.webp)" class="pimgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/08/30/630d6d4d539a5.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6d4e15c9d.webp)" class="pimgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/08/30/630d6d4e15c9d.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6f22c03c6.webp)" class="pimgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/08/30/630d6f22c03c6.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6d56c83eb.webp)" class="pimgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/08/30/630d6d56c83eb.webp)\')"></a>   \n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6d50b439b.webp)" class="pimgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/08/30/630d6d50b439b.webp)\')"></a>   \n\n    </div>\n    <h3 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h3>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6d5574d0e.webp)" class="imgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/08/30/630d6d5574d0e.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6d529adf9.webp)" class="imgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/08/30/630d6d529adf9.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d6d5159b31.webp)" class="imgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/08/30/630d6d5159b31.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d718bbeef6.webp)" class="imgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/08/30/630d718bbeef6.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d72f237d19.jpg)" class="imgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/08/30/630d72f237d19.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d72f2032c8.jpg)" class="imgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/08/30/630d72f2032c8.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2021/12/01/7792ff0082ec4.jpg)" class="imgbox" onclick="changeBg(\'url(https://bu.dusays.com/2021/12/01/7792ff0082ec4.jpg)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d72ee6d4f3.png)" class="imgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/08/30/630d72ee6d4f3.png)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://bu.dusays.com/2022/08/30/630d72ed76532.jpg)" class="imgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/08/30/630d72ed76532.jpg)\')"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/09/17/6324aea549be6.webp)\')"><img src="https://bu.dusays.com/2022/09/17/6324aea549be6.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/09/17/6324aec701a68.webp)\')"><img src="https://bu.dusays.com/2022/09/17/6324aec701a68.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/09/17/6324aef4a5543.webp)\')"><img src="https://bu.dusays.com/2022/09/17/6324aef4a5543.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://bu.dusays.com/2022/09/17/6324af3622884.webp)\')"><img src="https://bu.dusays.com/2022/09/17/6324af3622884.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/5.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/5.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/6.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/6.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/7.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/7.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/8.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/8.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/9.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/9.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/10.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/10.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/11.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/11.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/12.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/12.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/13.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/13.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/14.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/14.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/15.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/15.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/16.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/16.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/17.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/17.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/18.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/18.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/19.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/19.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/20.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/20.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/21.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/21.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/22.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/22.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/23.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/23.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/24.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/24.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/25.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/25.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/26.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/26.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/27.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/27.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/28.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/28.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/29.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/29.webp"></a>\n    <a href="javascript:;" class="imgbox" onclick="changeBg(\'url(https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/30.webp)\')"><img src="https://cdn.afdelivr.top/npm/saiodgm-api@1.0.1/randomimg-my/30.webp"></a>\n    </div>\n    <h3 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h3>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg(\'linear-gradient(to right, #eecda3, #ef629f)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)" onclick="changeBg(\'linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)" onclick="changeBg(\'linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)\')"></a>\n\n    </div>\n    \n    <h3 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h3>\n    <div class="bgbox">\n    <input type="color" id="colors" autocomplete="on" value="#FF0000"></input>\n    </div>\n\n',$("#"+localStorage.getItem("themeColor")).attr("checked",!0),"false"==localStorage.getItem("blur")&&(document.getElementById("blur").checked=!0),"true"==localStorage.getItem("yjjs")&&(document.getElementById("yjjs").checked=!0),"1"==localStorage.getItem("hideRightside")&&(document.getElementById("hideAside").checked=!0),document.getElementsByClassName("reSettings")[0].onclick=function(){localStorage.clear(),window.location.reload()}}function winResize(){if(!isMax){var a=document.documentElement.clientWidth;a<=768?winbox.resize(.95*a+"px","90%").move("center","center"):winbox.resize(.6*a+"px","70%").move("center","center")}}function toggleWinbox(){document.querySelector("#changeBgBox")?(winbox.toggleClass("hide"),sessionStorage.setItem("settingWindow","close")):(createWinbox(),sessionStorage.setItem("settingWindow","open"))}"open"==sessionStorage.getItem("settingWindow")&&createWinbox();