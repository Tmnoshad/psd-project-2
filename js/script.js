$(function(){


  var manuoffset = $('.manusection').offset().top;

  $(window).on('scroll', function (){

      var winscroll = $(window).scrollTop();

      if (winscroll > manuoffset) {

          $('.manusection').addClass('newclass');
      }else {
        $('.manusection').removeClass('newclass');
      }


        var scrolltop = $('.scrollTop');
        if (winscroll > 500) {

            scrolltop.fadeIn(1000);

        }else {
          scrolltop.fadeOut(1000);
        }

  });

  scrolltop.on('click', function(){

      $('html,body').animate({
          scrollTop : 0
      }, 500);

  });


});
