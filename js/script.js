// hace que el codigo es ejecutado solamente despues que la pagina termina de cargarse y protege toda varible contenida dentro del script para prevenir que no se hagan variables globales
$(function() {
    // esta linea indica al navegador que queremos tener cuidad con javascript
    "use strict";

    var topOffset = 0; // variable for menu height

    // Activate Scrollspy
    $('body').scrollspy({
        target: 'header .navbar',
        offset: topOffset
    });

    // Add inbody class
    var hash = $(this).find('li.active a').attr('href');
    if (hash !== '#presentacion') {
        $('header nav').addClass('inbody');
    } else {
        $('header nav').removeClass('inbody');
    }

    // Add an inbody class to nav when scrollspy event fires
    $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
        var hash = $(this).find('li.active a').attr('href');
        if (hash !== '#presentacion') {
            $('header nav').addClass('inbody');
        } else {
            $('header nav').removeClass('inbody');
        }
    });

    //Use smooth scrolling when clicking on navigation
    $('.navbar a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') ===
        this.pathname.replace(/^\//,'') &&
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-topOffset
          }, 500);
          return false;
        } //target.length
      } //click function
    }); //smooth scrolling

});
