
$(document).ready(function(){

// Initialize slick slider

$('.slick').slick({ 
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
    appendDots: '.dot-anchor',
});




 // Initialize LazyLoad  
 ;(function() {
    // Initialize
    var hqyLazy = new HqyLazyload();
})();

// Waypoints to trigger animations on home page

var waypoints = $('.benefits .row').waypoint(function(direction) {
    $(this.element).addClass('start');

}, {
offset: '65%'
});

var waypoints = $('.at-a-glance .col-sm-4').waypoint(function(direction) {
    $(this.element).addClass('start');

}, {
offset: '65%'
});

// initialize  select picker

$('select').selectpicker();

// Bootstrap hover dropdowns
/** Dropdown on hover */
$(".nav-link.dropdown-toggle").hover( function () {
    // Open up the dropdown
    $(this).removeAttr('data-toggle'); // remove the data-toggle attribute so we can click and follow link
    $(this).parent().addClass('show'); // add the class show to the li parent
    $(this).next().addClass('show'); // add the class show to the dropdown div sibling
}, function () {
    // on mouseout check to see if hovering over the dropdown or the link still
    var isDropdownHovered = $(this).next().filter(":hover").length; // check the dropdown for hover - returns true of false
    var isThisHovered = $(this).filter(":hover").length;  // check the top level item for hover
    if(isDropdownHovered || isThisHovered) {
        // still hovering over the link or the dropdown
    } else {
        // no longer hovering over either - lets remove the 'show' classes
        $(this).attr('data-toggle', 'dropdown'); // put back the data-toggle attr
        $(this).parent().removeClass('show');
        $(this).next().removeClass('show');
    }
});
// Check the dropdown on hover
$(".dropdown-menu").hover( function () {
}, function() {
    var isDropdownHovered = $(this).prev().filter(":hover").length; // check the dropdown for hover - returns true of false
    var isThisHovered= $(this).filter(":hover").length;  // check the top level item for hover
    if(isDropdownHovered || isThisHovered) {
        // do nothing - hovering over the dropdown of the top level link
    } else {
        // get rid of the classes showing it
        $(this).parent().removeClass('show');
        $(this).removeClass('show');
    }
});



// Use select box to change pages like a filter.

    $(function() {
        $("#submit").hide();
        $("#page-changer select").change(function() {
                window.location = $("#page-changer select option:selected").val();
        })
    });


    

    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
 


// Trigger The mobile navigation backdrop

// $('#navbarNav').on('hide.bs.collapse show.bs.collapse', function () {
//       if(!$('#navbarNav').hasClass('show')){
//         $('.mobile-menu-backdrop').addClass('active');
//       } else {
//         $('.mobile-menu-backdrop').removeClass('active');
//       }
// })


// SIMPLE Events filter based on classes to show and hide content.

$(function() {   

    $('#selectFilter').change(function(){
        console.log($(this).val());
        if($(this).val() == 'conference'){
            $('.webinar, .sip-release').slideUp();
            $('.conference').slideDown();
        }
        if($(this).val() == 'webinars'){
            $('.conference, .sip-release').slideUp();
            $('.webinar').slideDown();
        }
        if($(this).val() == 'sip-release'){
            $('.conference, .webinar').slideUp();
            $('.sip-release').slideDown();
        }
        if($(this).val() == 'show-all'){
            $('.conference, .sip-release, .webinar').slideDown();
        }

    });

});




var $arrow = $('.down-arrow');

$arrow.waypoint(function(direction) {
  if (direction === 'down') {
    TweenMax.to(".down-arrow", 2, { ease: Elastic.easeOut.config(1, 0.3), scale:"0.65"  });
  }
}, {
  offset: '25%'
});

$arrow.waypoint(function(direction) {
  if (direction === 'up') {
    TweenMax.to(".down-arrow", 2, { ease: Elastic.easeOut.config(1, 0.3), scale:"1"  });
  }
}, {
  offset: '25%'
});



});