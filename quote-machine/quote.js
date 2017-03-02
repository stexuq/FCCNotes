var quots = [
    "When you betray somebody else, you also betray yourself. -Isaac Bashevis Singer",
    "So the lover must struggle for words. -T. S. Eliot",
    "All good things which exist are the fruits of originality. -John Stuart Mill",
    "Nature never makes any blunders, when she makes a fool she means it. -Archibald Alexander",
    "Show me a good loser, and I'll show you a loser. -Vince Lombardi",
    "I don't go around regretting things that don't happen. -Virgil Thomson",
    "Love in its essence is spiritual fire. -Lucius Annaeus Seneca",
    "Fine art is knowledge made visible. -Gustave Courbet",
    "The most important thing about Spaceship Earth - an instruction book didn't come with it. -R. Buckminster Fuller",
    "Genius is more often found in a cracked pot than in a whole one. -E. B. White",
    "A pure hand needs no glove to cover it. -Nathaniel Hawthorne",
    "The heart forgets its sorrow and ache. -James Russell Lowell",
    "What is art but a way of seeing? -Saul Bellow",
    "The fairest thing in nature, a flower, still has its roots in earth and manure. -D. H. Lawrence",
    "Why don't you get a haircut? You look like a chrysanthemum. -P. G. Wodehouse"
]; // more quotes at https://www.brainyquote.com/quotes_of_the_day.html

var newquote = function() {
  var idx = Math.floor(Math.random() * quots.length);
  //console.log("idx = " + idx);
  return quots[idx];
}

var getNewQuote = function() {
  var newQuote = newquote();
  // 改变quote-text里的文字
  $("#text").html(newQuote);
  var newColor = getRandomColor();
  // 改变背景颜色，改变quo-text颜色，改变new-quote-btn颜色
  document.body.style.backgroundColor = newColor;
  document.getElementById("text").style.color = newColor;
  document.getElementById("new-quote-btn").style.backgroundColor = newColor;
} 

//随机颜色函数
var getRandomColor = function() {//随机颜色函数
  return '#' + (function(h) {
    return new Array(7 - h.length).join("0") + h
  })((Math.random() * 0x1000000 << 0).toString(16))
};

// jQuery, 更新share content的内容
$(document).ready(function() {
  $("#tweet-quote").click(function(e){
     e.preventDefault();//this will prevent the link trying to navigate to another page
    var href = $(this).attr("href");//get the href so we can navigate later

    //do the update
    //console.log(href);

    var quoteText = $("#text").text();
    //console.log(quoteText);

    href = "https://twitter.com/intent/tweet?text=" + encodeURI(quoteText);

    //when update has finished, navigate to the other page
    window.location = href;
  });
});