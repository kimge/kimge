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

  $(window).resize(function (){
    // width값을 가져오기
    var width_size = window.outerWidth;

    // 1200 이하인지 if문으로 확인
    if (width_size <= 1200) {
      $('#campus > a').removeClass('hidden');
      $('#util > a').removeClass('hidden');
      $('#util > div').removeClass('hidden');
      $('.m_gnb_wrap').removeClass('hidden');
    }
  });


  $('#campus > a').on('click', function(e) {
    $('#campus').toggleClass('active');
  });
  $('.m_gnb_wrap > a').on('click', function(e) {
    $('body').addClass('opened');
    $('.m_gnb_wrap').addClass('active');
  });
  $('#util > a').on('click', function(e) {
    $('body').addClass('opened');
    $('#util').addClass('active');
  });
  $('.close').on('click', function(e) {
    $('body').removeClass('opened');
    $('.toggle').removeClass('active');
  });
  $('#mgnb ul li').on('click', function(e) {
    $('#mgnb ul li').removeClass('active');
    $(this).addClass('active');
  });
  $('#mgnb ul li div ul li.hasChild').on('click', function(e) {
    $(this).toggleClass('on');
  });
});
