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
    var album = $(this).data('collection').split(',');
    var albumCaption = $(this).data('caption');
    var albumTitle = $(this).data('title');
    var slideShow = $('.orbit-slides-container')[0];
       album.forEach(function(photo){
      $(slideShow).append('<li style="z-index: 2; margin-left: 100%;"><img class="photo-slide" src="/assets/images/' +  photo + '"></li>');
    })

    if (typeof albumTitle != 'undefined') {
      $(slideShow).append('<li data-orbit-slide="headline-1" class="caption"><div><h2>'+ albumTitle +'</h2><h3>'+ albumCaption +'</h3></div></li>');
    }


    $('.orbit-container').append(slideShow);

    //start first slide
    $( ".orbit-next" ).trigger( "click" );

    //Click the photo you advance
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
  var selector, fitSelector;
  fitSelector = $.trim($(this).text());
  selector = "." + fitSelector.replace(" ", "-");
  selector = selector.toLowerCase();
  if ( selector === ".all"){ selector = ".art" };
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

