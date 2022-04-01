$(function() {
    const header = document.querySelector("header");
    const classes = header.classList;
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 85) {
            classes.add("active");
        } else {
           classes.remove("active");
        }
    });
});