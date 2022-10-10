$(function () {
  // // ==========hambarger menu end==============

  $('.banner-wrepper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: ".angle-left",
    nextArrow: ".angle-right",
  });
  //=================back to top=================
  $('.back-to-top').on('click',function(){
    $('html,body').animate({scrollTop:0},0)
  });

	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop()
		if(scroll >50){
			$('.back-to-top').fadeIn(500)
		}
		else{
			$('.back-to-top') .fadeOut(500)
		}
		if(scroll>50){
			$('.navbar').addClass('sticke-menu')
		}
		else{
			$('.navbar').removeClass('sticke-menu')
		}
	});
  //=================back to top================= 
  //=================nav part start================= 
  $('#nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
  });
  //=================nav part end=================== 
  //=================side bar start=================== 
  $('.show').on('click',function(){
    $('.slide-bar').css('left','0px')
  })
  $('.close').on('click',function(){
    $('.slide-bar').css('left','-100%')
  })
  $('.nav-link').on('click',function(){
    $('.slide-bar').css('left','-100%')
  })
  //=================side bar end=================== 
  // ==========type==============
  $(".typed").typed({
    strings: ["Developers.", "Designers.", "People."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: Infinity,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {}
  });

  // ==========service===============
  $('.service_main').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    vertical: true,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: '0px',
    autoplaySpeed: 2000,
    nextArrow: ".angle_up",
    prevArrow: ".angle_bott",
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
    ]

  });

  // =============comment===================
  $('.person_main').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: ".angle_bottom",
    nextArrow: ".angle_top",
    pauseOnHover: false,
    asNavFor: '.comment_main',
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },


    ]
  });

  $('.comment_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    prevArrow: ".angle_bottom",
    nextArrow: ".angle_top",
    pauseOnHover: false,
    asNavFor: '.person_main',
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: false,
        }
      },
    ]
  });

  $('.main_brand').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  // ============counter============
  $('.counter').counterUp({
    delay: 10,
    time: 1000,

  });
  // ===========vanu box===========
  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
// =========vano box top===============
new WOW().init();
// =========vano box top===============
});