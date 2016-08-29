

$(document).ready(function (){
  $("#about-link").click(function (){
    $(window).scrollTo($("#about"), 800);
  });

  $("#projects-link").click(function (){
    $(window).scrollTo($("#projects"), 800);
  });

  $("#contact-link").click(function (){
    $(window).scrollTo($("#contact"), 800);
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() > 500) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });
});
