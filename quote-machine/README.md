Run
```
python -m SimpleHTTPServer 8000
```

## 实现一个弹幕墙
[FreeCodeCamp课程链接](http://freecodecamp.cn/challenges/build-a-random-quote-machine)

[目标](http://codepen.io/freeCodeCamp/full/bELoPJ)

###功能
随机生成一个能产生格言警句的网页，点击刷新按钮后能够获得新一条格言；并且有一个按钮能把格言发送到twitter。

###步骤
按照结构->样式->功能 进行开发，重点在功能。

### 结构
简单结构，分为格言内容，更新按钮和推特按钮。

### 样式
简单的样式，在每次刷新格言时，会变换背景颜色、格言字体颜色和按钮颜色。

### 功能
####思考弹幕墙实现的过程：

1. 更新格言按钮能更新一条格言,同时更新展示的样式。
2. 分享到twitter的时候，用一个anchor元素指向了一个url，在点击该元素时动态生成分享的内容到url字串尾部。


### 踩坑记录
1. jQuery新手，$(document).ready()内部定义的函数，普通的onclick监听是不能读取到的。scope问题。

### 心得
1. Google dev console break point 好顶赞。