var a = $(".nav-wrapper").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() < a)
    {   
       $('.nav-wrapper').css({"background":"ghostwhite"});
    } else {
       $('.nav-wrapper').css({"background":"lightsteelblue"});
    }
});