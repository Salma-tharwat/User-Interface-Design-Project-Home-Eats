
$(document).ready(function () {
  $('#mycarousel').carousel({ interval: 2000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
      $("#mycarousel").carousel('pause');
      $("#carouselButton").children("span").removeClass('fa-pause');
      $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')) {
      $("#mycarousel").carousel('cycle');
      $("#carouselButton").children("span").removeClass('fa-play');
      $("#carouselButton").children("span").addClass('fa-pause');
    }
  });
});

$(document).ready(function () {
  $("#Reserve_btn").click(function () {
    $("#ReserveModal").modal();
  });
});

$(document).ready(function () {
  $("#login_btn").click(function () {
    $("#loginModal").modal();
  });
});

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $('#navbar').addClass('dark-bg');
  }
  else {
    $('#navbar').removeClass('dark-bg');
  }
})