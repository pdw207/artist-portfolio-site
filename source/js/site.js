window.onload = function() {

  // Create Isotope Container for Artwork
  $('#portfolio').isotope({
    itemSelector: '.art',
    layoutMode: 'fitRows',
  });

  var artPieces = document.getElementsByClassName('art');

////////////////////////////////////////
//
//   Open modal when click on artwork
//
////////////////////////////////////////

  function openModal() {
    $('#backdrop').removeClass('closed');
    $('#backdrop').addClass('open');
  }

  function closeModal() {
    $('#backdrop').removeClass('open');
    $('#backdrop').addClass('closed');
    $('ul.orbit-slides-container li').remove();
  }

  function createModal() {
    openModal();
    var photoCollection = $(this).data('collection').split(',');
    var slideShow = $('.orbit-slides-container')[0];

    photoCollection.forEach(function(photo){
      $(slideShow).append('<li style="z-index: 2; margin-left: 100%;"><img class="photo-slide" src="/img/' +  photo + '"></li>');
    })
    $('.orbit-container').append(slideShow);

    // Set styles on first object
    var $firstPhoto = $('.orbit-container ul li:first-child');
    $firstPhoto.css('z-index','4');
    $firstPhoto.css('margin-left','0');
    $firstPhoto.addClass('active');

    $( ".photo-slide" ).click(function() {
       $( ".orbit-next" ).trigger( "click" );
    });


  }


  //Click to Open Modal
  for(var i=0; i < artPieces.length; i ++){
   artPieces[i].addEventListener("click", createModal, false)
  }

  //Close Modal Button
  $( "#backdrop" ).click(function() {
    if( !$( event.target).is('.photo-slide') ) {
      closeModal();
    }

  });


  //actions on key events
  this.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      closeModal();
    } else if(evt.keyCode == 39) { // right
      $( ".orbit-next" ).trigger( "click" );
    } else if(evt.keyCode == 37) { // left
      $( ".orbit-prev" ).trigger( "click" );
    }
  };

};

////////////////////////////////////////
//
//      Isotope Settings and Setup
//
////////////////////////////////////////

// Create filter for artwork via isotope.
var $container = $('#portfolio');
$container.isotope({});

$('a.portfolio-filter').click(function(){
  var selector = "." + this.text.replace(" ", "-");
  if ( selector === ".all" ){ selector = ".art" };
  $container.isotope({ filter: selector });
  return false;
});

//modal
$(document).foundation({
  orbit: {
    animation: 'slide',
    timer: false,
    slide_number: false,
    animation_speed: 500,
    navigation_arrows: true,
    bullets: false
  }
});


////////////////////////////////////////
//
// Avoid `console` errors in browsers that lack a console.
//
////////////////////////////////////////


if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

