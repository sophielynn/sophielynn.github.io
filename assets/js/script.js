var boxes = document.querySelectorAll(".box-blank");
var items = document.querySelectorAll(".nav__item");


var anchorTop = $("#Ubax").css("top");
console.log(anchorTop);
anchorTop = Number(anchorTop.substring(0, anchorTop.indexOf("p")));  //首先在监听器外部记录某id=anchor的标签的初始位置  


$(window).scroll(function () {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    if ($(this).scrollTop() > 500 & $(this).scrollTop() < 620) {
        $('header').addClass("sticky");
        boxes[0].style.height = "550px";
        $("#subhead").hide();
        $('header').css("opacity", ($(this).scrollTop() - 500) / 160);
        $("#mainhead").css("opacity", ($(this).scrollTop() - 500) / 120);
    }
    else if ($(this).scrollTop() >= 620) {
        $('header').addClass("sticky");
        boxes[0].style.height = "550px";
        $("#subhead").hide();
        $('header').css("opacity", 0.75);
        $("#mainhead").css("opacity", 1);
    }
    else {
        $('header').removeClass("sticky");
        boxes[0].style.height = "50px";
        $("#subhead").show();
        $('header').css("opacity", 1);
        $("#mainhead").css("opacity", 1);
    }

    if ($(this).scrollTop() > 740) {
        // $("#Ubax").css("top", anchorTop + top - 750 + "px");
        $("#Ubax").css("position", "fixed");
        $("#Ubax").css("top", 210+"px");
        // console.log($("#Ubax").css("top"));
    }
    else {
        // $("#Ubax").css("top", anchorTop + "px");
        $("#Ubax").css("position", "relative");
        $("#Ubax").css("top", 50+"px");
    }


    var menus = document.querySelectorAll('.nav__item');
    var items = [document.getElementById("item1"), document.getElementById("item2"),
    document.getElementById("item3"), document.getElementById("item4"), 
    document.getElementById("item5"), document.getElementById("item6"), 
    document.getElementById("item7"), document.getElementById("item8")];

    for (var i = 0; i < items.length; i++) {
        var current = document.querySelectorAll('.nav__item--current');

        if (top > items[i].offsetTop + 300) {
            current[0].classList.remove('nav__item--current');
            menus[i].classList.add('nav__item--current');
        } else {
            break;
        }
    }

});