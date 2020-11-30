$(function(){
    var tscroll = $('#t-scroll');
    tscroll.hide();
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            tscroll.fadeIn();
       } else {
            tscroll.fadeOut();
       }
    });
    tscroll.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });
  
  $('.dropdown-toggle').dropdown();
  