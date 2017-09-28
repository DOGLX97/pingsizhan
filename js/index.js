/**
 * Created by Administrator on 2017/9/28.
 */
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
});