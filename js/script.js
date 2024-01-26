$(function(){

  // =======BANNER SLIDER PART START========
    // $('.banner-slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     arrows: true,
    //     pauseOnHover: false,
    //     prevArrow: '.left',
    //     nextArrow: '.right',
    //     fade: true,
    //   });
      
      // =======BANNER SLIDER PART END========


      // =======SERVICE SLIDER PART START========
      $('.service-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        pauseOnHover: false,
        Infinity: true,
        vertical: true,
        rows: 0,
        prevArrow: '.s-up',
        nextArrow: '.s-down',
        centerMode: true,
        centerPadding: '0px',
        verticalSwiping: true
        });
        // =======SERVICE SLIDER PART END========


        // =======TESTIMONIAL SLIDER PART START========
        $('.testimonial-slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          // autoplay: true,
          autoplaySpeed: 3000,
          arrows: true,
          pauseOnHover: false,
          Infinity: true,
          vertical: true,
          rows: 0,
          centerMode: true,
          centerPadding: '0px',
          asNavFor: '.test-details-slider',
          prevArrow: '.t-up',
          nextArrow: '.t-down',
          verticalSwiping: true
          });



        $('.test-details-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          // autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
          pauseOnHover: false,
          Infinity: true,
          vertical: true,
          rows: 0,
          asNavFor: '.testimonial-slider',
          prevArrow: '.t-up',
        nextArrow: '.t-down',
        verticalSwiping: true
          });
        // =======TESTIMONIAL SLIDER PART END========
    })