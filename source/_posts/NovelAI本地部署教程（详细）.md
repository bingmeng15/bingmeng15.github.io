---
title: NovelAI本地部署教程（详细）
abbrlink: 4c370a1a
date: 2022-11-21 14:07:32
tags: NovelAI
swiper_index: 1 #置顶轮播图顺序，非负整数，数字越大越靠前
cover: "https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/blog-construct/banner.jpg"
categories: NovelAI
---
{% note blue 'fas fa-bullhorn' flat %}首先，我可以确定来看我的文章的,要么是对`NovelAI`感兴趣的或者是不知道怎么在本地部署`Novel`，或者部署遇到各种`bug`的，我这里踩了很多的`bug`，部署出现的问题如果遇到 差不多的情况，希望我的解决方法对你有所帮助。{% endnote %}

## 前言

自从`NovelAI`模型泄露到现在，热度一直居高不下，基本上都有很多人在本地部署`NovelAI`，不过有很多人还是部署失败，我尝试了很多次，也踩了很多的`bug`，希望我的文章对你有所帮助。

### 注意事项，电脑配置不高的可跳过

{% folding yellow, 我的一些碎碎念 %}

配置`NovelAI`需要一个好的显卡，显存很重要，越大的就越好，显卡低的虽然也可以跑，不过爆的概率太大了，还有最重要的性能，关系到你的出图的时间。
还需要安装好CUDA驱动，我在下面出一下CUDA安装的教程方法，一起吧，不需要翻来覆去的去找教程了

{% endfolding %}


## 首先准备好我们的准备工作（必须）

{% tabs test4 %}
<!-- tab python3.x -->
我们先去官网下载，下载最新版即可，下载旧版本也可以，不过不能低于3.10版本。

把PIP源改成清华的源，也可以用本来的，不过那个下载速度不保证

````text
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
````

{% btns rounded grid5 %}
{% cell 下载地址, https://www.python.org/downloads/windows, fas fa-download %}
{% endbtns %}
<!-- endtab -->

<!-- tab NovelAI -->
**NovelAI.leak.Part1 (novelaileak)(必须) (约52.06GiB)**

这个包包含了NovelAI的生产模型，大概是10月份泄露的吧，这个是必要的下载包，不一定要下载全部，你只需要下载里面名叫`stableckpt`包即可，我们需要的模型都在里面，其它的我也不知道是什么，反正是用不上的（大雾）。
```text
magnet:?xt=urn:btih:5bde442da86265b670a3e5ea3163afad2c6f8ecc&dn=novelaileak&tr=http%3a%2f%2ffxtt.ru%3a80%2fannounce&tr=http%3a%2f%2fi-p-v-6.tk%3a6969%2fannounce&tr=http%3a%2f%2fipv6.1337.cx%3a6969%2fannounce&tr=http%3a%2f%2fipv6.govt.hu%3a6969%2fannounce&tr=http%3a%2f%2fjp.moeweb.pw%3a6969%2fannounce&tr=http%3a%2f%2fopen-v6.demonoid.ch%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.ink%3a6969%2fannounce&tr=http%3a%2f%2fshare.camoe.cn%3a8080%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=http%3a%2f%2ft.overflow.biz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.k.vu%3a6969%2fannounce&tr=http%3a%2f%2fvps02.net.orel.ru%3a80%2fannounce&tr=https%3a%2f%2ft1.hloli.org%3a443%2fannounce&tr=https%3a%2f%2ftr.burnabyhighstar.com%3a443%2fannounce&tr=https%3a%2f%2ftr.fuckbitcoin.xyz%3a443%2fannounce&tr=https%3a%2f%2ftracker.expli.top%3a443%2fannounce&tr=https%3a%2f%2ftracker.foreverpirates.co%3a443%2fannounce&tr=https%3a%2f%2ftracker.kuroy.me%3a443%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.loligirl.cn%3a443%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=https%3a%2f%2ftracker1.520.jp%3a443%2fannounce&tr=http%3a%2f%2f207.241.231.226%3a6969%2fannounce&tr=udp%3a%2f%2f6ahddutb1ucc3cp.ru%3a6969%2fannounce&tr=udp%3a%2f%2f%5b2001%3a470%3a1%3a189%3a0%3a1%3a2%3a3%5d%3a6969%2fannounce&tr=udp%3a%2f%2fipv6.tracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2fjutone.com%3a6969%2fannounce&tr=udp%3a%2f%2fmail.zasaonsk.ga%3a6969%2fannounce&tr=udp%3a%2f%2fmirror.aptus.co.tz%3a6969%2fannounce&tr=udp%3a%2f%2fopen.4ever.tk%3a6969%2fannounce&tr=http%3a%2f%2fopen.tracker.ink%3a6969%2fannounce&tr=udp%3a%2f%2frekcart.duckdns.org%3a15480%2fannounce&tr=udp%3a%2f%2fstatic.54.161.216.95.clients.your-server.de%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.blacksparrowmedia.net%3a6969%2fannounce&tr=http%3a%2f%2ftracker.dler.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker2.dler.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker2.itzmx.com%3a6961%2fannounce&tr=udp%3a%2f%2ftracker6.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fapp.icon256.com%3a8000%2fannounce&tr=http%3a%2f%2f1337.abcvg.info%3a80%2fannounce&tr=http%3a%2f%2f207.241.226.111%3a6969%2fannounce&tr=udp%3a%2f%2fuploads.gamecoast.net%3a6969%2fannounce&tr=http%3a%2f%2ftracker.ipv6tracker.ru%3a80%2fannounce&tr=udp%3a%2f%2fsanincode.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.gbitt.info%3a80%2fannounce&tr=https%3a%2f%2ftracker.gbitt.info%3a443%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fleefafa.tk%3a6969%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fopen.free-tracker.ga%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fyahor.ftp.sh%3a6969%2fannounce&tr=udp%3a%2f%2fh85-235-17-132.cust.a3fiber.se%3a6969%2fannounce&tr=udp%3a%2f%2fbananas.space%3a6969%2fannounce&tr=http%3a%2f%2fincine.ru%3a6969%2fannounce&tr=https%3a%2f%2f1337.abcvg.info%3a443%2fannounce&tr=http%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=http%3a%2f%2fchouchou.top%3a8080%2fannounce&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fmail.artixlinux.org%3a6969%2fannounce&tr=udp%3a%2f%2fadmin.52ywp.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=http%3a%2f%2fwepzone.net%3a6969%2fannounce&tr=http%3a%2f%2ftracker.birkenwald.de%3a6969%2fannounce&tr=http%3a%2f%2f%5b2001%3a1b10%3a1000%3a8101%3a0%3a242%3aac11%3a2%5d%3a6969%2fannounce&tr=udp%3a%2f%2ftorrentclub.space%3a6969%2fannounce&tr=http%3a%2f%2fnyaa.tracker.wf%3a7777%2fannounce&tr=udp%3a%2f%2f94-227-232-84.access.telenet.be%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fbuddyfly.top%3a6969%2fannounce&tr=udp%3a%2f%2fnew-line.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=http%3a%2f%2fopen.acgnxtracker.com%3a80%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fcamera.lei001.com%3a6969%2fannounce&tr=udp%3a%2f%2fv1046920.hosted-by-vdsina.ru%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=http%3a%2f%2ftracker.lelux.fi%3a80%2fannounce&tr=udp%3a%2f%2ffh2.cmp-gaming.com%3a6969%2fannounce&tr=udp%3a%2f%2fchouchou.top%3a8080%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ftorrenttracker.nwc.acsalaska.net%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=https%3a%2f%2ftracker.tamersunion.org%3a443%2fannounce&tr=udp%3a%2f%2flaze.cc%3a6969%2fannounce&tr=udp%3a%2f%2felementsbrowser.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.joybomb.tw%3a6969%2fannounce&tr=udp%3a%2f%2f%5b2a0f%3ae586%3af%3af%3a%3a220%5d%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.beeimg.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker-udp.gbitt.info%3a80%2fannounce&tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tcp.exchange%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=http%3a%2f%2ft.acg.rip%3a6699%2fannounce&tr=udp%3a%2f%2ftracker.jonaslsa.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.mywaifu.best%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&tr=udp%3a%2f%2fqtstm32fan.ru%3a6969%2fannounce&tr=udp%3a%2f%2fpublic.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2f207.241.231.226%3a6969%2fannounce&tr=udp%3a%2f%2faarsen.me%3a6969%2fannounce&tr=udp%3a%2f%2f207.241.226.111%3a6969%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=udp%3a%2f%2f91.216.110.52%3a451%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2fopen.dstud.io%3a6969%2fannounce&tr=udp%3a%2f%2fpsyco.fr%3a6969%2fannounce&tr=udp%3a%2f%2fcutscloud.duckdns.org%3a6969%2fannounce&tr=udp%3a%2f%2ffe.dealclub.de%3a6969%2fannounce&tr=ws%3a%2f%2fhub.bugout.link%3a80%2fannounce&tr=wss%3a%2f%2ftracker.openwebtorrent.com%3a443%2fannounce&tr=udp%3a%2f%2f%5b2a04%3aac00%3a1%3a3dd8%3a%3a1%3a2710%5d%3a2710%2fannounce&tr=udp%3a%2f%2ftracker1.itzmx.com%3a8080%2fannounce&tr=udp%3a%2f%2f184.105.151.166%3a6969%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fwepzone.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker3.itzmx.com%3a6961%2fannounce&tr=udp%3a%2f%2ftracker.0x.tf%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.hotplug.ru%3a2710%2fannounce&tr=udp%3a%2f%2fslicie.icon256.com%3a8000%2fannounce&tr=udp%3a%2f%2f960303.xyz%3a6969%2fannounce&tr=udp%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2fbt2.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2fcutiegirl.ru%3a6969%2fannounce&tr=udp%3a%2f%2fopentor.org%3a2710%2fannounce&tr=udp%3a%2f%2ftr.cili001.com%3a8070%2fannounce&tr=udp%3a%2f%2ftracker.bitsearch.to%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.openbtba.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker4.itzmx.com%3a2710%2fannounce&tr=udp%3a%2f%2ftr.bangumi.moe%3a6969%2fannounce&tr=udp%3a%2f%2fconcen.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ddunlimited.net%3a6969%2fannounce&tr=udp%3a%2f%2fadmin.videoenpoche.info%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.artixlinux.org%3a6969%2fannounce&tr=http%3a%2f%2f%5b2a04%3aac00%3a1%3a3dd8%3a%3a1%3a2710%5d%3a2710%2fannounce&tr=http%3a%2f%2fretracker.hotplug.ru%3a2710%2fannounce&tr=http%3a%2f%2ftracker.files.fm%3a6969%2fannounce&tr=http%3a%2f%2ftracker.bt4g.com%3a2095%2fannounce&tr=http%3a%2f%2fopen.nyap2p.com%3a8080%2fannounce&tr=http%3a%2f%2ftracker.electro-torrent.pl%3a80%2fannounce&tr=http%3a%2f%2fvps-dd0a0715.vps.ovh.net%3a6969%2fannounce&tr=http%3a%2f%2fwww.wareztorrent.com%3a80%2fannounce&tr=http%3a%2f%2fkamikazee.duckdns.org%3a7777%2fannounce&tr=https%3a%2f%2fxtremex.herokuapp.com%3a443%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2fben.kerbertools.xyz%3a6969%2fannounce&tr=udp%3a%2f%2fbubu.mapfactor.com%3a6969%2fannounce&tr=udp%3a%2f%2fkeke.re%3a6969%2fannounce&tr=http%3a%2f%2ffe.dealclub.de%3a6969%2fannounce&tr=udp%3a%2f%2fsmtp-relay.odysseylabel.com.au%3a6969%2fannounce&tr=https%3a%2f%2ftracker.srv00.com%3a443%2fannounce&tr=https%3a%2f%2ftrackme.theom.nz%3a443%2fannounce&tr=udp%3a%2f%2ftracker.leech.ie%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.skynetcloud.site%3a6969%2fannounce&tr=udp%3a%2f%2fmoonburrow.club%3a6969%2fannounce&tr=udp%3a%2f%2fopen.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2frep-art.ynh.fr%3a6969%2fannounce&tr=https%3a%2f%2ftracker.m-team.cc%3a443%2fannounce.php&tr=https%3a%2f%2ftracker.lilithraws.cf%3a443%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2f%5b2a03%3a7220%3a8083%3acd00%3a%3a1%5d%3a451%2fannounce&tr=udp%3a%2f%2fblack-bird.ynh.fr%3a6969%2fannounce&tr=udp%3a%2f%2fhtz3.noho.st%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.birkenwald.de%3a6969%2fannounce&tr=udp%3a%2f%2f%5b2001%3a1b10%3a1000%3a8101%3a0%3a242%3aac11%3a2%5d%3a6969%2fannounce&tr=udp%3a%2f%2fzecircle.xyz%3a6969%2fannounce&tr=udp%3a%2f%2fepider.me%3a6969%2fannounce&tr=udp%3a%2f%2fthouvenin.cloud%3a6969%2fannounce&tr=udp%3a%2f%2ftamas3.ynh.fr%3a6969%2fannounce&tr=udp%3a%2f%2ff1sh.de%3a6969%2fannounce&tr=http%3a%2f%2ftorrentsmd.com%3a8080%2fannounce&tr=http%3a%2f%2ftrackme.theom.nz%3a80%2fannounce&tr=http%3a%2f%2fwww.all4nothin.net%3a80%2fannounce.php&tr=https%3a%2f%2ftr.abiir.top%3a443%2fannounce&tr=udp%3a%2f%2ftracker.yangxiaoguozi.cn%3a6969%2fannounce&tr=https%3a%2f%2ftr.abir.ga%3a443%2fannounce&tr=http%3a%2f%2ftracker.vrpnet.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.altrosky.nl%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2frun.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftorrents.artixlinux.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.auctor.tv%3a6969%2fannounce&tr=http%3a%2f%2ftracker1.itzmx.com%3a8080%2fannounce&tr=udp%3a%2f%2fbt.ktrackers.com%3a6666%2fannounce&tr=udp%3a%2f%2ftracker.4.babico.name.tr%3a3131%2fannounce&tr=https%3a%2f%2ftracker.jiesen.life%3a8443%2fannounce&tr=udp%3a%2f%2fu4.trakx.crim.ist%3a1337%2fannounce&tr=udp%3a%2f%2fpublic.tracker.vraphim.com%3a6969%2fannounce&tr=udp%3a%2f%2fmserver.link%3a6969%2fannounce&tr=udp%3a%2f%2f52.58.128.163%3a6969%2fannounce&tr=udp%3a%2f%2fcancela-tu.creditofiscal.mx%3a3074%2fannounce&tr=udp%3a%2f%2ftracker.filemail.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce
```

**还有一个是NovelAI.leak.Part2 (novelaileakpt2)(可选)(约124.53GiB)**

这个包还包含了NovelAI的一些额外模型，比较有用是`GPT`模型，这个就交给那些大佬来操作，我这个萌新不知道怎么用，可以选择性的下载，这个是别人分享的磁力链（里面加了很多tracker）

```text
magnet:?xt=urn:btih:a20087e7807f28476dd7b0b2e0174981709d89cd&dn=novelaileakpt2&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2f1337.abcvg.info%3a80%2fannounce&tr=udp%3a%2f%2f%5b2001%3a1b10%3a1000%3a8101%3a0%3a242%3aac11%3a2%5d%3a6969%2fannounce&tr=http%3a%2f%2ffxtt.ru%3a80%2fannounce&tr=http%3a%2f%2fi-p-v-6.tk%3a6969%2fannounce&tr=http%3a%2f%2fipv6.1337.cx%3a6969%2fannounce&tr=http%3a%2f%2fipv6.govt.hu%3a6969%2fannounce&tr=http%3a%2f%2fjp.moeweb.pw%3a6969%2fannounce&tr=http%3a%2f%2fopen-v6.demonoid.ch%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.ink%3a6969%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=http%3a%2f%2ft.overflow.biz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.birkenwald.de%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=http%3a%2f%2ftracker.gbitt.info%3a80%2fannounce&tr=http%3a%2f%2ftracker.ipv6tracker.ru%3a80%2fannounce&tr=http%3a%2f%2ftracker.k.vu%3a6969%2fannounce&tr=http%3a%2f%2fvps02.net.orel.ru%3a80%2fannounce&tr=https%3a%2f%2ftr.burnabyhighstar.com%3a443%2fannounce&tr=https%3a%2f%2ftr.fuckbitcoin.xyz%3a443%2fannounce&tr=https%3a%2f%2ftracker.expli.top%3a443%2fannounce&tr=https%3a%2f%2ftracker.foreverpirates.co%3a443%2fannounce&tr=https%3a%2f%2ftracker.gbitt.info%3a443%2fannounce&tr=https%3a%2f%2ftracker.kuroy.me%3a443%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.loligirl.cn%3a443%2fannounce&tr=https%3a%2f%2ftracker.moeblog.cn%3a443%2fannounce&tr=https%3a%2f%2ftracker.tamersunion.org%3a443%2fannounce&tr=https%3a%2f%2ftracker1.520.jp%3a443%2fannounce&tr=https%3a%2f%2ftracker2.ctix.cn%3a443%2fannounce&tr=http%3a%2f%2f207.241.226.111%3a6969%2fannounce&tr=http%3a%2f%2f207.241.231.226%3a6969%2fannounce&tr=udp%3a%2f%2f6ahddutb1ucc3cp.ru%3a6969%2fannounce&tr=udp%3a%2f%2f91.216.110.52%3a451%2fannounce&tr=udp%3a%2f%2f%5b2001%3a470%3a1%3a189%3a0%3a1%3a2%3a3%5d%3a6969%2fannounce&tr=udp%3a%2f%2f%5b2a03%3a7220%3a8083%3acd00%3a%3a1%5d%3a451%2fannounce&tr=udp%3a%2f%2f%5b2a0f%3ae586%3af%3af%3a%3a220%5d%3a6969%2fannounce&tr=udp%3a%2f%2fadmin.52ywp.com%3a6969%2fannounce&tr=udp%3a%2f%2fbananas.space%3a6969%2fannounce&tr=udp%3a%2f%2fblack-bird.ynh.fr%3a6969%2fannounce&tr=udp%3a%2f%2fcamera.lei001.com%3a6969%2fannounce&tr=http%3a%2f%2fchouchou.top%3a8080%2fannounce&tr=udp%3a%2f%2fepider.me%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2ff1sh.de%3a6969%2fannounce&tr=udp%3a%2f%2ffe.dealclub.de%3a6969%2fannounce&tr=udp%3a%2f%2fh85-235-17-132.cust.a3fiber.se%3a6969%2fannounce&tr=udp%3a%2f%2fhtz3.noho.st%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2fipv6.tracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2fjutone.com%3a6969%2fannounce&tr=udp%3a%2f%2flaze.cc%3a6969%2fannounce&tr=udp%3a%2f%2fmail.artixlinux.org%3a6969%2fannounce&tr=udp%3a%2f%2fmail.zasaonsk.ga%3a6969%2fannounce&tr=udp%3a%2f%2fmirror.aptus.co.tz%3a6969%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fnew-line.net%3a6969%2fannounce&tr=udp%3a%2f%2fopen.4ever.tk%3a6969%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.free-tracker.ga%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=http%3a%2f%2fopen.tracker.ink%3a6969%2fannounce&tr=udp%3a%2f%2fpsyco.fr%3a6969%2fannounce&tr=udp%3a%2f%2frekcart.duckdns.org%3a15480%2fannounce&tr=udp%3a%2f%2fsanincode.com%3a6969%2fannounce&tr=udp%3a%2f%2fstatic.202.35.76.144.clients.your-server.de%3a6969%2fannounce&tr=udp%3a%2f%2fstatic.54.161.216.95.clients.your-server.de%3a6969%2fannounce&tr=udp%3a%2f%2ftamas3.ynh.fr%3a6969%2fannounce&tr=udp%3a%2f%2fthouvenin.cloud%3a6969%2fannounce&tr=udp%3a%2f%2ftorrentclub.space%3a6969%2fannounce&tr=udp%3a%2f%2ftorrents.artixlinux.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker-udp.gbitt.info%3a80%2fannounce&tr=udp%3a%2f%2ftracker.altrosky.nl%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.beeimg.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.birkenwald.de%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.blacksparrowmedia.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&tr=http%3a%2f%2ftracker.dler.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=http%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker2.itzmx.com%3a6961%2fannounce&tr=udp%3a%2f%2fuploads.gamecoast.net%3a6969%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fyahor.ftp.sh%3a6969%2fannounce&tr=udp%3a%2f%2fzecircle.xyz%3a6969%2fannounce&tr=http%3a%2f%2f%5b2001%3a1b10%3a1000%3a8101%3a0%3a242%3aac11%3a2%5d%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=http%3a%2f%2fwepzone.net%3a6969%2fannounce&tr=http%3a%2f%2fshare.camoe.cn%3a8080%2fannounce&tr=http%3a%2f%2ft.acg.rip%3a6699%2fannounce&tr=http%3a%2f%2fincine.ru%3a6969%2fannounce&tr=https%3a%2f%2f1337.abcvg.info%3a443%2fannounce&tr=udp%3a%2f%2fbuddyfly.top%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.4.babico.name.tr%3a3131%2fannounce&tr=udp%3a%2f%2f52.58.128.163%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.filemail.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.leech.ie%3a1337%2fannounce&tr=udp%3a%2f%2fleefafa.tk%3a6969%2fannounce&tr=http%3a%2f%2fnyaa.tracker.wf%3a7777%2fannounce&tr=udp%3a%2f%2fpublic.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker6.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=http%3a%2f%2ftracker.lelux.fi%3a80%2fannounce&tr=udp%3a%2f%2fcutscloud.duckdns.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.jonaslsa.com%3a6969%2fannounce&tr=udp%3a%2f%2faarsen.me%3a6969%2fannounce&tr=http%3a%2f%2fopen.acgnxtracker.com%3a80%2fannounce&tr=udp%3a%2f%2frun.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=http%3a%2f%2ftracker.vrpnet.org%3a6969%2fannounce&tr=udp%3a%2f%2f207.241.226.111%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.joybomb.tw%3a6969%2fannounce&tr=udp%3a%2f%2f207.241.231.226%3a6969%2fannounce&tr=udp%3a%2f%2fcancela-tu.creditofiscal.mx%3a3074%2fannounce&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2fbubu.mapfactor.com%3a6969%2fannounce&tr=udp%3a%2f%2f94-227-232-84.access.telenet.be%3a6969%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=https%3a%2f%2ft1.hloli.org%3a443%2fannounce&tr=http%3a%2f%2fopen.acgtracker.com%3a1096%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2fchouchou.top%3a8080%2fannounce&tr=udp%3a%2f%2ftracker2.dler.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tcp.exchange%3a6969%2fannounce&tr=udp%3a%2f%2frep-art.ynh.fr%3a6969%2fannounce&tr=udp%3a%2f%2fben.kerbertools.xyz%3a6969%2fannounce&tr=udp%3a%2f%2felementsbrowser.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.dstud.io%3a6969%2fannounce&tr=udp%3a%2f%2fmoonburrow.club%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.yangxiaoguozi.cn%3a6969%2fannounce&tr=ws%3a%2f%2fhub.bugout.link%3a80%2fannounce&tr=wss%3a%2f%2ftracker.openwebtorrent.com%3a443%2fannounce&tr=udp%3a%2f%2fopen.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2fqtstm32fan.ru%3a6969%2fannounce&tr=udp%3a%2f%2fu4.trakx.crim.ist%3a1337%2fannounce&tr=udp%3a%2f%2fpublic.tracker.vraphim.com%3a6969%2fannounce&tr=udp%3a%2f%2fsmtp-relay.odysseylabel.com.au%3a6969%2fannounce&tr=http%3a%2f%2fwww.wareztorrent.com%3a80%2fannounce&tr=http%3a%2f%2ftorrentsmd.com%3a8080%2fannounce&tr=https%3a%2f%2ftrackme.theom.nz%3a443%2fannounce&tr=http%3a%2f%2ftrackme.theom.nz%3a80%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.cf%3a443%2fannounce&tr=https%3a%2f%2ftr.abiir.top%3a443%2fannounce&tr=http%3a%2f%2fwww.all4nothin.net%3a80%2fannounce.php&tr=https%3a%2f%2ftr.abir.ga%3a443%2fannounce&tr=udp%3a%2f%2f%5b2a04%3aac00%3a1%3a3dd8%3a%3a1%3a2710%5d%3a2710%2fannounce&tr=udp%3a%2f%2ftracker1.itzmx.com%3a8080%2fannounce&tr=udp%3a%2f%2fretracker.hotplug.ru%3a2710%2fannounce&tr=udp%3a%2f%2fslicie.icon256.com%3a8000%2fannounce&tr=udp%3a%2f%2f960303.xyz%3a6969%2fannounce&tr=udp%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2f184.105.151.166%3a6969%2fannounce&tr=udp%3a%2f%2fbt2.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2fcutiegirl.ru%3a6969%2fannounce&tr=udp%3a%2f%2fopentor.org%3a2710%2fannounce&tr=udp%3a%2f%2ftr.cili001.com%3a8070%2fannounce&tr=udp%3a%2f%2ftracker.openbtba.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker4.itzmx.com%3a2710%2fannounce&tr=udp%3a%2f%2ftr.bangumi.moe%3a6969%2fannounce&tr=udp%3a%2f%2fwepzone.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.bitsearch.to%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.ddunlimited.net%3a6969%2fannounce&tr=udp%3a%2f%2fconcen.org%3a6969%2fannounce&tr=udp%3a%2f%2ffh2.cmp-gaming.com%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.auctor.tv%3a6969%2fannounce&tr=https%3a%2f%2ftracker.srv00.com%3a443%2fannounce&tr=http%3a%2f%2fvps-dd0a0715.vps.ovh.net%3a6969%2fannounce&tr=http%3a%2f%2fretracker.hotplug.ru%3a2710%2fannounce&tr=http%3a%2f%2f%5b2a04%3aac00%3a1%3a3dd8%3a%3a1%3a2710%5d%3a2710%2fannounce&tr=http%3a%2f%2ftracker.files.fm%3a6969%2fannounce&tr=http%3a%2f%2ftracker.bt4g.com%3a2095%2fannounce&tr=http%3a%2f%2ftracker.electro-torrent.pl%3a80%2fannounce&tr=https%3a%2f%2fxtremex.herokuapp.com%3a443%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.skynetcloud.site%3a6969%2fannounce&tr=https%3a%2f%2ftracker.m-team.cc%3a443%2fannounce.php&tr=udp%3a%2f%2fv1046920.hosted-by-vdsina.ru%3a6969%2fannounce&tr=udp%3a%2f%2fbt.ktrackers.com%3a6666%2fannounce&tr=http%3a%2f%2ftracker.mywaifu.best%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.artixlinux.org%3a6969%2fannounce&tr=http%3a%2f%2ftracker1.itzmx.com%3a8080%2fannounce&tr=http%3a%2f%2ftorrenttracker.nwc.acsalaska.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fapp.icon256.com%3a8000%2fannounce&tr=udp%3a%2f%2fkeke.re%3a6969%2fannounce&tr=udp%3a%2f%2fmserver.link%3a6969%2fannounce&tr=udp%3a%2f%2ftracker3.itzmx.com%3a6961%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2fadmin.videoenpoche.info%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce
```
<!-- endtab -->

<!-- tab stable-diffusion-webui -->
去[GitHub](https://github.com/AUTOMATIC1111/stable-diffusion-webui)上下载`webui`的源

需要安装Git，访问[Git官网](https://git-scm.com/)安装Git，直接全部默认安装就行，不需要去搜索什么教程）。

自行创建一个文件夹，在里面执行下面的代码（文件夹名称还是用英文的比较好，以免出现什么bug），

```hexo
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git

# 有需要的自行切换
ip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```
{% tip info %}如果没有下载成功，把源切换成清华的源啊，国内的下载速度慢{% endtip %}

<!-- endtab -->
{% endtabs %}

## CUDA安装（不需要的可跳过）

{% folding yellow, 安装教程 %}

先查询自己的版本是支持的最高版本是多少，我们用命令**nvidia-smi**来查询你的电脑支持的最高版本！

![WR8LM9OTQ5U2CUWIRXORXa9acca722aeb8cbc.png](https://img.picgo.net/2022/12/07/WR8LM9OTQ5U2CUWIRXORXa9acca722aeb8cbc.png)

{% tip %}这里由于我有安装`CUDA`，这里是不会显示什么的，你没有安装的话，这里会显示你电脑可以安装的版本，右上角显示的是你支持的最高的版本号，不要安装的太高，低于上面的版本就行（如我安装的是`11.6`版本，我电脑也支持`11.7`）。{% endtip %}

然后我们进入`CUDA`的官网,下载对应的版本，也可以下载低一点的版本，不一定下载高版本，我感觉都差不多

[![JWG4S46NUSR9Y30BES29Tfafb623501dbe1fa.png](https://img.picgo.net/2022/12/07/JWG4S46NUSR9Y30BES29Tfafb623501dbe1fa.png)](https://www.picgo.net/image/UZrh4)

对应自己的系统来下载，别下载其它系统的`CUDA`虽然不知道有什么bug，不过还是下载自己对应的系统比较好，因为我的是**windows 11**所以我下载的是**11**的版本

{% tip %}离线版是把整个版本下载下来（需要下很久），网络版是给你一个安装程序，等它加载所有的`CUDA`就可以安装，两个区别不大，看你想要下载哪个了{% endtip %}

{% btns rounded grid5 %}
{% cell CUDA官网, https://developer.nvidia.com/cuda-toolkit-archive, fas fa-download %}
{% endbtns %}

下载好后就是安装，这里其它的都是默认，只有一个是选择，我截图就截这一张，以免你们看多了懵（主要是我懒）。

**这里选择自定义安装**

![](./img/%40%5BWMPMM%7D5985AJ6P%7DW3%40%7BZ3.png)

**这里全部选择安装，不要想这么多。**

[![Q2S4CT23C_V75GF1OY9FBTBd457c41f2e1015b5.png](https://img.picgo.net/2022/12/07/Q2S4CT23C_V75GF1OY9FBTBd457c41f2e1015b5.png)](https://www.picgo.net/image/UZIhO)

{% note default simple %}后面的安装路径你可以自己改，不过我还是推荐用默认路径。{% endnote %}

安装完成后下面我们用`cmd`来查询自己是否安装成功

**cuDNN下载及安装**

我们先点击下面的链接，我们需要去注册一个账号，里面的信息随便填，反正

{% btns rounded grid5 %}
{% cell 下载地址, https://developer.nvidia.com/rdp/cudnn-download, fas fa-download %}
{% endbtns %}

打上勾，选择存档的`cuDNN`版本

[![ORK7MY2SC15ba1471b552167a.png](https://img.picgo.net/2022/12/07/ORK7MY2SC15ba1471b552167a.png)](https://www.picgo.net/image/UZjwL)

找到自己对应的版本

[![989e4291ed91d96fdf.png](https://img.picgo.net/2022/12/07/989e4291ed91d96fdf.png)](https://www.picgo.net/image/UZeS2)

{% note default simple %}
没有找到自己对应的版本号，选择后面有`x`符号的（比如我的`11.6.55`，我安装的就是`cuDNN v8.5.0`版本）。
然后选择`windows`的压缩包，如果你是其它的系统自行选择对应的安装包。
{% endnote %}

把下面的安装包直接解压到路径下

![XM9LCHRV257cad544ed7fb40.png](https://img.picgo.net/2022/12/07/XM9LCHRV257cad544ed7fb40.png)

找不到文件路径自己去高级变量那里看，安装的时候，它直接默认安装了环境变量

[![SQG7PRP9N3d72b5987f35e2ad.png](https://img.picgo.net/2022/12/07/SQG7PRP9N3d72b5987f35e2ad.png)](https://www.picgo.net/image/UZKar)

**添加至系统变量**

开始验证安装是否成功

往系统环境变量中的 `Path` 添加如下路径（根据自己的路径进行修改）

![UL4W3DO_3BWCM53K1K3b2f08970f8d1827.png](https://img.picgo.net/2022/12/07/UL4W3DO_3BWCM53K1K3b2f08970f8d1827.png)

这里的是我的安装路径，你自己改过就自己改成自己自定义安装路径

[![Quicker_20221122_181115690dc0b7fdf87d40.md.png](https://img.picgo.net/2022/12/07/Quicker_20221122_181115690dc0b7fdf87d40.md.png)](https://www.picgo.net/image/UZvKJ)

在这个路径下`cmd`点击`enter`回车，打开命令框

如我的是`C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.6\extras\demo_suite`

[![4RVAXUZRS1GVJ06Q5XG1cde34697c47f673.md.png](https://img.picgo.net/2022/12/07/4RVAXUZRS1GVJ06Q5XG1cde34697c47f673.md.png)](https://www.picgo.net/image/UZ5Mf)

执行`deviceQuery.exe`和`bandwidthTest.exe`两个exe文件

[![H3PZ3_XFK5Pf634ce72793d76d4.md.png](https://img.picgo.net/2022/12/07/H3PZ3_XFK5Pf634ce72793d76d4.md.png)](https://www.picgo.net/image/UZR0i)

下面你还看见了`deviceQuery`这些信息，可以通过信息看出来`11.6`是所支持的最高版本的CUDA，后面的`Runtime Version`是实际运行的时候使用的CUDA版本，最后面Device0是第一块显卡的意思，如果你有多个显卡就会显示Device1。

[![BF9NR1CVF_M9340_QBM045ad0ce76a50b4a.md.png](https://img.picgo.net/2022/12/07/BF9NR1CVF_M9340_QBM045ad0ce76a50b4a.md.png)](https://www.picgo.net/image/UZz8j)

{% endfolding %}

## 部署

1. **配置stable-diffusion-webui环境**

    这里上面有讲，这里开始这会自动帮你配置好Venv环境以及依赖，不过前提不要遇到什么`bug`,这里我放一些我遇到的`bug`啊，你们的有一些部署产生的问题，有一些是显卡不支持，有的是爆显存了，内存我推荐16G的，`NovelAI`运行的需要要求很高，低一点的也可以，不过那样很烧显卡，管端那边跑起来最低都是11GB+开始，想正常运行就更恐怖，需要20GB+了，这个已经是属于企业用的显卡范畴了。

    下面显示我的模块需要更新，我以为是我的需要更新，`pip list`查询是已经更新了的，后面发现是`stable-diffusion-webui`文件夹里面的模块没有更新，这需要你定位到`stable-diffusion-webui-cn\venv\Scripts`下进行更新，显示这个有点烦，眼不见为净的可以去更新一下（听说是可以不用更新，不过我感觉还是更新了好，毕竟显示在那里碍眼，没有显示的不用管）
    
    ![LJZ82YZNR71dbeb405eae3ddad.png](https://img.picgo.net/2022/12/07/LJZ82YZNR71dbeb405eae3ddad.png)

    如果显示这样的是因为你没有开启**魔法**，安装过程对网络要求较高，需要你自己去开启**魔法**。

    ![WQRXK02HQDHTOUdd79eeb5c7e04c11.png](https://img.picgo.net/2022/12/07/WQRXK02HQDHTOUdd79eeb5c7e04c11.png)

    这里再附上DeepDanbooru下载，这是针对二次元图片的tag属性识别算法。
    
    ```html
    https://github.com/KichangKim/DeepDanbooru/releases
    ```

    下载好之后把它放在`table-diffusion-webui\models\deepbooru`文件夹下（全部解压到这个文件夹下）

2. **复制粘贴模型**

    前面我们下载了`novelaileak`的模型，现在我们去`novelaileak\stableckpt`中选择一个模型，这里选择最多的是`animefull-final-pruned`模型（如果硬盘空间足够，可以都全部复制过来），然后把它的`model.ckpt`复制到`stable-diffusion-webui\models\Stable-diffusion`。

    {% folding yellow, 模型更改及优化（重要） %}

### 模型文件配置

如果你有去复制多个模型，你都会看见模型目录下都有`animevae.pt`文件，这个是`vae`模型，里面包含了一些NovelAI官方的调优参数，直接复制到`stable-diffusion-webui\models\Stable-diffusion`文件夹下，并改名`模型名称.vae.pt`（如我的是`novelailatest-pruned.ckpt`,那么vae模型就该叫`novelailatest-pruned.vae.pt`）

启动的时候你如果看见`Loading VAE weights from:XXXX`就表明你vae配置成功了（如下图）。

[![Quicker_20221122_181115690dc0b7fdf87d40.md.png](https://img.picgo.net/2022/12/07/Quicker_20221122_181115690dc0b7fdf87d40.md.png)](https://www.picgo.net/image/UZvKJ)

### 添加config

在模型文件夹下都有一个`config`文件，你用哪个模型就把它的`config.yml`文件放到`stable-diffusion-webui\models\Stable-diffusion`文件夹下，并且改名`模型名称.yaml`（如我的模型重命名为`novelailatest-pruned.ckpt`，那config文件改名为`novelailatest-pruned.yaml`）。

### 添加hypernetworks模型

去自己下载的模型文件下`novelaileak\stableckpt\modules\modules`里面的文件全部复制粘贴到`stable-diffusion-webui\models\hypernetworks`下（你在复制模型文件的时候有看见）。

![IDQKDBW2GEGL1O970577940129be56a.png](https://img.picgo.net/2022/12/07/IDQKDBW2GEGL1O970577940129be56a.png)

这样你可以在`Settings-Stable Diffusion-Stable Diffusion finetune hypernetwork`选择你想要的`hypernetwork`模型。

这一参数影响图像的画风，每张图及每个人的所适用的hypernetwork模型都是不同的，你按照你自己的喜好来。

### 修改Ignore last layers of CLIP model（配好再看）

听说这是NovelAI官方搞的小动作，如果保持默认和管端显示有很大的差距，将`Settings-Stable Siffusion-Ignore last layers of CLIP model`改成2即可。

{% endfolding %}

3. **开始部署stable-diffusion-webui**

    {% folding yellow, 碎碎念 %}

这里是大部分都配置不行的地方,主要的问题有显存爆了,要么就是你的电脑不支持,或者遇到`python`报的错误去官网上找不到答案,还有你的`CUDA`没有安装(有一些是这个没有安装报的错),或者是你的电脑不支持部署`NovelAI`,它配置需要的要求很高,你想配低一点我这里只有一部分教程适合你,想配在本地又电脑配置不够你只能去找想相关的教程

{% endfolding %}

    ```text
    # 下载stable-diffusion-webui
    git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
    # 用管理员身份cd你的文件夹根目录下
    cd stable-diffusion-webui
    #运行此文件
    webui-user.bat
    ```

基本上到这里就已经完成了，如果你的还没有部署成功，一般都是电脑配置太低或者你的显卡不是N卡，要么就是不会魔法。
