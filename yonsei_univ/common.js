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

  $(document).ready(function() {
    /* quick menu */
    var scrollTop = $('html').scrollTop();
    // console.log(scrollTop);
    var con_offset = $('#container').offset().top;
    // console.log(con_offset);
    if ( scrollTop < 300) {
      scrollTop = 300;
    }
    $(".quick").animate( { "top": con_offset + 50 +"px" }, 500 );
    $(window).scroll(function(){
      $('.quick').stop();
      $('.quick').animate( { "top": scrollTop + "px" }, 1000 );
    });
  });

  $('#top').on('click', function() {
    $('html, body').animate({scrollTop: $('body').offset().top}, speed)
  });
});
