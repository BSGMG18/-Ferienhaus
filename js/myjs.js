/* var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-64px";
  }
  prevScrollpos = currentScrollPos;
} */

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

/* document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  }); */

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });

/* 
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
 */

$(document).ready(function(){
  $( "#kalenderText" ).css( "display", "inline" )
  $( window ).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('#kalenderText').fadeOut();
    }
    else if($(this).scrollTop() <= 5) {
      $('#kalenderText').fadeIn();
    }
  });
});

var prevScrollpos = window.pageYOffset;
function myfunction(x){
  if (x.matches) {
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-60px";
      }
      prevScrollpos = currentScrollPos;
    } 
  }
}

var x = window.matchMedia("(min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

/*   // Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 25.344, lng: 131.036};
  // Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 52.449370, lng: 12.537640};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
}
 */
