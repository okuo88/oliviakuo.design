$(".intro__link").on("click", function(e) {
  var waypoint = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(waypoint).offset().top
    },
    700
  );

  e.preventDefault();
});
