
/* ===============================================
	TRAP TAB FOCUS ON MODAL SEARCH
============================================= */

jQuery('.search-form #searchform #search').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form #searchform :input.search-submit').focus();
  }
});

jQuery('.search-form #searchform :input.search-submit').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form a.close-search-form').focus();
  }
});

jQuery('.search-form a.close-search-form').on('keydown', function (e) {
  if (jQuery("this:focus") && (e.which === 9)) {
    e.preventDefault();
    jQuery(this).blur();
    jQuery('.search-form #searchform #search').focus();
  }
});

/* ===============================================
	OWL CAROUSEL SLIDER SECTION 
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#slider .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: true,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: false,
    dots:true,
    navText:["<div class='nav-btn fas fa-chevron-left' </div>","<div class='nav-btn  fas fa-chevron-right' </div>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

/* ===============================================
  OWL CAROUSEL SHOP BY CATEGORY SECTION
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#shop-category .owl-carousel');
    owl.owlCarousel({
    margin:10,
    nav: true,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: false,
    dots:true,
    navText:["<div class='nav-btn fas fa-chevron-left' </div>","<div class='nav-btn  fas fa-chevron-right' </div>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

/* ===============================================
  OWL CAROUSEL PRODUCT CATEGORY SECTION
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#product-category .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: false,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

/* ===============================================
  OWL CAROUSEL OUR SPECIALIST SECTION
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#specialist .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: false,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: false,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

/* ===============================================
  OWL CAROUSEL COVID SUPPLY SECTION
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#covid-supply .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: false,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

/* ===============================================
  OWL CAROUSEL TESTIMONIAL SECTION
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#testimonial .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: false,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

/* ===============================================
  OWL CAROUSEL LATEST NEWS SECTION
=============================================== */

jQuery('document').ready(function(){
  var owl = jQuery('#latest-news .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: false,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

/* ===============================================
  SCROLL TO TOP BUTTON
=============================================== */
var btn = jQuery('#button_scroll');

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  jQuery('html, body').animate({scrollTop:0}, '300');
});


/* ===============================================
 PRELOADER
=============================================== */

jQuery(window).load(function(){
  jQuery('.cssloader').fadeOut('slow',function(){jQuery(this).remove();});
});


/* ===============================================
  OPEN Menu
============================================= */

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* ===============================================
 STICKY HEADER
=============================================== */
  
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("site-navigation");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fix-sticky")
  } else {
    navbar.classList.remove("fix-sticky");
  }
}

/* ===============================================
  TABS
=============================================== */

jQuery(document).ready(function () {
  jQuery( ".tablinks" ).first().addClass( "active" );
   jQuery( ".tabcontent" ).first().addClass( "active" );
});

function online_pharmacy_pro_openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  jQuery('#'+ cityName).show()
  evt.currentTarget.className += " active";
}

/* ===============================================
 FAQ SECTION
=============================================== */

(function () {
  "use strict";
  var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
    return function (arg) {
      if (this.length > 1) {
        this.each(function () {
          var $this = jQuery(this);

          if (!$this.data(ident)) {
            $this.data(ident, func($this, arg));
          }
        });

        return this;
      } else if (this.length === 1) {
        if (!this.data(ident)) {
          this.data(ident, func(this, arg));
        }

        return this.data(ident);
      }
    };
  });
})();

(function () {
  "use strict";
  function Accordion($roots) {
    var element = $roots;
    var accordion = $roots.first("[data-accordion]");
    var accordion_target = $roots.find("[data-accordion-item]");
    var accordion_content = $roots.find("[data-accordion-content]");
    jQuery(accordion_target).click(function () {
      jQuery(this).toggleClass("opened");
      jQuery(this).find(accordion_content).slideToggle("slow");
      jQuery(this).siblings().find(accordion_content).slideUp("slow");
      jQuery(this).siblings().removeClass("opened");
    });
  }
  jQuery.fn.Accordion = jQueryPlugin("Accordion", Accordion);
  jQuery("[data-accordion]").Accordion();

  function Ripple_Button($root) {
    var elements = $root;
    var ripple_btn = $root.first("[data-ripple]");
    jQuery(ripple_btn).on("click", function (event) {
      event.preventDefault();
      var $div = $("<div/>"),
        btnOffset = ripple_btn.offset(),
        xPos = event.pageX - btnOffset.left,
        yPos = event.pageY - btnOffset.top;
      $div.addClass("ripple-effect");
      $div.css({
        height: ripple_btn.height(),
        width: ripple_btn.height(),
        top: yPos - $div.height() / 2,
        left: xPos - $div.width() / 2,
        background: ripple_btn.data("ripple") || "#ffffff26"
      });
      ripple_btn.append($div);

      window.setTimeout(function () {
        $div.remove();
      }, 2000);
    });
  }
  jQuery.fn.Ripple_Button = jQueryPlugin("Ripple_Button", Ripple_Button);
  jQuery("[data-ripple]").Ripple_Button();
})();


/* ===============================================
  Open Video Our Laboratory Section
=============================================== */

function webinar_education_pro_open_video() {

  jQuery('.video-section .online-pharmacy-pro').addClass('is-open');
  jQuery('body').addClass('no-scrolling');
  setTimeout(function(){
     jQuery('.online-pharmacy-pro  #menu-section-videoblog input#menu-section-v').filter(':visible').focus();
     jQuery('.close-video').show();
  }, 100);

  return false;
}

jQuery( ".video-section a.open-video").on("click", webinar_education_pro_open_video);

/* ===============================================
  Close Video Our Laboratory Section
=============================================== */

function webinar_education_pro_close_video() {
  jQuery('.video-section .online-pharmacy-pro').removeClass('is-open');
  jQuery('body').removeClass('no-scrolling');
  jQuery('.close-video').hide();
}

jQuery( ".video-section a.close-video").on("click", webinar_education_pro_close_video);