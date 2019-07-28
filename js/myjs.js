document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  
$(document).ready(function(){
  $('.carousel').carousel();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});
      

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
});


$(document).ready(function() {
  var $window = $(window);
  var x = $("#emailBackground").position();
  var mybutton1_bottom = x.top;
  console.log("MyButtonPosition " + mybutton1_bottom);
  $window.on('scroll', function() {
    var scrollTop = $window.scrollTop();
    var viewport_height = $(window).height();
    var scrollTop_bottom = scrollTop + viewport_height;
    console.log("ScrollTopBottom " + scrollTop_bottom);
    if (scrollTop_bottom > mybutton1_bottom) {
      $( "#mybutton1" ).fadeOut( 300 );
      $( "#mybutton2" ).fadeOut( 300 );
      $( "#mybutton3" ).fadeOut( 300 );
    }
    if (scrollTop_bottom < mybutton1_bottom) {
      $( "#mybutton1" ).fadeIn( 300 );
      $( "#mybutton2" ).fadeIn( 300 );
      $( "#mybutton3" ).fadeIn( 300 );
    }
  });
});


// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
