---
title: 基于 hexo 搭建个人博客（一）
tags:
  - 'hexo,butterfly'
swiper_index: 1
categories:
  - hexo搭建教程
cover: 'https://tva1.sinaimg.cn/large/0072Vf1pgy1foxkg3fvi4j31hc0u0h35.jpg'
abbrlink: 1880
date: 2022-07-06 17:57:00
---
## **准备工作（小白必看）**

{% tabs test3, -1 %}

<!-- tab npdejs -->
**下载链接：[nodejs](https://nodejs.org/zh-cn/download/releases/)**

​	 这里我准备的是历史版本的下载链接，~~好像最新版的不更新npm，需要自己去手动更新，总之特别麻烦，尽量下载旧版本~~。

<!-- endtab -->

<!-- tab git -->

下载链接：[git]((git-scm.com)](https://git-scm.com/))

​	一键next下去就行，如果有什么特殊需求自行配置，路径什么的自己更改

<!--entab-->

<!-- tab Typora -->
**下载链接：[Typroa]([https://bingmeng.lanzouq.com/irlDL07i8uti)**

​	这里我准备的下载包，是<font color="red">某个大神经过破解的版本</font>。

<!-- endtab -->

<!-- tab vscode -->
**下载链接：[vscode](https://bingmeng.lanzouq.com/iEDgw07i9a4j)，*这是我使用的编辑器 ，你也可以用其他的，不一定要使用我的这个***

​	 <font color="red">注</font>：这是我打包好的下载链接,后续可能会更新，自己去网页搜索下载。当然，<font color="red">下载速度不敢恭维</font>，你可以使用<font color="red">CDN</font>加速下载,或者使用<font color="red">IDM</font>来下载,下面的是国内加速的使用方式,<font color="red">IDM</font>下载在隔壁

 ```text
 国内加速链接:vscode.cdn.azure.cn
 <!-- 原下载链接 -->
 https://az764295.vo.msecnd.net/stable/30d9c6cd9483b2cc586687151bcbcd635f373630/VSCodeUserSetup-x64-1.68.1.exe
 <!-- 更改后的链接，新版本链接自己获取-->
 https://vscode.cdn.azure.cn/stable/30d9c6cd9483b2cc586687151bcbcd635f373630/VSCodeUserSetup-x64-1.68.1.exe
 
 ```

<!-- endtab -->

<!-- tab IDM-->

下载链接：[IDM](https://bingmeng.lanzouq.com/iY2pB07ib1gj)

​	 <font color="red">注</font>：我准备的这个是破解版，如果后续更新请<font color="red">提醒我！</font>

<!-- endtab -->

{% endtabs %}

## **安装hexo框架**

<!-- <details><summary>点击查看安装<font color="red"> Hexo </font>教程</summary> -->

{% folding yellow, 点击查看安装<font color="red"> Hexo </font>教程 %}

1. 我们要新建一个文件夹，这个目录就是你的博客目录了，文件夹名可以取名自己喜欢的。

   - 首先我们前往官方网址：<a href="https://hexo.io/zh-cn/" target="_blank">hexo官网</a>
   - 使用npm安装{% label hexo blue %}

   ```
   npm config set registry https://registry.npm.taobao.org
   #下载慢的用这个，将npm源替换为阿里的镜像。之后的安装就会迅速   很多了
   npm install hexo-cli -g
   # hexo-cli 是 hexo博客的指令集
   hexo init
   # 有了指令集以后，使用它的初始化指令来初始化安装Hexo博客
   ```

   > <font color="red">注：</font>如果无法下载文件（基本上情况都是这样，只要你没有设置管理员权限，只能用以下方式下载安装），转入管理员模式，Windows在运行下{% label ctrl red %} + {%label shift red %} + {% label enter red %}就可以以管理员身份运行,	然后跳转到自己的{% label 博客目录 blue %}下。

   ![](https://s2.loli.net/2022/07/07/GxnagdIPYN3AzZQ.png)

2. 安装插件，在自己的{% label 博客目录 blue %}下运行，按照自己的需求选择下载安装插件。

   ```bash
   npm install hexo-renderer-stylus --save
   # nib css支持插件，如无需求，可跳过
   npm install hexo-generator-feed --save
   # RSS订阅支持插件，如无需求，可跳过
   npm install hexo-generator-sitemap --save
   # sitemap生成插件，帮助搜索引擎抓取，如无需求，可跳过
   npm install hexo-admin --save
   # 网页端hexo文档管理插件，如无需求，可跳过
   npm install hexo-deployer-git --save
   # git部署插件，必须安装
   ```

3. 常用命令

   ```bash
   hexo clean
   #清空缓存 
   hexo g #generate的简写
   #重新编译
   hexo s #server的简写
   #打开本地访问
   hexo new <layout> "文章title"
   #新建文章
   hexo d #deploy的简写
   #部署到云端
   ```

4. 本地预览命令：在{% label 博客目录 blue %}的路径下执行以下命令。

   ```bash
   hexo s #server的简写
   ```

   ![](https://s2.loli.net/2022/07/07/PubQfghezy2ocpS.png)

   然后在浏览器中打开链接[](localhost:4000) ,就能看到我们已经布置好的博客了

   ![](https://s2.loli.net/2022/07/07/m2YlEwOKQh798Jq.png)

   > <font color="red">注：</font>如果你安装了**hexo-amin**插件，就可以访问[](localhost:4000/admin)管理你的文章,并且你可以在可视化的界面下操作你的文章内容。

   ![](https://s2.loli.net/2022/07/07/tLasm28kq7np9Nc.png)

   至此，博客第一步安装就完成了。

{% endfolding %}

## **注册或者登录GitHub**

<!-- <details><summary>点击查看<font color="red"> Github </font>教程</summary> -->

{% folding blue, 点击查看<font color="red"> Github </font>教程 %}
1. 创建<a href=" https://github.com/" target="_blank">GitHub官网</a>仓库

 - 首先我们前往官方网址：<a href=" https://github.com/" target="_blank">GitHub官网</a>

 - 点击右上角的<font color="red">Sign up（注册）</font>，或者是<font color="red">Sign in（登录）,</font>注册我就不说明了，不知道的可以自行<a href="https://www.baidu.com/" target="_blank">百度</a>。

![](https://s2.loli.net/2022/07/08/Bk9FxtzL7CbKTWj.png)

- 仓库的格式必须是：<font color="red"><用户名>.github.io</font>

- Description：为描述仓库（选填）

- 勾选 <font color="red">Initialize this repository with a README </font>初始化一个 README.md 文件

- 点击 Creat repository 创建

  ![](https://s2.loli.net/2022/07/08/IilVj93Kyhnk2qZ.png)

​	那么，现在我们就可以进行下一步的步骤了

{% endfolding %}

## **安装 Git 可跳过**

<details><summary>点击查看<font color="red"> Git </font>配置教程</summary>
    <ol>
        <li>
        	第一步安装好 <font color="red"> Git </font>
        </li>
        <ul>
            <li>
        		点击鼠标右键,就可以看见已经安装好的、<font color="red"> Git </font>，或者在开始菜单搜索。
            </li>
            <li>
            	<font color="red"> Git cmd</font>是 Windows 命令行的指令风格。
            </li>
            <li>
            	<font color="red"> Git Bash </font>Linux 系统的指令风格（建议使用）
            </li>
            <li>
            	<font color="red"> Git GUI </font> 是图形化界面（新手学习不建议使用）
            </li>
        </ul>
        <li>
        	第二步，打开<font color="red"> Git Bash </font>，在创建好的博客目录下打开。
        </li>
    </ol>
    <img src="https://s2.loli.net/2022/07/08/8yuPjOGdp1X6QZC.png"/>
</details>

## **环境配置**

{% folding red,<font color="red"> Git </font>配置教程 %}
1. 常用的<font color="red"> Git </font>命令。

   ```bash
   git config -l  //查看所有配置

   git config --system --list //查看系统配置

   git config --global --list //查看用户（全局）配置
   ```

2. 使用<font color="red"> Git </font>配置用户名和邮箱。

   ```bash
   git config --global user.name "你的用户名"

   git config --global user.email "你的邮箱"
   ```

3. 连接常用的<font color="red"> Git </font>命令。

   ```bash
   git config -l  //查看所有配置

   git config --system --list //查看系统配置

   git config --global --list //查看用户（全局）配置
   ```

4. 使用<font color="red"> Git </font>配置用户名和邮箱。

   ```bash
   git config --global user.name "你的用户名"
   
   git config --global user.email "你的邮箱"
   ```

   - 输入后没有报错就代表布置成功了

   - 可以通过<font color="red"> config -1 </font>来检查是否配置成功，从这里<font color="red"> Git </font>安装及配置就全部完成了。

5. 连接<font color="red"> GitHub </font>

   - 在命令行下执行指令，生成 ssh 公钥。

   ```bash
   ssh-keygen -t rsa -C "你的邮箱"
   ```

   - 之后打开自己C盘下用户文件夹下的.ssh的文件夹，会看到 id_rsa.pub 文件
   - 用记事本打开上述图片中的公钥（id_rsa.pub），复制里面的全部内容，然后开始在<font color="red"> GitHub </font>中配置ssh密钥。

   ![](https://s2.loli.net/2022/07/08/PFLsSoebm9I1AGk.png)

6. 将 SSH KEY 配置到 <font color="red"> GitHub </font>下。

   - 进入<font color="red"> GitHub </font>，点击右上角头像选择<font color="red"> settings </font>

   ![](https://s2.loli.net/2022/07/08/1uOAaHbqGNLg5iB.png)

   ![](https://s2.loli.net/2022/07/08/MWPpe1SEqLNZzHA.png)

   - 然后点击<font color="red"> Add SHH key </font>保存

7. 我们开始测试连接，输入以下命令

   ```bash
   ssh -T git@github.com
   ```
   如果出现以下的信息，就代表你已经连接上了<font color="red"> GitHub </font>。

   ![](https://s2.loli.net/2022/07/08/L7uF3oGx1fVeZSj.png)

   到了这里，就代表你完成了环境的准备工作，后续就可以继续完善你的博客并上传到你的云端了。

{% endfolding %}