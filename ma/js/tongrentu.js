var zans=$(".votecount");
console.log(zans.length);

zans.each(function(i){
    $(this).on("click",function(){
        zans[i].className+=" zan";
        // zans.eq(i).attr("class","votecount zan");
        zans[i].innerHTML=parseInt(zans[i].innerHTML)+1;
        alert("点赞成功");
    })
})