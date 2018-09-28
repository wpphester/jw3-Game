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
        if(index==12){
            index=1;
        }
    }

    pic.src="../images/kf_"+index+".jpg";

    for(var i=0;i<lis.length;i++){
        lis[i].setAttribute("class","scroll_number_out");
        if( i ==(index-1) ){
            lis[i].setAttribute("class","scroll_number_over");
        }
    }
}

function start() {
    time=setInterval("show()",1500);
}




//微信客服移入移出
$('.kind .wxbz').mouseover(function () {
    $('.wxkf2').show();
    $('.wxkf').hide();
    //console.log(wxbz.length);
});
$('.kind .wxbz').mouseout(function () {
    $('.wxkf2').hide();
    $('.wxkf').show();
});

$('.kind .wbbz').mouseover(function () {
    $('.wbkf2').show();
    $('.wbkf').hide();

});
$('.kind .wbbz').mouseout(function () {
    $('.wbkf2').hide();
    $('.wbkf').show();
});
$('.kind .ltbz').mouseover(function () {
    $('.gflt2').show();
    $('.gflt').hide();

});
$('.kind .ltbz').mouseout(function () {
    $('.gflt2').hide();
    $('.gflt').show();
});
$('.kind .dhbz').mouseover(function () {
    $('.kfrx2').show();
    $('.kfrx').hide();
});
$('.kind .dhbz').mouseout(function () {
    $('.kfrx2').hide();
    $('.kfrx').show();
});


//金山游戏移入移出
$('.game').mouseover(function () {
    $('#wdyx').show();
});
$('.game').mouseout(function () {
    $('#wdyx').hide();
});



