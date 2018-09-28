var xs=document.getElementById("xs");
window.onscroll=function () {
    if(document.documentElement.scrollTop+document.body.scrollTop>250){
        xs.style.display="block";
    }else{
        xs.style.display="none";
    }
}

onscroll();