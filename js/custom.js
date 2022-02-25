$(document).ready(function(){
    var sidenav = $(".sidenav")
    var canselsidenav = $("header nav .sidenav span")
    var sidenavlist = $("header nav .sidenav ul li")
    var burgerbutton = $(".burgerbutton")
    var nav = $("nav")


    burgerbutton.on("click",function(){
        sidenav.animate({
            left : 0,
        },500)
    })
    canselsidenav.on("click",function(){
        sidenav.animate({
            left : -380,
        },500)
    })
    sidenavlist.on("click",function(){
        sidenav.animate({
            left : -380,
        },500)
    })
    $(document).scroll(function(){
        console.log($(window).scrollTop())
        if( $(window).scrollTop() >= 70 ) {
            nav.addClass("fixed")
        }else {
            nav.removeClass("fixed")
        }
    })
});