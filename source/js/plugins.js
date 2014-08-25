// Avoid `console` errors in browsers that lack a console.
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


// Create Isotope Container for Artwork
window.onload = function() {
  $('#portfolio').isotope({
    itemSelector: '.art',
    layoutMode: 'fitRows',
  });
};

// Create filter for artwork via isotope.
var $container = $('#portfolio');
$container.isotope({});

$('a.portfolio-filters').click(function(){
  var selector = "." + this.text.replace(" ", "-");
  if ( selector === ".all" ){ selector = ".art" };
  $container.isotope({ filter: selector });
  return false;
});


