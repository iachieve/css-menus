var height = $('.header').height();
$(window).scroll(function () {
  console.log(height);
  if ($(this).scrollTop() > height) {
    $('.navbar').addClass('fixed');
  } else {
    $('.navbar').removeClass('fixed');
  }
});