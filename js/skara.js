var a = $(".nav-wrapper").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() < a)
    {   
       $('.nav-wrapper').css({"background":"ghostwhite"});
    } else {
       $('.nav-wrapper').css({"background":"antiquewhite"});
    }
    
    if($(this).scrollTop() > a)
    {   
       $('.nav-wrapper').css({"background":"antiquewhite"});
    } else {
       $('.nav-wrapper').css({"background":"ghostwhite"});
    }
          
/* SCROLL PART */

    if ($('.fa-arrow-circle-up').length) {
        var scrollTrigger = 1, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.fa-arrow-circle-up').addClass('show');
                } else {
                    $('.fa-arrow-circle-up').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.fa-arrow-circle-up').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1);
        });
    }

    /* LOGO ZOOM IN WHILE SCROLLING */

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        $(".logo").css({
        width: (150)  + "px",
        height:(80)  + "px",
        });
        $(".nav-wrapper").css({
            height:(107)  + "%",
            });

        });

/* WAYPOINTS PLUGINS FOR PARA1 */
  var $para = $('.para1');
  
  $para.waypoint(function (){
      $para.addClass('js-para-animate');
  }, {offset:'40%'});

/** WAYPOINTS PLUGINS FOR PARA2 */
  var $par = $('.para2');
  
  $par.waypoint(function (){
      $par.addClass('js-para-animate');
  }, {offset:'40%'});

/** WAYPOINTS PLUGINS FOR PARA3 */
var $p = $('.logo');
  
$p.waypoint(function (){
    $p.addClass('js-para-animate');
}, {offset:'100%'});


        /* I CAN ROTATE THE LOGO WHILE SCROLLING 

var $img = $('');
var $win = $(window);
$win.on('scroll', function(){
    var top = $win.scrollTop();
    $img.css('transform','rotate(' + top + 'deg)');
})
*/





























});