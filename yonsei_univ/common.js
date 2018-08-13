$(function() {
  $('.gnb > li ').on('click', function() {
    $('.gnb > li ').removeClass('on');
    $(this).toggleClass('on');
  });
  $('.menu_wrap > button.close').on('click', function() {
    $(this).parent().hide();
    $('.gnb > li').removeClass('on');
  });
  $('.language').on('click', function() {
    $(this).toggleClass('active');
  });
  $('.pagination > button').on('click', function() {
    $(this).hide();
    $(this).siblings().show();
  });

  $('.familysites > a').on('click', function(e) {
    event.preventDefault();
    $('.familysites').toggleClass('on');
  });
  $('.menu > li').on('click', function(e) {
    event.preventDefault();
    $(this).find('.qwrap').toggleClass('on');
    $(this).find('.btn_qclose').toggleClass('on');
  // console.log(a);
  });

 // quick menu

  $(document).ready(function() {

    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);

    //var quickTop = parseInt($('.quick').css('top'));

    // console.log(footer_offset);
    $(window).scroll(function(){
      if (scrollTop < 600) {
        scrollTop = 300;
      }
      $('.quick').stop();
      $('.quick').animate( { "top": scrollTop + "px" }, 500 );
    });
  });

  $('#top').on('click', function() {
    $('html, body').animate({scrollTop: $('body').offset().top}, speed)
  });
});

  function remove_class(){
    var windowWidth = $( window ).width();
    if(windowWidth < 1200) {
      $('#campus > a').removeClass('hidden');
    }
  };
