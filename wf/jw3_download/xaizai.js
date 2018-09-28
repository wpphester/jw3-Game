//官方微信移入移出
$('#wx_btn_pop, .weixin_l').mouseover(function () {
    $('.weixin_l').show();
});
$('#wx_btn_pop, .weixin_l').mouseout(function () {
    $('.weixin_l').hide();
});
$('#wb_btn_pop, .weibo_l').mouseover(function () {
    $('.weibo_l').show();
});
$('#wb_btn_pop, .weibo_l').mouseout(function () {
    $('.weibo_l').hide();
});

//客户端下载切换
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
        $("#wyqh").css("left",-i*895+"px");
    })
})

//台式机配置要求切换
var dt=$(".dt>ul>li");
dt.each(function(i){
    $(this).on("mouseover",function(){
        for(var j=0;j<dt.length;j++){
            if(j==i){
                $(this).attr("class","thistab li");
            }else{
                dt.eq(j).attr("class","li");
            }
        };
        $("#tab_conbox1").css("left",-i*845+"px");
    })
})

//笔记本配置要求切换
var dt2=$(".dt2>ul>li");
dt2.each(function(i){
    $(this).on("mouseover",function(){
        for(var j=0;j<dt2.length;j++){
            if(j==i){
                $(this).attr("class","thistab li");
            }else{
                dt2.eq(j).attr("class","li");
            }
        };
        $("#tab_conbox3").css("left",-i*845+"px");
    })
})