//学生党办卡
function showxuesheng() {
    if ($('#yiru').css('display')=='none'){
        $('#yiru').css('display','block');
    } else {
        return;
    }
}
function hidexuesheng() {
    if ($('#yiru').css('display')=='block'){
        $('#yiru').css('display','none');
    } else {
        return;
    }
}

function showPic1(){
    $(".index_dianji1").show();
    $(".shadow").show();
}

function showPic2() {
    $(".index_dianji2").show();
    $(".shadow").show();
}
function hidenPic() {
    $(".index_dianji2").hide();
    $(".index_dianji1").hide();
    $(".shadow").hide();
}