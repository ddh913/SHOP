
/*用来控制顶部手机美团下拉框显示*/
/*最笨的办法!!!!!!!!!!不想这样写可以用for来实现*/
var li1 =document.getElementById('li1');
li1.onmouseover = function() {
  this.className = "toggleli on";
}
li1.onmouseout = function() {
  this.className = "togglel";
}
var li2 =document.getElementById('li2');
li2.onmouseover = function() {
  this.className = "toggleli on";
}
li2.onmouseout = function() {
  this.className = "togglel";
}
var li3 =document.getElementById('li3');
li3.onmouseover = function() {
  this.className = "toggleli on";
}
li3.onmouseout = function() {
  this.className = "togglel";
}
var li4 =document.getElementById('li4');
li4.onmouseover = function() {
  this.className = "toggleli on";
}
li4.onmouseout = function() {
  this.className = "togglel";
}
var li5 =document.getElementById('li5');
li5.onmouseover = function() {
  this.className = "toggleli on";
}
li5.onmouseout = function() {
  this.className = "togglel";
}
var li6 =document.getElementById('li6');
li6.onmouseover = function() {
  this.className = "toggleli on";
}
li6.onmouseout = function() {
  this.className = "togglel";
}
var li7 =document.getElementById('li7');
li7.onmouseover = function() {
  this.className = "toggleli on";
}
li7.onmouseout = function() {
  this.className = "togglel";
}
/*全部分类右边弹出效果*/
var clist =document.getElementById("clist");
var cli = clist.getElementsByTagName("li");
console.info(cli);
for (var i = 0; i < cli.length; i++) {
  cli[i].onmouseover = function(){
    this.className = "on ch1";
  }
  cli[i].onmouseout = function(){
    this.className = "ch1";
  }
}
/*底部选项卡效果*/
var u1 =document.getElementById("u1");
var lis = u1.getElementsByTagName("li");
var divs = u1.getElementsByTagName("div");
for (var i = 0; i < cli.length; i++) {
  lis[i].index = i;
  lis[i].onclick = function(){
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = "none";
      divs[this.index].style.display = "block";
    }
  }
}
/*滚动条效果*/
var itemlistul =document.getElementById("itemlistul");
var dx = 10;
var currentIndex = 0; //当前第几屏

function move(){
  currentIndex++;

  if(currentIndex==4){
    //把left设置为0
    itemlistul.style.left = "0px";
    currentIndex = 1;
  }
  var timer = null;
  var target = -1 * currentIndex * 1170;
  var oldleft;
  timer = setInterval(function(){
    oldleft = itemlistul.offsetLeft;
    if(oldleft<=target){
      clearInterval(timer);
      //休息·3秒在执行
      setTimeout(function(){
        move();
      },3000);
    }else {
        //把值减少newlef = oldleft - dx;
        var newleft = oldleft-dx;
        //把新的left设置上去
        itemlistul.style.left = newleft +"px";

      }
    },25);
  }
  move();

  /*顶部滚动*/
  //获取需要的标签
  var ntbox01 = document.getElementById('ntbox01');
  var ntbox02 = document.getElementById('ntbox02');
  var allLis = ntbox01.getElementsByTagName('li');
  var allImges = ntbox02.getElementsByTagName('img');
  console.log(allLis.length);
  console.log(allImges.length);
  //索引
  var loop = 0;
  //定时器
  setInterval(function () {
    //索引++
    loop +=1;
    loop %=12;
    //排他
    for (var i = 0; i < allLis.length; i++) {
      allLis[i].className ='';
      allImges[i].style.display ='none';
    }
    allLis[loop].className = 'current';
    allImges[loop].style.display = 'block';
  },1000);
  
