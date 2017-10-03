/**
 * Created by Administrator on 2017/9/28.
 */
requirejs.config({
    paths:{
        jquery:"jquery-2.1.1.min"
    }
});
require(["jquery","dialog"], function ($,Dialog) {
    var arrImg1=["img/01.png","img/02.png","img/03.png"];
    var settings1={
        selector:"#container",
        img:arrImg1,
        speed:1000,
        buttonStyle:"circle",
        arrowPos:"center"
    };
    var dialog1=new Dialog(settings1);
    dialog1.Init();
});
$(function () {
    var timer=setInterval(function () {
        var nowDate=new Date();
        var year=nowDate.getFullYear();
        var month=nowDate.getMonth();
        var date=nowDate.getDate();
        var hour=nowDate.getHours();
        var minute=nowDate.getMinutes();
        var second=nowDate.getSeconds();
        $("#year").html(year+"年");
        $("#month").html(month+1+"月");
        $("#date").html(date+"日");
        $("#time").html(hour+":"+minute+":"+second);
    },1000);
    var bFlag=false;
    $("#menu").on("click", function () {
        if(!bFlag){
            $(".sub").show();
            $("#nav").css({
                height:180
            });
            $("#menu span").eq(0).css({
                transform:"rotate(20deg)"
            }).end().eq(2).css({
                transform:"rotate(-20deg)"
            })
        }else{
            $(".sub").hide();
            $("#nav").css({
                height:75
            });
            $("#menu span").eq(0).css({
                transform:"rotate(0deg)"
            }).end().eq(2).css({
                transform:"rotate(0deg)"
            })
        }
        bFlag=!bFlag;

    });

    //首先获取文档对象
    var target;
    if(document.documentElement.scrollTop){
        target=$("html");
    }else{
        target=$("body");
    }
    //到某元素
    $(".home").on("click",function(e){
        e.preventDefault();
        var timer=setInterval(function () {
            var top=target.scrollTop();
            if(top<=$("#banner").offset().top){
                clearInterval(timer);
            }
            target.scrollTop(top-=30);
        },20)
    });
    $(".introduce").on("click", function (e) {
        e.preventDefault();
        var topStyle=target.scrollTop();
        if(topStyle<=$("#about").offset().top-75){
            var timer=setInterval(function () {
                var top=target.scrollTop();
                if(top>=$("#about").offset().top-75){
                    clearInterval(timer);
                }
                target.scrollTop(top+=30);
            },20)
        }else{
            var timer=setInterval(function () {
                var top=target.scrollTop();
                if(top<=$("#about").offset().top-75){
                    clearInterval(timer);
                }
                target.scrollTop(top-=30);
            },20)
        }
    });
    $(".skill").on("click", function (e) {
        var topStyle=target.scrollTop();
        if(topStyle<=$("#my-skills").offset().top-75){
            var timer=setInterval(function () {
                var top=target.scrollTop();
                if(top>=$("#my-skills").offset().top-75){
                    clearInterval(timer);
                }
                target.scrollTop(top+=30);
            },20)
        }else{
            var timer=setInterval(function () {
                var top=target.scrollTop();
                if(top<=$("#my-skills").offset().top-75){
                    clearInterval(timer);
                }
                target.scrollTop(top-=30);
            },20)
        }
        e.preventDefault();
    });
    $(".item").on("click", function (e) {
        e.preventDefault();
        var topStyle=target.scrollTop();
        if(topStyle<=$("#project").offset().top-75){
            var timer=setInterval(function () {
                var top=target.scrollTop();
                if(top>=$("#project").offset().top-75){
                    clearInterval(timer);
                }
                target.scrollTop(top+=30);
            },20)
        }else{
            var timer=setInterval(function () {
                var top=target.scrollTop();
                if(top<=$("#project").offset().top-75){
                    clearInterval(timer);
                }
                target.scrollTop(top-=30);
            },20)
        }
    });
    $(".contact").on("click", function () {
        var timer=setInterval(function () {
            var iScrollTop=target.scrollTop();
            if(iScrollTop>=$(document).height()-$(window).height() ){
                clearInterval(timer);
            }
            target.scrollTop(iScrollTop+=50);
        },20);
    })

    $("#nav-bar li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".sub li").on("mouseover", function () {
        $(this).css({
            background:"#ed3267",
            color:"#fff"
        }).siblings().css({
            background:"#ffffff",
            color:"#ed3267"
        });
    });
});