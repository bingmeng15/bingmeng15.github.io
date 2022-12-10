---
title: 搭建个人博客（二）
tags: 'hexo,butterfly'
cover: 'https://gcore.jsdelivr.net/npm/ushio-api-img-moe@5.0.4/img_48_1920x1080_1200_null_normal.jpg'
categories: hexo
swiper_index: 2
abbrlink: 38690
date: 2022-07-09 13:50:20
---
## **初始化 Hexo**

1. 在目标路径（自己创建的路径）打开 <font color="red"> CMD </font>命令窗口(（也可以用 <font color="red"> Git </font>）执行以下代码初始化项目。

   ```bash
   hexo init blog-demo(项目名)
   ```

  > <font color="red">注意：</font>这个方式是在你自己创建的目录下重新再创建一个文件夹目录，你可以省略<font color="red"> blog-demo </font>,可以直接<font color="red"> hexo imit </font>。

2. 进入你的博客路径，输入以下命令，安装相关的依赖。

   ```base
   npm i
   ```

    ![](https://s2.loli.net/2022/07/09/9AgrRcMkEBVPwhY.png)

3. 初始化完成后，你的目录下有以下文件及文件夹（如图所示）：

  ![](https://s2.loli.net/2022/07/09/CyRPVdNhZIUM6sS.png)

- 配置解释


  | 配置                  | 解释                                   |
   | :-------------------- | :------------------------------------- |
   | scaffolds             | 生成文章的一些模板                     |
   | node_modules          | 依赖包                                 |
   | source                | 用来存放你的文章                       |
   | themes                | 主题                                   |
   | npmignore             | 发布时忽略的文件（可忽略）             |
   | _config.landscape.yml | 主题的配置文件                         |
   | _config.yml           | 博客的配置文件                         |
   | package.json          | 项目名称、描述、版本、运行和开发等信息 |

+ 输入<font color="red"> hexo s </font>（server 的简写）。

   ![](https://s2.loli.net/2022/07/09/NIoPUizs8lpcq3T.png)

  此时我们只需要在浏览器下输入地址：http://localhost:4000/ ，就会有以下显示结果，这就表明你搭建成功了

  ![](https://s2.loli.net/2022/07/09/CRmGIznKyNQjrxO.png)

## **部署到<font color="red"> GIthub </font>**

1. 此时我们将静态博客挂载到<font color="red"> GIthub Pages </font>上。

  > 在第一篇的教程中，我们已经完成了对<font color="red"> GitHub </font>账户的注册以及 <font color="red"> GitHub Pages </font>的创建，并且也配置好了<font color="red"> SSH key </font>，现在我们只需要将博客部署到<font color="red"> GitHub Pages </font> 上就可以了。

2. 安装 <font color="red"> hexo-deployer-git --save </font>

  ```bash
  npm install hexo-deployer-git --save
  ```

3. 修改<font color="red"> _config.yml </font> 文件

- 在自己创建的<font color="red">博客目录</font>下找到<font color="red"> _config.yml </font> 配置文件，可以在里面修改大部分配置，详情可以参考官方的配置[文件描述](https://hexo.io/zh-cn/docs/configuration)。

- 在<font color="red"> _config.yml </font>文件下修改<font color="red"> deploy </font>，也就在最后一行，复制自己的<font color="red"> GitHub </font>项目地址。

  ```bash
  deploy:
    type: git
    repository: git@github.com:tzy1375512tzy13755126023.github.io.git
    branch: main
  ```

  ![](https://s2.loli.net/2022/07/09/dRye5sLt7kNCpq1.png)

    > <font color="red"> 注：</font>2020年10月后github新建仓库默认分支改为main，自己注意修改

 - 把项目部署到<font color="red"> GIthub </font>上。

   修改好配置后，运行以下指令，将你的博客部署到 <font color="red"> GIthub </font>。

   ```bash
   hexo clean
   hexo g #generate 简写
   hexo d #deploy 简写
   ```
  - 参数释义

   
   | 配置          | 解释                                                 |
   | ------------- | :--------------------------------------------------- |
   | hexo clean    | 删除之前生成的文件，若未生成过静态文件，可忽略此命令 |
   | hexo generate | 生成静态文章                                         |
   | hexo deploy   | 部署文章                                             |
   
   ​	不出意外，在浏览器上输入 https://username.github.io （把username修改为自己的用户名），就可以访问你的博客了。
