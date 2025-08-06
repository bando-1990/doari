
var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        $('#header').addClass('hide');
    } else {
        $('#header').removeClass('hide');
    }
    startPos = winScrollTop;
});
$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.menu , .btn-line ,  #header').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});
