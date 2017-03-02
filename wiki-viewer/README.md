Run
```
python -m SimpleHTTPServer 8000
```

## 设计一个页面能输入关键字访问wikipedia
[FreeCodeCamp课程链接](http://freecodecamp.cn/challenges/build-a-wikipedia-viewer)


###功能
设计一个网页，允许用户输入关键字。通过关键字询问维基百科，同时把结果呈现给用户。

###步骤
按照结构->样式->功能 进行开发，重点在功能。

### 结构
简单结构，背景，搜索栏，搜索结果

搜索栏-> 返回结果(dynamically generated)

### 样式
搜索栏：增加了动画效果。

### 功能
Query Wiki API for result.

### 踩坑记录

### 心得
[Wiki API](https://www.mediawiki.org/wiki/API:Main_page#A_simple_example)

[CORS & how to fix](http://stackoverflow.com/questions/6114436/access-control-allow-origin-error-sending-a-jquery-post-to-google-apis)

[Loop over json arry](http://stackoverflow.com/questions/8314712/how-do-i-dynamically-populate-html-elements-with-json-data-with-javascript-not-j)