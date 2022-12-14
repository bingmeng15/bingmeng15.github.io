---
title: JMeter和java8安装
tags: 软件测试
categories: 学习笔记
abbrlink: f8bc
date: 2022-12-12 15:18:11
cover: https://tva4.sinaimg.cn/large/87c01ec7gy1frmmihp11yj21hc0u0hdu.jpg
---

## jdk下载和安装

> 注：因为`JMeter`运行需要依赖`jdk`环境，所以在安装`JMeter`之前需要配置安装`jdk`且配置好环境变量，需要`jdk8`以上的版本(这里推荐安装java8版本就够了)。

#### `jdk`下载：

{% link https://www.oracle.com/java/technologies/javase/javase8u211-later-archive-downloads.html,JMeter,https://ts1.cn.mm.bing.net/th/id/R-C.0c660c968839e2580086f25aea8e666d?rik=fknCk60rtD9lhw&riu=http%3a%2f%2ficon.chrafz.com%2fuploads%2fallimg%2f160919%2f1-1609191639570-L.png&ehk=KropbEGpApuUWJGSV5H%2fTAUmKgcA%2bJaK0J3OY91lA5Q%3d&risl=&pid=ImgRaw&r=0,下载地址 %}

{% note default simple %}
这里就不截图了，找到自己的系统版本，下载就可以了。

{% span red, 注 %}：这里下载需要一个登录账号，你需要注册一个。
{% endnote %}

#### `jdk`安装

点击安装包，并点击下一步。

![](https://pic.imgdb.cn/item/6396dc03b1fccdcd3626fdf1.png)

{% note default simple %}后面还有`jre`安装，路径记得更改。{% endnote %}
## 配置环境变量

1. 环境配置

    打开高级系统设置（用系统的搜索就可以找到），打开`环境变量`，在系统变量下创建一个`JAVA_HOME`变量名，并且找到你的jdk安装路径。

    ```
    变量名：JAVA_HOME

    变量值：jdk的安装路径
    ```
    ![](https://pic.imgdb.cn/item/6396ddd9b1fccdcd362954ff.png)

   + 这里再添加一个`ClassPath`变量，方法和`java-home`一样，在系统变量下创建一个`ClassPath`变量，引入变量值。

    ```
    变量名：ClassPath
    变量值：.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;
    ```
    ![](https://ask.qcloudimg.com/http-save/yehe-8223537/27792e942b1bf3f2f847340e292a3fe8.png?imageView2/2/w/1620)

   + 找到`Path`,进入界面新建两个`java`环境变量。

    ```
    %JAVA_HOME%\bin
    %JAVA_HOME%\jre\bin
    ```

    ![](https://pic.imgdb.cn/item/6396e1d0b1fccdcd36305110.png)

    + 到这里基本上已经完成。

2. java运行环境的验证

   + 敲击键盘的`Win+R`按键，打开运行提示框，输入cmd（command简写，打开“命令框”）

    ![](https://ask.qcloudimg.com/http-save/yehe-8223537/5e68d1707917630c00713a7e9a221089.png?imageView2/2/w/1620)

   + 输入`java`，验证`java`是否安装成功，出现以下就表示配置成功。

    ![](https://ask.qcloudimg.com/http-save/yehe-8223537/87b23891c7d2fdb5f3fa337d7911d50d.png?imageView2/2/w/1620)

   + 输入`javac`

    ![](https://ask.qcloudimg.com/http-save/yehe-8223537/84c449ca881ac0aade31cf397eb4bc94.png?imageView2/2/w/1620)

   + 如出现这些配置提示，都表示已配置成功！

## jmeter

1. 下载`JMeter`

    {% link https://blog.leonus.cn/,JMeter,https://ts1.cn.mm.bing.net/th/id/R-C.0c660c968839e2580086f25aea8e666d?rik=fknCk60rtD9lhw&riu=http%3a%2f%2ficon.chrafz.com%2fuploads%2fallimg%2f160919%2f1-1609191639570-L.png&ehk=KropbEGpApuUWJGSV5H%2fTAUmKgcA%2bJaK0J3OY91lA5Q%3d&risl=&pid=ImgRaw&r=0,下载地址 %}
    
    下载`zip`压缩包

    ![](https://pic.imgdb.cn/item/6396e5e7b1fccdcd3637effa.png)

    下载好后，然后解压缩到自己想要放的位置（记住这个位置，后面需要配置变量）。

2. 添加环境变量

    这里和上面一样，打开`高级系统设置`,在`系统变量`下新建变量和变量值。

    ```
    新建变量名：JMETER_HOME
    变量值：jmeter解压地址
    ```

3. ClassPath变量

    ```
    变量名：CLASSPATH
    变量值：%JMETER_HOME%\lib\ext\ApacheJMeter_core.jar;%JMETER_HOME%\lib\jorphan.jar;%JMETER_HOME%\lib/logkit-2.0.jar;
    ```

    直接在后面添加就行，全部点击确定保存（如图）。

    ![](https://pic.imgdb.cn/item/6396e7ceb1fccdcd363ac665.png)

4. `Path`变量

    找到Path，添加此环境变量
    
    ```
    环境变量：%JMETER_HOME%\bin
    ```

5. 验证环境变量是否配置成功：运行`jmeter`里面的`bin`文件下的`jmeter.bat`文件，可成功打开`jmeter`即可（如图  ）。

    ![](https://pic.imgdb.cn/item/6396e96eb1fccdcd363cd784.png)

    > 或者`win+r`，输入`cmd`，输入`jmeter`，稍微等一下，就会打开`jmeter`（也可以    `jmeter -v`查看到你的版本号，这样也表示配置成功）。

## JMeter其它更改

1. 界面设置
   
    + 选择其他（Metal、Nimbus…）也OK，看你自己喜欢

    ![](https://pic.imgdb.cn/item/6396ea63b1fccdcd363e8371.png)

2. 中文设置

    + 这里可以进行汉化，毕竟不是谁的英语水平都很好

    + 打开`jmeter`下的`bin`目录，找到`jmeter.properties`配置文件

    > ![](https://pic.imgdb.cn/item/6396eb4bb1fccdcd363fad6a.png)

   + 以文本方式打开`jmeter`，找到`language=en`,改为`language=zh_CN`（大约在40行那里，要去掉前面的注释符“#”）

   + 为避免响应数据包含中文乱码
    > 修改`jmeter.properties`配置文件,改为`sampleresult.default.encoding=UTF-8`（直接用`ctrl+f`进行搜索）

   + 这样就配置完成了,然后重启看效果（如图）

    ![](https://pic.imgdb.cn/item/6396ee0eb1fccdcd3643e0a1.png)

   + 这样就大功告成了！

