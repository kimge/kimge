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

//  $('.close').on('click', function() {
//    $('.gnb > li').removeClass('on');
//  });
//  $(function() {
  //  var windowWidth = $( window ).width();
    //if(windowWidth < 600) {
      //$('#campus > a').removeClass('blind');
  //});
});
