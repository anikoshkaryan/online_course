

$(document).on("click", ".header_search_form_mobile_btn", function(){
    $(".mobile_form").toggleClass("open");
});



  
$(document).on("click", ".hamburger-menu", function(){
    
    $('.mobile_version').animate({right: '0'}, 0.5);
    $("body").addClass("hidden_body");
  
});
  

$(document).on("click", ".hamburger-menu_close", function(){
  
    $('.mobile_version').animate({right: '-1120px'}, 0.5);
    $("body").removeClass("hidden_body");
  
});

$("body").click(function (event) {
    if($(event.target).hasClass("mobile_version")){
       $(".mobile_version").animate({right: '-1120px'}, 0.5);
      $("body").removeClass("hidden_body"); 
    }
 
});


$(document).on("click", ".nav_ul_title_plus_minus_wrapper",function(){
      $(this).parent().toggleClass("open");
})


$(document).on("click", ".course_directions_item_title", function(){

    var data_id = $(this).data("id");
    $(".course_directions_item_title").removeClass("active");
    $(this).addClass("active");
    
  
  
    $(".course_item").removeClass("open");
    $("#" + data_id).addClass("open");
  })  





  
$(document).on("click", ".tablet_course_directions_item_title", function(){

    var data_id = $(this).data("id");
    $(".tablet_course_directions_item_title").removeClass("active");
    $(this).addClass("active");
    
  
  
    $(".course_item").removeClass("open");
    $("#" + data_id).addClass("open");
  })  


    
$(document).on("click", ".mobile_course_directions_item_title", function(){

    var data_id = $(this).data("id");
    $(".mobile_course_directions_item_title").removeClass("active");

    $value = $(this).data("value");
    $(".mobile_course_directions_item_main_title").html($value);
    $(".mobile_course_directions_titles_hidden_wrapper").removeClass("open");
    $(".course_item").removeClass("open");
    $("#" + data_id).addClass("open");
  })  



  $(document).on("click", ".mobile_course_directions_title_svg", function(){
      $(".mobile_course_directions_titles_hidden_wrapper").toggleClass("open");
  })



  const swiper_school = new Swiper('#school_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.school_next',
      prevEl: '.school_prev',
    },
  
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        324: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        330: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        340: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        350: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        370: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        380: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        400: {
          slidesPerView:1,
          spaceBetween: 10
        },
        420: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        426: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        427: {
            slidesPerView: 2,
            spaceBetween: 10
          },
        440: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        470: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 10
        },
         555: {
          slidesPerView: 2,
          spaceBetween: 10
        },
         556: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
        769: {
            slidesPerView: 3,
            spaceBetween: 10
          },
        800: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        801: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        1057: {
            slidesPerView: 3,
            spaceBetween: 10
          },
        1058: {
            slidesPerView: 4,
            spaceBetween: 10
          },
        1114: {
          slidesPerView: 4,
          spaceBetween: 10
        },
          1115: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1119: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1120: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1130: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1140: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1150: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1152: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1155: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1157: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1158: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1160: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1170: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1180: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1170: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1180: {
          slidesPerView:  4,
          spaceBetween: 10
        },
        1190: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1216: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1218: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1220: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1230: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1240: {
          slidesPerView:  4,
          spaceBetween: 10
        },
        1250: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1260: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1270: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1299: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        1500: {
          slidesPerView:  4,
          spaceBetween: 10
        },
        1600: {
          slidesPerView:  4,
          spaceBetween: 10
        },
        1700: {
          slidesPerView:  4,
          spaceBetween: 10
        },
        1800: {
          slidesPerView:  4,
          spaceBetween: 10
        },
        1920: {
          slidesPerView:  4,
          spaceBetween: 10
        }
      }
  });



  $(document).on("click", ".popular_online_courses_item_title", function(){

    var data_id = $(this).data("id");
    $(".popular_online_courses_item_title").removeClass("active");
    $(this).addClass("active");
    
  
  
    $(".popular_online_courses_item").removeClass("open");
    $("#" + data_id).addClass("open");
  })  




  $(document).on("click", ".popular_online_courses_item_btn",function(){
    $(".popular_online_courses_item_details_hidden_wrapper").toggleClass("open");
  })