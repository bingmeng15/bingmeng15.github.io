---
title: 配置 Selenium
tags: 软件测试
cover: https://gcore.jsdelivr.net/npm/ushio-api-img-moe@5.0.31/img_313_1530x1000_72_null_normal.jpg #'https://tva4.sinaimg.cn/large/005FzdTdgy1gegf7mn8b5j31hc0u0dkw.jpg'
abbrlink: '6770'
categories: 学习笔记
date: 2022-12-07 22:28:55
---

{% note blue 'fas fa-bullhorn' flat %}这是我的学习过程，也是我学习的记录，你们如果感兴趣的可以看看，废话不多说，我们开始吧！！！{% endnote %}

## 我们准备好Selenium相关工具

{% tabs test4 %}
<!-- tab Selenium -->
```python
安装Selenium模块（指定安装）
pip install selenium==3.141.0
```

{% note green no-icon %}你可以安装最新版，不过与旧版本区别很大，不过现在很多情况下`3.141.0`这个版本用的最多（个人认为）。{% endnote %}

模块搜索官网：https://pypi.org

<!-- endtab -->

<!-- tab 浏览器驱动 -->

   {% note red 'fas fa-fan' modern%}我们先不着急下载，先看好自己浏览器的版本再下载浏览器驱动！！！{% endnote %}
   安装必要的浏览器驱动：

Google chrome

<div>
   {% link  https://registry.npmmirror.com/binary.html?path=chromedriver , chromedriver驱动, https://ts1.cn.mm.bing.net/th/id/R-C.ab97f6bcbc5d6fbceee27df50463ad06?rik=PDjQ3YxqLbhtPA&riu=http%3a%2f%2fgood1230.com%2f100sucai_images%2fimages%2f3678.jpg&ehk=A1CUjjT2KowDhRVxkYkT8nszeCsOGgt55PCHOAXKbx4%3d&risl=&pid=ImgRaw&r= , chromedriver下载地址%}
</div>
 Firfox 浏览器
<div>
   {% link  https://registry.npmmirror.com/binary.html?path=geckodriver , geckodriver驱动, https://tse1-mm.cn.bing.net/th/id/OIP-C.IS9p4m5Nfz7jedxqDixrKQHaHp?pid=ImgDet&rs=1= , geckodriver下载地址%}
</div>
<!-- endtab -->

<!-- tab python -->
   这里准备`python`下载地址:
<div>
   {% link  https://www.python.org/ , python, https://img02.anzhiy.cn/adminuploads/1/2022/09/25/63300647dea51.png  , python官网 %}
</div>
<!-- endtab -->


{% endtabs %}

## 驱动配置

这里我们介绍浏览器驱动配置方式（`Google chrome`和`Firefox`）

{% folding 手动安装（推荐） %}

### Google chrome 版本查询

   1. 在浏览器的地址栏键入 `Chrome://version`，就可以查看浏览器的版本号

    ![](https://pic1.imgdb.cn/item/6390b6b5b1fccdcd36ce6692.png)

    {% note green no-icon %}当然你也可以点击右上角Chrome菜单 帮助→关于Google Chrome，查看浏览器版本号（这里就不截图了，一个就够了）{% endnote %}

   2. 可以看到我的版本是`107.0.5304.122`版本，下面我们这里下载它对应的版本。

    {% note green no-icon %}这里不需要绝对定位，你只需要看`107.0.5304.xxx`就可以了，如我的是`107.0.5304.122`版本，我下载的驱动是`107.0.5304.62`版本，当然，能对上是最好的。{% endnote %}

    ![](https://pic.imgdb.cn/item/6390c7c5b1fccdcd36e7508e.png)

    下载对应的版本，windows下载`chromedriver_win32.zip`压缩包即可。

    ![](https://pic.imgdb.cn/item/6390c8dbb1fccdcd36e8d96a.png)

## `Firefox`浏览器版本查询

   打开`Firefox`浏览器，点击右上角菜单栏，点击帮助，就可以看到`关于Firefox(A)`这个选项

![](https://pic.imgdb.cn/item/6390c22ab1fccdcd36df8fbd.png)

   可以看到你的版本号（基本上都是最新版，感觉看都没必要，除非你的没更新）

![](https://pic.imgdb.cn/item/6390c50ab1fccdcd36e37c36.png)

   这里我的是最新版，直接下载最新版的就行了。

![](https://pic.imgdb.cn/item/6390ca40b1fccdcd36ea9cfd.png)

    
{% note warning flat %}和`chromedriver`一样，Windows只有32位，下载就行了。{% endnote %}

{% endfolding %}


{% note danger flat %}**下面的不适合新手或者还没有配置环境的**{% endnote %}

{% folding 自动安装（需要配好环境） %}

自动安装我们需要用到第三方库`webdriver_manager`，我们需要安装整个库，然后调用相应的的方法。

```python
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager

# 这里用的是Google浏览器驱动加载
browser = webdriver.Chrome(ChromeDriverManager().install())

browser.get('http://www.baidu.com')
search = browser.find_element_by_id('kw')
search.send_keys('python')
search.send_keys(Keys.ENTER)

# 关闭浏览器
browser.close()
```

`ChromeDriverManager().install()`就是安装驱动的操作，它会自动获取你的版本号，然后下载当前浏览器所需要的版本到本地（不适合新手）。

![](https://pic.imgdb.cn/item/6390cf2eb1fccdcd36f08d7f.png)

![](https://pic.imgdb.cn/item/6390cf15b1fccdcd36f06fec.png)

{% endfolding %}

## 测试

### 下面我们来测试是否安装成功

**用python运行此代码**

```python
from selenium import webdriver
import time
# 初始化浏览器为浏览器。这里演示用的是Firefox，把Firefox切换成Chrome
browser = webdriver.Firefox()

# 也可以指定绝对路径的方式
browser = webdriver.Firefox()

# 强制等待
time.sleep(30)

# 关闭浏览器
browser.close()
```

**Firefox显示成这样就代表成功了**

![](https://pic.imgdb.cn/item/6390d1bcb1fccdcd36f38355.png)

**Google chrome显示成功界面**

![](https://pic2.zhimg.com/v2-973be9e26fad4692e82f861c85a26c7d_r.jpg)

