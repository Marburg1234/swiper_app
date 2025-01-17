let title="javascriptが使えました"
alert(title);

/* global $*/
$(document).ready(function () {
  $('.greeting').on('click', function(){
    $(this).css('color','red');
  });
});


$(document).ready(function () {
  $('.comment').on('click', function(){
    $(this).css('color','limegreen');
  });
});

// Swiperのオプションを定数化
const opt = {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}

// Swiperを実行(初期化)
$(document).on('turbolinks:load', function() {
    let swiper = new Swiper('.swiper',opt);
});