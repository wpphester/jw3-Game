var res=$(".rest");
var navs=$(".navs");
window.onscroll=function(){
    for(var i=0;i<navs.length;i++){
        var len=res.eq(i).offset().top-$(window).scrollTop();
            if(len>=0&&len<=900){
                navs.eq(i).attr("class","navs curr");
            }else{
                navs.eq(i).attr("class","navs");}
        }

	console.log(document.documentElement.scrollTop);
}
navs.each(function(i){
    $(this).on("click",function(){
        for(var j=0;j<navs.length;j++){
            if(j==i){
				window.scrollTo(0,900*i+50);
                navs.eq(i).attr("class","navs curr");
            }else{
                navs.eq(j).attr("class","navs");
            }
        }
    })
})
