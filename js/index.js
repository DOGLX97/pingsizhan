/**
 * Created by Administrator on 2017/9/28.
 */
requirejs.config({
    paths:{
        jquery:"jquery-2.1.1.min"
    }
});
require(["jquery","dialog"], function ($,Dialog) {
    var arrImg1=[];
    if(document.body.clientWidth<=768){
        arrImg1=["img/04.png","img/05.png","img/06.png"];
    }else{
        arrImg1=["img/01.png","img/02.png","img/03.png"];
    }
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
    $('a.scroll').on("click", function (e) {
        e.preventDefault();
        var that = $(this);
        $('html, body').stop().animate({
            scrollTop: $(that.attr('href')).offset().top - 50
        }, 1000);
    });

    $("#nav-bar a").on("click", function () {
        $(this).addClass("active").parent().siblings().children('a').removeClass("active");
    });
    $(".sub a").on("mouseover", function () {
        $(this).css({
            background:"#ed3267",
            color:"#fff"
        }).parent().siblings().children('a').css({
            background:"#ffffff",
            color:"#ed3267"
        });
    });
    rotate();
    function rotate(){
        var rotateNum=0;
        var rotateTimer=setInterval(function () {
            rotateNum++;
            $('#name').css({
                transform:"rotateY("+rotateNum*8+"deg)"
            })
        },3000/60);
    }
});