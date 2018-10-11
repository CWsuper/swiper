var index = 1;
var num = document.getElementsByTagName("img").length-2;
var left;
var interId;
var list = document.getElementById("inner");
var pic = document.getElementById("pic");
var li = document.getElementsByTagName("li");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
list.style.left = '-500px';
function nextPic(){
    if(index<=num){
        list.style.transition = 'left 1s';
        left = parseInt(list.style.left) - 500 + 'px';
        index++;
        list.style.left = left;
        if(index > num){
            setTimeout(nextPic,1000);
        }
    }else{
        list.style.transition = '';
        index = 1;
        left = -500*index+'px';
        list.style.left = left;
    }
    qiuqiu(index-1);
}
function prevPic(){
    if(index>=1){
        list.style.transition = 'left 1s';
        left = parseInt(list.style.left) + 500 + 'px';
        index--;
        list.style.left = left;
        if(index < 1){
        //1s后动画完成，再执行瞬间换边界图。否则动画刚开始，图片还没移动，但是left已经改变，直接就换边界图，导致边界的没有动画效果
            setTimeout(prevPic,1000);
        }
    }else{
        list.style.transition = '';
        index = num;
        left = -500 * index + 'px';
        list.style.left = left;
    }
    if(index == 0){
        qiuqiu(num-1);
    }else{
        qiuqiu(index-1);
    }
}

function qiuqiu(index){
    var len = li.length;
    for(var i = 0; i<len;i++){
        li[i].setAttribute('class','');
    }
    if(index == num){
        index = 0;
    }
    li[index].setAttribute('class','active');
}
next.onclick = function(){
    clearInterval(interId);
    nextPic();
    interId = setInterval(nextPic,3000);
};
prev.onclick = function(){
    clearInterval(interId);
    prevPic();
    interId = setInterval(nextPic,3000);
};
window.onload = function(){
    interId = setInterval(nextPic,3000);
}