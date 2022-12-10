---
title: Selenium 基本用法
tags: 软件测试
categories: 学习笔记
abbrlink: be1c
date: 2022-12-09 00:46:31
cover: https://tva3.sinaimg.cn/large/0075auPSly1fqb43hl7ubj31kw0uxav1.jpg
---

## 基本用法


使用`Selenium`我们需要将浏览器渠道添加到环境变量或者绝对路径，前者可以初始化后者需要进行指定。

{% note danger flat %}**这里用的是Firefox浏览器,可以用Google chrome来执行**{% endnote %}

```python
from selenium import webdriver

# 初始化浏览器为chrome浏览器
browser = webdriver.Chrome()

# 指定绝对路径的方式
path = r'D:\drivers\chromedriver\chromedriver.exe'
browser = webdriver.Firefox(path)

# 强制等待
time.sleep(5)
# 关闭浏览器
browser.close()
```

![](https://pic2.zhimg.com/v2-973be9e26fad4692e82f861c85a26c7d_r.jpg)

**这样我们看到的是运行成功的的标志，这里我们可以启动为`无界面的浏览器`**

```python
from selenium import webdriver
import time

# 无界面的浏览器
option = webdriver.ChromeOptions()
option.add_argument("headless")
browser = webdriver.Firefox()

# 访问百度首页
browser.get(r'https://www.baidu.com/')
# 截图预览
browser.get_screenshot_as_file('截图.png')

time.sleep(5)

# 关闭浏览器
browser.close()
```

![](https://pic1.zhimg.com/v2-45d7410e724b9776323ad436fa030900_r.jpg)

**浏览器对象初始化完成后将其赋值给了`browser`对象,下面我们可以调用`browser`来执行各种方法来模拟浏览器的操作了。**

## 访问页面

进行访问页面使用的是`get`方法,传入参数为访问页面的`url`的地址就可以了,这里我用百度的网址举例。

```python
from selenium import webdriver
import time

# 初始化浏览器为chrome浏览器
browser = webdriver.Firefox()

# 访问百度首页
browser.get(r'https://www.baidu.com/')

time.sleep(5)
# 关闭浏览器
browser.close()
```

## 设置浏览器大小

`set_window_size()`方法可以用来设置浏览器大小（就是屏幕的分辨率）,其中`maximize_window`设置的是全屏浏览。

```python
from selenium import webdriver
import time

browser = webdriver.Firefox()

# 设置浏览器大小：全屏
browser.maximize_window()   
browser.get(r'https://www.baidu.com') 
# 强制等待
time.sleep(2)

# 设置分辨率 500*500
browser.set_window_size(500,500)  
# 强制等待
time.sleep(2)

# 设置分辨率 1000*800
browser.set_window_size(1000,800) 
# 强制等待
time.sleep(2)

# 关闭浏览器
browser.close()
```

动态图太麻烦，你们自己运行看效果

## 刷新页面

刷新页面是我们经常使用在浏览器的操作，页面也是这样用，这里可以用`refresh()`方法来实现进行浏览器页面刷新。

```python
from selenium import webdriver
import time

browser = webdriver.Firefox()

# 设置浏览器全屏
browser.maximize_window()
browser.get(r'https://www.baidu.com')
time.sleep(2)


try:
    # 刷新页面
    browser.refresh()
    print('刷新成功')
except Exception as e:
    print('刷新失败')

# 关闭浏览器
browser.close()
```

同理，动态图太麻烦,自行运行看效果。

## 前进后退

前进后退也是我们访问页面时非常常见的操作，这里我们用`forward()`方法可以实现前进，`back()`可以用来实现后退。

```python
from selenium import webdriver
import time

browser = webdriver.Firefox()

# 设置浏览器全屏
browser.maximize_window()
browser.get(r'https://www.baidu.com')
# 强制等待
time.sleep(5)

# 打开淘宝页面
browser.get(r'https://www.taobao.com')
# 强制等待

# 后退
browser.back()
# 强制等待
time.sleep(2)

# 前进
browser.forward()
# 强制等待
time.sleep(2)

# 关闭浏览器
browser.close()
```

## 获取页面基础属性

我们在使用`selenium`打开某个浏览器页面时，我们会获取一些基础属性如网页标题、网址、浏览器名称、页面源码等信息。

```python
import time

from selenium import webdriver

browser = webdriver.Firefox()
browser.get(r'https://www.baidu.com')

# 网页标题
print(browser.title)
# 当前网址
print(browser.current_url)
# 浏览器名称
print(browser.name)
# 网页源码
print(browser.page_source)

# 强制等待
time.sleep(5)
# 退出浏览器
browser.quit()
```

效果如下：

![](https://pic.imgdb.cn/item/639221bab1fccdcd36a1ea7d.png)

{% note danger flat %}我们需要注意的是，这里的页面源码用的是`正则表达式`、`Bs4`、`xpath`以及`pyquery`等工具进行解析提取想要的信息了。{% endnote %}

## 页面元素定位

我们在实际使用浏览器的时候，很重要的操作有输入文本，点击确定等元素操作，`Selenium`提供了一系列的方法来方便实现以上的操作，常见的有`8`种操作定位元素的操作方式，我们来一一演示一下。

我们以百度首页的搜索框节点操作为例子，搜索**python**

![](https://pic.imgdb.cn/item/639224d6b1fccdcd36a4c370.png)

搜索框的`html`结构：

```html
<input id="kw" name="wd" class="s_ipt" value="" maxlength="255" autocomplete="off">
```

## id定位

`find_element_by_id()`根据`id`属性获取，这里`id`属性是`kw`，我们用以下的代码实现浏览器搜索操作。

```python
from selenium import webdriver
import time

browser = webdriver.Firefox()

browser.get(r'https://www.baidu.com')
# 强制等待
time.sleep(2)

# 在搜索框输入 python
browser.find_element_by_id('kw').send_keys('python')
# 强制等待
time.sleep(2)

# 关闭浏览器
browser.close()
```

## class 定位

`find_element_by_class_name()`根据`class`属性获取，这里`class`属性是`s_ipt`。

```python
from selenium import webdriver
import time

browser = webdriver.Chrome()

browser.get(r'https://www.baidu.com')
# 强制等待
time.sleep(2)

# 在搜索框输入 python
browser.find_element_by_class_name('s_ipt').send_keys('python')
# 强制等待
time.sleep(2)

# 关闭浏览器
browser.close()
```

## tag 定位

我们学过`HTML`的都知道`HTML`是用`tag`来定义功能的，比如`input`是输入，`table`是表格等，每个元素其实就是一个`tag`，一个`tag`往往用来定义一类功能，我们查看百度首页`HTML`代码，可以看到很多`tag`，所以其实很难去区分不同的元素（这个方式很不适用）。

```html
find_element_by_tag_name()
```

```python
from selenium import webdriver
import time

browser = webdriver.Firefox()

browser.get(r'https://www.baidu.com')
# 强制等待
time.sleep(2)

# 在搜索框输入 python
browser.find_element_by_tag_name('input').send_keys('python')
# 强制等待
time.sleep(2)

# 关闭浏览器
browser.close()
```

{% note danger flat %}使用`HTML`的很容易报错，基本上不怎么用`HTML`方式来定位。{% endnote %}

## link 定位

这个方式顾名思义就是用定位网络链接的，比如百度首页上方的分类模块链接。

```html
find_element_by_link_text()
```

![](https://pic2.zhimg.com/v2-17a377e7d14b81ed292e2a5e75d9e051_r.jpg)

以贴吧为例

```python
from selenium import webdriver
import time  

browser = webdriver.Chrome()

browser.get(r'https://www.baidu.com')  
time.sleep(2)

# 点击贴吧 链接
browser.find_element_by_link_text('贴吧').click()
time.sleep(2)

# 关闭浏览器全部页面
browser.quit()
```

## partial 定位

有时候有的超链接的文本很长，我们如果全部输入，是很麻烦的，又显得代码很不美观，这个时候我们就可以截取一部分字符串，用这种方法进行模糊匹配。

```html
find_element_by_partial_link_text()
```

```python
from selenium import webdriver
import time  

browser = webdriver.Firefox()

browser.get(r'https://www.baidu.com')
time.sleep(2)

# 点击新闻 链接
browser.find_element_by_partial_link_text('闻').click()
time.sleep(2)

# 关闭浏览器全部页面
browser.quit()
```

## xpath 定位

前面介绍的几种定位方式都是在理想的状态才可以使用的，有一定的限制，那就是：在当前页面中，每个元素都是**唯一性**的`id`、`name`、`class`或`超文本链接`的属性，那么我们就可以用这个**唯一性**来定位它们。

但是在实际工作中并非由怎么美好的方式，那么这个时候我们只能通过`xpath`（推荐）或者`css`来定位了。

```python
find_element_by_xpath()
```

```python
from selenium import webdriver
import time  

browser = webdriver.Firefox()

browser.get(r'https://www.baidu.com')  
time.sleep(2)

# 在搜索框输入 python
browser.find_element_by_xpath("//*[@id='kw']").send_keys('python')
time.sleep(2)

# 关闭浏览器
browser.close()
```

## css 定位

这个方法相对`xpath`要简洁一些，定位速度也要快一些。

```python
find_element_by_css_selector()
```

```python
from selenium import webdriver
import time

browser = webdriver.Firefox()

browser.get(r'https://www.baidu.com')  
time.sleep(2)

# 在搜索框输入 python
browser.find_element_by_css_selector('#kw').send_keys('python')
time.sleep(2)

# 关闭浏览器
browser.close()# 使用前先导入By类
from selenium.webdriver.common.by import By# 使用前先导入By类
from selenium.webdriver.common.by import By
```

## find_element的By定位

除了上述的`8`种定位方法，`Selenium`还提供了一个通用的方法`find_element()`，这个方法有两个参数：定位方式和定位值。

{% note danger flat %}使用前先导入By类from selenium.webdriver.common.by import By{% endnote %}

以上的操作可以等于以下的操作：

```python
browser.find_element(By.ID,'kw')
browser.find_element(By.NAME,'wd')
browser.find_element(By.CLASS_NAME,'s_ipt')
browser.find_element(By.TAG_NAME,'input')
browser.find_element(By.LINK_TEXT,'贴吧')
browser.find_element(By.PARTIAL_LINK_TEXT,'贴吧')
browser.find_element(By.XPATH,'//*[@id="kw"]')
browser.find_element(By.CSS_SELECTOR,'#kw')
```

## 多个元素

如果我们定位的目标元素不止一个，那么则需要用到`find_elements`，得到的结果会是以列表形式。简单的说，就是`element`后面多了复数`s`,其它的操作一致。

![](https://pic.imgdb.cn/item/63922dd6b1fccdcd36af5b4e.png)


## 获取页面元素属性

{% note info modern %}下面的是进阶教程{% endnote %}

**get_attribute**获取属性

既然我们有很多方式来定位页面的元素，那么接下来就可考虑获取以下元素的属性了，尤其是用`Selenium`进行**网络爬虫**的时候。

以百度首页的logo为例，获取logo相关属性

![](https://pic4.zhimg.com/v2-78a0ef8e33f7749b7fe62735ce04ca8b_r.jpg)

```python
<img hidefocus="true" id="s_lg_img" class="index-logo-src" src="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" width="270" height="129" onerror="this.src='//www.baidu.com/img/flexible/logo/pc/index.png';this.onerror=null;" usemap="#mp">
```

### 获取logo的图片地址

```python
from selenium import webdriver
import time

browser = webdriver.Firefox()

browser.get(r'https://www.baidu.com')

logo = browser.find_element_by_class_name('index-logo-src')
print(logo)
print(logo.get_attribute('src'))

# 关闭浏览器
browser.close()
```

输出结果：

```python
<selenium.webdriver.firefox.webelement.FirefoxWebElement (session="3da58d3e-aa4d-4643-9a34-f34ed443f0f8", element="94b84f87-3dca-4891-bc67-e1103fdad33e")>
https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png
```

### 获取文本

以热榜为例，获取文本和链接

![](https://pic1.zhimg.com/v2-e9583c08b855245e38571e645a888fec_r.jpg)

```python
<a class="title-content tag-width c-link c-font-medium c-line-clamp1" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E5%90%84%E5%9C%B0%E8%B4%AF%E5%BD%BB%E5%8D%81%E4%B9%9D%E5%B1%8A%E5%85%AD%E4%B8%AD%E5%85%A8%E4%BC%9A%E7%B2%BE%E7%A5%9E%E7%BA%AA%E5%AE%9E&amp;rsv_idx=2&amp;rsv_dl=fyb_n_homepage&amp;sa=fyb_n_homepage&amp;hisfilter=1" target="_blank"><span class="title-content-index c-index-single c-index-single-hot1">1</span><span class="title-content-title">各地贯彻十九届六中全会精神纪实</span></a>
```

获取热榜的**文本**，用的是`text`属性，直接调用即可。

```python
from selenium import webdriver
import time  

browser = webdriver.Firefox()

browser.get(r'https://www.baidu.com')  

logo = browser.find_element_by_css_selector('#hotsearch-content-wrapper > li:nth-child(1) > a')
print(logo.text)
print(logo.get_attribute('href'))

# 关闭浏览器
browser.close()
```

输出结果：

```python
1各地贯彻十九届六中全会精神纪实
https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%90%84%E5%9C%B0%E8%B4%AF%E5%BD%BB%E5%8D%81%E4%B9%9D%E5%B1%8A%E5%85%AD%E4%B8%AD%E5%85%A8%E4%BC%9A%E7%B2%BE%E7%A5%9E%E7%BA%AA%E5%AE%9E&rsv_idx=2&rsv_dl=fyb_n_homepage&sa=fyb_n_homepage&hisfilter=1
```

### 获取其他属性

除了属性和文本值外，还有id、位置、标签名和大小等属性。

```python
from selenium import webdriver
import time  

browser = webdriver.Firefox()

browser.get(r'https://www.baidu.com')  

logo = browser.find_element_by_class_name('index-logo-src')
print(logo.id)
print(logo.location)
print(logo.tag_name)
print(logo.size)

# 关闭浏览器
browser.close()
```

输出结果：

```python
6af39c9b-70e8-4033-8a74-7201ae09d540
{'x': 490, 'y': 46}
img
{'height': 129, 'width': 270}
```

### 页面交互操作

页面交互就是在浏览器的各种操作，比如上面演示过的输入文本，点击链接等等，还有像清除文本、回车确认，单选框与多选框中等。

### 输入文本

上面有同样的操作

```python
send_keys()
```

```python
from selenium import webdriver
import time  

browser = webdriver.Firefox()
browser.get(r'https://www.baidu.com')  
time.sleep(2)

# 定位搜索框
input = browser.find_element_by_class_name('s_ipt')
# 输入python
input.send_keys('python')
time.sleep(2)

# 关闭浏览器
browser.close()
```

### 点击

```python
click()
```

```python
from selenium import webdriver
import time  

browser = webdriver.Firefox()
browser.get(r'https://www.baidu.com')  
time.sleep(2)

# 选中新闻按钮
click = browser.find_element_by_link_text('新闻')
# 点击之
click.click()
time.sleep(2)

# 关闭浏览器全部页面
browser.quit()
```

### 清除文本

既然有输入，就有清除的操作

```python
clear()
```

```python
from selenium import webdriver
import time  

browser = webdriver.Firefox()
browser.get(r'https://www.baidu.com')  
time.sleep(2)

# 定位搜索框
input = browser.find_element_by_class_name('s_ipt')
# 输入python
input.send_keys('python')
time.sleep(2)
# 清除python
input.clear()
time.sleep(2)

# 关闭浏览器
browser.close()
```

### 回车确认

如我们在搜索框输入文本`python`，然后回车就可以查询操作结果的情况

```python
submit()
```

```python
from selenium import webdriver
import time  

browser = webdriver.Firefox()
browser.get(r'https://www.baidu.com')  
time.sleep(2)

# 定位搜索框
input = browser.find_element_by_class_name('s_ipt')
# 输入python
input.send_keys('python')
time.sleep(2)
# 回车查询
input.submit()
time.sleep(5)

# 关闭浏览器
browser.close()
```

### 单选

我们先定位需要的元素，然后点击一下就可以了（再定位一个元素在后面加上`.send_keys`）。

```python
from selenium import webdriver
import time

browser = webdriver.Firefox()

browser.get(r'https://www.baidu.com')
time.sleep(2)

# 在搜索框输入 python
browser.find_element_by_xpath("//*[@id='kw']").send_keys('python')
browser.find_element_by_xpath('//*[@id="su"]').click()
time.sleep(2)

# 关闭浏览器
browser.close()
```
### 多选

这里我们需要导入`from selenium.webdriver.support.ui import Select`

```python

select.select_by_visible_text()

select.select_by_value()

select.select_by_index()

```

### 下拉框

同样需要`Select`模块

先导入类

```python
from selenium.webdriver.support.select import Select
```

在`select`模块中有以下定位方法

```python
# 1、三种选择某一选项项的方法

select_by_index()           # 通过索引定位；注意：>index索引是从“0”开始。
select_by_value()           # 通过value值定位，va>lue标签的属性值。
select_by_visible_text()    # 通过文本值定位，即显>示在下拉框的值。

# 2、三种返回options信息的方法

voptions                     # 返回select元素所有>的options
all_selected_options        # 返回select元素中所>有已选中的选项
first_selected_options      # 返回select元素中选>中的第一个选项

# 3、四种取消选中项的方法

deselect_all                # 取消全部的已选择项
deselect_by_index           # 取消已选中的索引项
deselect_by_value           # 取消已选中的value值
deselect_by_visible_text    # 取消已选中的文本值
```

我们进行一波操作，暂时找不到合适的网页，我们就用一个简单的本地网页进行测试（这里我们用html文件进行测试）

```html
<html>
<body>
<form>
<select name="ceshi">
<option value="小明" selected="">小明</option>
<option value="小华">小华</option>
<option value="小草">小草</option>
</select>
</form>
</body>
</html>

然后，再演示下拉框的不同选择方式

```python
from selenium import webdriver
from selenium.webdriver.support.select import Select
import time

url = 'file:///C:/Users/Gdc/Desktop/ceshi.html'

browser = webdriver.Firefox()

browser.get(url)
time.sleep(2)

# 根据索引选择
Select(browser.find_element_by_name("ceshi")).select_by_index("2")
time.sleep(2)
# 根据value值选择
Select(browser.find_element_by_name("ceshi")).select_by_value("小草")
time.sleep(2)
# 根据文本值选择
Select(browser.find_element_by_name("ceshi")).select_by_visible_text("小明")
time.sleep(2)

# 关闭浏览器
browser.close()
```
{% note orange no-icon %}效果自行运行查看效果{% endnote %}

### 多窗口切换

{% note green 'fab fa-internet-explorer' flat %}比如同一个页面的不同子页面的节点元素获取操作，不同选项卡之间的切换以及不同浏览器窗口之间的切换操作等等。{% endnote %}
