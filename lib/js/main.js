jQuery(function($){
  $(function(){
    $('#navbarToggler').click(function() {
      $(this).toggleClass('active');
    });
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^="#"]').on('click',function() {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // 移動先を取得
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
    });
    // フェードインしながら上へスライド    
    $('.Inview').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).addClass('Viewing');
      }
    });
    //カレンダーをスライドショーに
    $('.main_calender').slick({
      accessibility: true,
      autoplay: false,
      dots: true,
      fade: true,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  });
});
