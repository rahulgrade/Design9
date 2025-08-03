/* Safety Sciences Advantage Slider */
$( document ).ready(function() {

    /*Sticky Header*/
    $("#sticky-header").sticky({topSpacing:0});

    /*Strat Left sidenav*/
    let burger = document.querySelector('.burger');
    let close = document.querySelector('.close');
    let sidenav = document.querySelector('#sidenav');
    let overlay = document.querySelector('#overlay');

    let classOpen = [sidenav, overlay];
    burger.addEventListener('click', function(e){
      classOpen.forEach(e => e.classList.add('active'));
    });

    let classCloseClick = [overlay, close];
    classCloseClick.forEach(function(el) {
      el.addEventListener('click', function(els) {
        classOpen.forEach(els => els.classList.remove('active'));
      });
    });
    /*End Left sidenav*/

    $(".main-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true, 
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    /* SIDE BOARDS & CONSOLES  Slider */
    $(".product-side-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, 
        pauseOnHover:true,
        responsive: [
          {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true
          }
          },
          {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ] 
    });
    // Recalculate slider position when a Bootstrap 5 pill is shown
    $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function () {
      $('.product-side-slider').slick('setPosition');
    });

    /* COFFEE TABLES Slider */
    $(".product-coffee-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, 
        pauseOnHover:true,
        responsive: [
          {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true
          }
          },
          {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ] 
    });
    // Recalculate slider position when a Bootstrap 5 pill is shown
    $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function () {
      $('.product-coffee-slider').slick('setPosition');
    });

    /*DINING TABLES Slider */
    $(".product-dining-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, 
        pauseOnHover:true,
        responsive: [
          {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true
          }
          },
          {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ] 
    });
    // Recalculate slider position when a Bootstrap 5 pill is shown
    $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function () {
      $('.product-dining-slider').slick('setPosition');
    });

    /*ARM CHAIRS & POUFS Slider */
    $(".product-arm-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, 
        pauseOnHover:true,
        responsive: [
          {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true
          }
          },
          {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ] 
    });
    // Recalculate slider position when a Bootstrap 5 pill is shown
    $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function () {
      $('.product-arm-slider').slick('setPosition');
    });

    /*FULL HOME CUSTOMIZATION  Slider */
    $(".product-full-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, 
        pauseOnHover:true,
        responsive: [
          {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true
          }
          },
          {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ] 
    });
    // Recalculate slider position when a Bootstrap 5 pill is shown
    $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function () {
      $('.product-full-slider').slick('setPosition');
    });

    /*BEDS AND SOFA Slider */
    $(".product-beds-sliders").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, 
        pauseOnHover:true,
        responsive: [
          {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true
          }
          },
          {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ] 
    });
    // Recalculate slider position when a Bootstrap 5 pill is shown
    $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function () {
      $('.product-beds-sliders').slick('setPosition');
    });

    /* Customer Testimonials Slider */
    $(".testimonials-slider").slick({
        dots: false,
        infinite: true,
        //centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover:true,
        responsive: [
          {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true
          }
          },
          {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ] 
    });

    /* Get Estimate Accessories Slider */
    $('.accessories-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>',
    responsive: [
        {
        breakpoint: 1200,
        settings: { slidesToShow: 3 }
        },
        {
        breakpoint: 992,
        settings: { slidesToShow: 3 }
        },
        {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
        },
        {
        breakpoint: 414,
        settings: { slidesToShow: 1 }
        }
    ]
    });

    /********************** Dropdown Menu on hover *********************/
    $('.dropdown').hover(function() {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
      }, function() {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
      });

    /********************** Stepper On Click Active class *********************/
    $('.stepper li a').on('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    $('.stepper li').removeClass('active'); // Remove active from all
    $(this).closest('li').addClass('active'); // Add active to clicked item's parent <li>
    });

    /********************** wow animation *********************/
    // wow animation off on Mobile
    wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
    }
    )
    wow.init();

});
