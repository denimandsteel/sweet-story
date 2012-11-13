jQuery(document).ready(function($) {
    $(window).on('scroll', scrolling);
    $(window).on('touchmove', scrolling);

    var sledOffset = $(window).width() - 960 + 340 + 20;
    $('#about .sled').css({'webkitTransform': 'translateX(' + sledOffset + 'px) translateY(-' + sledOffset + 'px)' });

    $(window).resize(function() {
      var sledOffset = $(window).width() - 960 + 340 + 20;
      if ($('#about').hasClass('ready')) {
        $('#about .sled').css({'webkitTransform': 'translateX(' + sledOffset + 'px) translateY(-' + sledOffset + 'px)' });
      }
    });

    function scrolling() {
      if(isScrolledIntoView($('#about.ready'))) {
        $('#about .sled').css({'webkitTransform': 'translateX(0px) translateY(0px)' });
        $('#about').removeClass('ready');
      }
    }
    // $(window).width() - 960 + 340 + 20
  });
  // http://stackoverflow.com/a/488073
  function isScrolledIntoView($elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    //return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    return !(elemTop >= docViewBottom || elemBottom <= docViewTop);
  }
