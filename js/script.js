
  $(document).ready(function() {
    
    const lightbox = GLightbox({
        touchNavigation: true, // Enable swipe gestures on touch-enabled devices
        loop: true, // Enable looping through the gallery
      });






});


// Mobile Navigation bar 

// $(document).ready(function() {

//   // Get all dropdown toggle elements
//   const dropdownToggleElements = document.querySelectorAll('.mobileMenu .nav-item.dropdown .nav-link.dropdown-toggle');
  
//   // Add a click event listener to each dropdown toggle
//   dropdownToggleElements.forEach((toggle) => {
//     toggle.addEventListener('click', (e) => {
//       // Prevent the default behavior (closing dropdown)
//       e.preventDefault();
//       e.stopPropagation();
  
//       // Toggle the 'show' class on the dropdown menu
//       const dropdownMenu = toggle.nextElementSibling;
//       if (dropdownMenu) {
//         dropdownMenu.classList.toggle('show');
//       }
//     });
//   });
  
//   // Close dropdowns when clicking outside
//   document.addEventListener('click', (e) => {
//     dropdownToggleElements.forEach((toggle) => {
//       // Close dropdowns that are not the target of the click
//       if (toggle !== e.target) {
//         const dropdownMenu = toggle.nextElementSibling;
//         if (dropdownMenu && dropdownMenu.classList.contains('show')) {
//           dropdownMenu.classList.remove('show');
//         }
//       }
//     });
//   });
  
//   });
  
  








  // $('[data-toggle="slide-collapse"]').on('click', function() {
  //   $navMenuCont = $($(this).data('target'));
  //   $navMenuCont.animate({
  //     'width': 'toggle'
  //   }, 350);
  //   $(".menu-overlay").fadeIn(500);
  
  // });
  // $(".menu-overlay").click(function(event) {
  //   $(".navbar-toggler").trigger("click");
  //   $(".menu-overlay").fadeOut(500);
  // });
  

   $('.first').owlCarousel({
    loop:true,
    // margin:10,
    nav:true,
    navText :false,
    dots:true,
    autoplay:true,
    autoplayTimeout: 4000,
    smartSpeed: 2000, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.third').owlCarousel({
  // loop:true,
  // margin:10,
  nav: true,
  navText: [
  '<i class="fa fa-solid fa-arrow-left"></i>',
  '<i class="fa fa-solid fa-arrow-right"></i>'
  ],
  dots:false,
  // autoplay:true,
  autoplayTimeout: 1500,
  smartSpeed: 1000, 
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:3
      }
  }
})



    $('.second').owlCarousel({
        // loop:true,
        // margin:10,
        nav: true,
        navText: [
        '<i class="fa fa-solid fa-arrow-left"></i>',
        '<i class="fa fa-solid fa-arrow-right"></i>'
        ],
        dots:false,
        autoplay:true,
        smartSpeed: 1000, 
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

    $('.four').owlCarousel({
        // loop:true,
        // margin:10,
        nav: true,
        navText: [
        '<i class="fa fa-solid fa-arrow-left"></i>',
        '<i class="fa fa-solid fa-arrow-right"></i>'
        ],
        dots:false,
        autoplay:true,
        autoplayTimeout: 1500,
        smartSpeed: 1000, 
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

$('.two').owlCarousel({
        loop:true,
        items: 5,
        margin:30,
        nav: true,
        navText: [
        '<img src="images/icons/leftangel.png" alt="Previous" style="width:2rem;height:3.8rem">',
        '<img src="images/icons/rightangel.png" alt="Previous" style="width:2rem;height:3.8rem">',
        ],
        dots:false,
        autoplay:true,
        autoplayTimeout: 1500,  
        smartSpeed: 1000,
        responsive:{
          0: {
            items: 2 
          },
          768: {
              items: 5 
          }
        }
    })
    $('.banner_banks').owlCarousel({
        // loop:true,
        // margin:20,
        nav: true,
        navText: [
        '<i class="fa fa-solid fa-arrow-left"></i>',
        '<i class="fa fa-solid fa-arrow-right"></i>'
        ],
        dots:false,
        autoplay:true,
        autoplayTimeout: 1500,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:6
            }
        }
    });
            
$('.overviewFirst').owlCarousel({
    items: 4, 
    loop: true, 
    nav: true, 
    rtl: true, 
    autoplay: true, 
    autoplayTimeout: 3000, 
    smartSpeed: 1000,
    responsive: {
        0: {
        items: 1 
        },
        768: {
        items: 1
        },
        992: {
        items: 1 
        }
    }
});
$('.overviewSecond').owlCarousel({
    items: 4, 
    loop: true, 
    nav: true, 
    rtl: false, 
    autoplay: true, 
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    responsive: {
        0: {
        items: 1 
        },
        768: {
        items: 1
        },
        992: {
        items: 1 
        }
    }
});

$('.animicarousel').owlCarousel({
    items: 3, // Number of items to display
    loop: true, // Infinite loop
    margin: 15, 
    nav: true,
    navText: [
        '<img src="images/whitelily/leftarrow.png" alt="Previous" style="width:32px;height:21px">',
        '<img src="images/whitelily/rightarrow.png" alt="Previous" style="width:32px;height:21px">',
        ],
    rtl: false, 
    autoplay: true, 
    autoplaySpeed: 1500, 
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1 
      },
      768: {
        items: 3 
      }
    }
  });

  $(' .whiteLillyResidencyanimicarousel').owlCarousel({
    items: 3, // Number of items to display
    loop: true, // Infinite loop
    margin: 15, 
    nav: true,
    navText: [
        // '<img src="images/whitelily-residency/leftarrow.png" alt="Previous" style="width:32px;height:21px">',
        // '<img src="images/whitelily-residency/rightarrow.png" alt="Previous" style="width:32px;height:21px">',
        '<i class="fa fa-solid fa-arrow-left" style="width:32px;height:21px"></i>',
        '<i class="fa fa-solid fa-arrow-right" style="width:32px;height:21px"></i>'
        ],
    rtl: false, 
    autoplay: true, 
    autoplayTimeout: 1500, 
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1 
      },
      768: {
        items: 3 
      }
    }
  });


  $('.unitslayout').owlCarousel({
    items: 4, 
    loop: true, 
    nav: true, 
    navText: [
      '<i class="fa fa-solid fa-arrow-left" style="width:32px;height:21px"></i>',
      '<i class="fa fa-solid fa-arrow-right" style="width:32px;height:21px"></i>'
        ],
    rtl: false, 
    autoplay: false, 
    autoplayTimeout: 3000, 
    smartSpeed: 1000,
    responsive: {
        0: {
        items: 1 
        },
        768: {
        items: 1
        },
        992: {
        items: 1 
        }
    }
});
$('.whitelilyresidencyunitslayout').owlCarousel({
  items: 4, 
  loop: true, 
  nav: true, 
  navText: [
    '<i class="fa fa-solid fa-arrow-left" style="width:32px;height:21px"></i>',
    '<i class="fa fa-solid fa-arrow-right" style="width:32px;height:21px"></i>'
      ],
  rtl: false, 
  autoplay: false, 
  autoplayTimeout: 3500,
  smartSpeed: 1000,
  responsive: {
      0: {
      items: 1 
      },
      768: {
      items: 1
      },
      992: {
      items: 1 
      }
  }
});
$('.barrestrocarousel').owlCarousel({
  items: 4, 
  loop: true, 
  nav: true, 
  navText: [
    '<i class="fa fa-solid fa-arrow-left" style="width:32px;height:21px"></i>',
    '<i class="fa fa-solid fa-arrow-right" style="width:32px;height:21px"></i>'
      ],
  rtl: false, 
  autoplay: true, 
  autoplayTimeout: 2500, 
  smartSpeed: 1000,
  responsive: {
      0: {
      items: 1 
      },
      768: {
      items: 1
      },
      992: {
      items: 1 
      }
  }
});
$('.residentialRowCarousel').owlCarousel({
    items: 3, 
    loop: true,
    margin:10,
    nav: true,
    navText: [
        // '<img src="images/whitelily/leftarrow.png" alt="Previous" style="width:32px;height:21px">',
        // '<img src="images/whitelily/rightarrow.png" alt="Previous" style="width:32px;height:21px">',
        '<i class="fa fa-solid fa-arrow-left" style="width:32px;height:21px"></i>',
        '<i class="fa fa-solid fa-arrow-right" style="width:32px;height:21px"></i>'
        ],
    dots: false,
    autoplay: true,
    autoplaySpeed: 500,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3 
      },
      992: {
        items: 3 
      }
    }
  });




