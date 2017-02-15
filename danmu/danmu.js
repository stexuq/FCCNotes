$(document).ready(function() {
  //本地所有弹幕缓存
var danmus=[];

//点击发射按钮事件
$("#emit-btn").click(function() {
    var text = $("#input-text").val();//获取输入框文字
    // show text
    // $("#canvas").append("<div class='danmu'>"+text+"</div>");
    danmus.push(text);
    $("#input-text").val('');//清空输入
  });

//清空按钮事件
$("#clear-btn").click(function() {  
  danmus = [];
    $("#canvas").empty();//清空显示框
  });

//弹幕滚动及逐条显示
var canvas_offset = $('#canvas').offset();
var up=canvas_offset.top;
var bottom = up + $('#canvas').height();
  var _top = up; // 每个滚动消息距顶部距离
  var moveObj = function(obj) {
    var _left = $('#canvas').width() - obj.width();
    _top = _top + 20;
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
    obj.animate({
      left : "-" + _left + "px"  // 让消息距左距离逐渐减小，产生右向左滚动动画。
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
    var n = Math.floor(Math.random() * danmus.length + 1) - 1;
    var textObj = $("<div>" + danmus[n] + "</div>");
    $("#canvas").append(textObj);
    moveObj(textObj);
  }
};
setTimeout(getAndRun, 1000);
});



