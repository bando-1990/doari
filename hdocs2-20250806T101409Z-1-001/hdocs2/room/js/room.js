
const modal = $("#js-modal");
const overlay = $("#js-overlay");
const close = $("#js-close");
const open = $("#js-open");

open.on('click', function () { //ボタンをクリックしたら
  modal.addClass("open"); // modalクラスにopenクラス付与
  overlay.addClass("open"); // overlayクラスにopenクラス付与
});
close.on('click', function () { //×ボタンをクリックしたら
  modal.removeClass("open"); // modalクラスからopenクラスを外す
  overlay.removeClass("open"); // overlayクラスからopenクラスを外す
});

$(function () {
  $(".slider").slick({
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed:1200,
    dots: true,
    fade: true,
    speed:2500,
    waitForAnimate: false,
  });
});
