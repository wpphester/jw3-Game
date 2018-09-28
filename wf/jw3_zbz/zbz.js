//直播站图片轮换
var timer=setInterval(picLoop,1500);
var index=1;
function picLoop(id){
    if( Number(id) ){
        index=id;
        clearInterval(time);
    }else{
        $(".swiper-wrapper").animate({"left":-1262*index},"slow");
        $(".swiper-pagination li").eq(index).css("background-color","#f7926d")
        $(".swiper-pagination li").eq(index).siblings().css("background-color","#37687e");
        index++;
        if (index==7){index=0;}
    }
}

$(".banner-table").hover(function(){
    clearInterval(timer);
    },function(){
        timer=setInterval(picLoop,1500);
    })

$(".swiper-pagination li").mouseover(function(){
    $(this).css("background-color","#f7926d")
        .siblings().css("background-color","#37687e");
    index = $(this).index();
    $(".swiper-wrapper").animate({"left":-1262*index},"slow");
})


//周人气榜点击事件
$(".rnav_list_body").click(function () {
    $(".rankdrop").hide();
})


//人气榜排行切换
var rt=$(".rt>ul>li");
rt.each(function(i){
    $(this).on("click",function(){
        for(var j=0;j<rt.length;j++){
            if(j==i){
                $(this).attr("class","cur li");
            }else{
                rt.eq(j).attr("class","li");
            }
        };
        $("#phqh").css("left",-i*310+"px");
    })
})



