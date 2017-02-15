$(document).ready(function() {
  //本地所有弹幕缓存
  var danmus=[];

  // generate random string short and fast
  // 随机字符串生成
  function guid()
  {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  //点击发射按钮事件
  $("#emit-btn").click(function() {
    var text = $("#input-text").val();//获取输入框文字
    var key = guid(); 
    var dict = {};
    dict[key] = [text,false]; //用随机字符串作为键，用户输入内容为值，构建一个小哈希表
    danmus.push(dict);
    $("#input-text").val('');//清空输入
  });

  //清空按钮事件
  $("#clear-btn").click(function() {  
    danmus = [];
    $("#canvas").empty();//清空显示框
  });

  //弹幕滚动及逐条显示
  var canvas_offset = $('#canvas').offset();
  var up = canvas_offset.top; //所有滚动消息距离顶部的距离中距离顶部最近的最高位置
  var bottom = up + $('#canvas').height(); //所有滚动消息距离顶部的距离中距离顶部最远的最低位置）
  var _top = up; // _top为每个滚动消息距顶部距离
  // 为弹幕消息obj设置滚动动画效果
  var moveObj = function(obj) {
    var text = obj["0"].textContent; //该弹幕消息的内容
    var _left = $('#canvas').width() - text.length - 10; // 计算初始左对齐参数，此时滚动消息应在弹幕框最右边
    _top = _top + 20; //新一条弹幕在上一条弹幕的高度基础上+20（向下移动）
    if (_top > (bottom - 20)) {
      _top = up;
    }
    obj.css({
      left : _left,
      top : _top,
      color : getRandomColor()  // 获取随机颜色
    });
    var time = 20000 + 10000 * Math.random();
    // animate() 方法执行 CSS 属性集的自定义动画。逐渐改变的，这样就可以创建动画效果。
    // 具体例子见w3school https://www.w3schools.com/jquery/jquery_animate.asp
    obj.animate({
      left : "-=" + _left + "px"  // 让消息距左距离逐渐减小，产生右向左滚动动画。
    }, time, function() {
      obj.remove();
    });
  };
    
  //随机颜色函数
  var getRandomColor = function() {//随机颜色函数
    return '#' + (function(h) {
      return new Array(7 - h.length).join("0") + h
    })((Math.random() * 0x1000000 << 0).toString(16))
  };

  //在屏幕上输出弹幕
  var getAndRun = function() { //弹幕输出
   if (danmus.length > 0) {
    //var n = Math.floor(Math.random() * danmus.length + 1) - 1;
    for (var i = 0; i < danmus.length; i++) { 
      // 遍历本地存储中每一个弹幕元素
      var obj = danmus[i];
      var guid = Object.keys(obj)[0];
      
      if (obj[guid][1]){
        // true 表示已经显示过了
      } else {
        // 当该消息从未显示过时，显示，并把已经显示的flag标记为true
        obj[guid][1] = true;
        var textToDisplay = obj[guid][0];
        var textObj = $("<div class='absolute'>" +  textToDisplay + "</div>");
        $("#canvas").append(textObj);
        moveObj(textObj);
      }
    }
  }

  setTimeout(getAndRun, 3000);
};

  // 必须执行这个函数才能开始自动刷新
  getAndRun();

});



