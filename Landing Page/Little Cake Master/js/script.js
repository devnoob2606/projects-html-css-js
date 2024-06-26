$(document).ready(function () {
    $(".mobile-menu").click(function () { 
        $(".nav-menu").toggleClass("active");
    });
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 0) {
          $(".nav-menu").removeClass("active");
        }
    });
});