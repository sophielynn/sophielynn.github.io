var boxes = document.querySelectorAll(".box-blank");
var items = document.querySelectorAll(".nav__item");


var anchorTop = $("#Ubax").css("top");  
console.log (anchorTop);
anchorTop = Number(anchorTop.substring(0, anchorTop.indexOf("p")));  //首先在监听器外部记录某id=anchor的标签的初始位置  


$(window).scroll(function() {
    var top = document.documentElement.scrollTop || document.body.scrollTop; 
    if ($(this).scrollTop() >420){ 
        $('header').addClass("sticky");
        boxes[0].style.height = "550px";
        $("#subhead").hide();
    }
    else{
        $('header').removeClass("sticky");
        boxes[0].style.height = "50px";
        $("#subhead").show();
    }

    if ($(this).scrollTop() >700){ 
        $("#Ubax").css("top", anchorTop + top - 700 + "px");  
    }
    else{
        $("#Ubax").css("top", anchorTop + "px");  
    }

    
    var menus = document.querySelectorAll('.nav__item');              
    var items = [document.getElementById("item1"),document.getElementById("item2"),document.getElementById("item3"),document.getElementById("item4"),document.getElementById("item5"),document.getElementById("item6"),document.getElementById("item7"),document.getElementById("item8")];
        
    for(var i=0;i<items.length;i++){
        var current = document.querySelectorAll('.nav__item--current');

        if(top>items[i].offsetTop + 300 ){
            current[0].classList.remove('nav__item--current');
            menus[i].classList.add('nav__item--current');
        }else{
            break;
        }
    }

});