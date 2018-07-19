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
    $(this).children().toggleClass('on');
  // console.log(a);
  });
});
