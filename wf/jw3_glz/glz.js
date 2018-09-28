//图片轮换
var index=1;
var time;
var pic=document.getElementById("pic");
var lis=document.querySelectorAll("#scroll_number li");

time=setInterval("show()",1500);

function show(id) {
    if( Number(id) ){
        index=id;
        clearInterval(time);
    }else{
        index++;
        if(index==6){
            index=1;
        }
    }

    pic.src="../images/gl"+index+".jpg";

    for(var i=0;i<lis.length;i++){
        lis[i].setAttribute("class","scroll_number_out");
        if( i ==(index-1) ){
            lis[i].setAttribute("class","scroll_number_over");
        }
    }
}

function start() {
    // clearInterval(time);
    time=setInterval("show()",1500);
}

$(".scroll_mid").hover(function(){
    clearInterval(time);
},function(){
    time=setInterval("show()",1500);
})



//最新攻略与推荐攻略切换
var ct=$(".ct>ul>li");
ct.each(function(i){
    $(this).on("click",function(){
        for(var j=0;j<ct.length;j++){
            if(j==i){
                $(this).attr("class","thistab li");
            }else{
                ct.eq(j).attr("class","li");
            }
        };
        $("#wyqh").css("left",-i*620+"px");
    })
})

//悬赏榜切换
var ct1=$(".ct1>ul>li");
ct1.each(function(i){
    $(this).on("click",function(){
        for(var j=0;j<ct1.length;j++){
            if(j==i){
                $(this).attr("class","thistab li");
            }else{
                ct1.eq(j).attr("class","li");
            }
        };
        $("#xsbqh").css("left",-i*545+"px");
    })
})

//热门排行切换
var ct2=$(".ct2>ul>li");
ct2.each(function(i){
    $(this).on("click",function(){
        for(var j=0;j<ct2.length;j++){
            if(j==i){
                $(this).attr("class","thistab li");
            }else{
                ct2.eq(j).attr("class","li");
            }
        };
        $("#phqh").css("left",-i*500+"px");
    })
})


