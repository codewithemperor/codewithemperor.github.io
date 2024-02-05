// Add this to your existing script.js or in a separate script file

$(document).ready(function() {
    var navbar = $('.navbar');
    var navbarBlur = $('.navbar-blur');
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 50) {
        navbar.addClass('navbar-scrolled');
      } else {
        navbar.removeClass('navbar-scrolled');
      }
    });
  });
  