document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });


  $(document).ready(function() {
    var $window = $(window);
    var x = $("#mybutton11").position();
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


   // Client ID and API key from the Developer Console
   var CLIENT_ID = '753026082277';
   var API_KEY = 'AIzaSyB4DFV0t8fKD28hg0oxIqMrmAhiNnK_ZBE';

   // Array of API discovery doc URLs for APIs used by the quickstart
   var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

   // Authorization scopes required by the API; multiple scopes can be
   // included, separated by spaces.
   var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

   var authorizeButton = document.getElementById('authorize_button');
   var signoutButton = document.getElementById('signout_button');

   /**
    *  On load, called to load the auth2 library and API client library.
    */
   function handleClientLoad() {
     gapi.load('client:auth2', initClient);
   }

   /**
    *  Initializes the API client library and sets up sign-in state
    *  listeners.
    */
   function initClient() {
     gapi.client.init({
       apiKey: API_KEY,
       clientId: CLIENT_ID,
       discoveryDocs: DISCOVERY_DOCS,
       scope: SCOPES
     }).then(function () {
       // Listen for sign-in state changes.
       gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

       // Handle the initial sign-in state.
       updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
       authorizeButton.onclick = handleAuthClick;
       signoutButton.onclick = handleSignoutClick;
     }, function(error) {
       appendPre(JSON.stringify(error, null, 2));
     });
   }

   /**
    *  Called when the signed in status changes, to update the UI
    *  appropriately. After a sign-in, the API is called.
    */
   function updateSigninStatus(isSignedIn) {
     if (isSignedIn) {
       authorizeButton.style.display = 'none';
       signoutButton.style.display = 'block';
       listUpcomingEvents();
     } else {
       authorizeButton.style.display = 'block';
       signoutButton.style.display = 'none';
     }
   }

   /**
    *  Sign in the user upon button click.
    */
   function handleAuthClick(event) {
     gapi.auth2.getAuthInstance().signIn();
   }

   /**
    *  Sign out the user upon button click.
    */
   function handleSignoutClick(event) {
     gapi.auth2.getAuthInstance().signOut();
   }

   /**
    * Append a pre element to the body containing the given message
    * as its text node. Used to display the results of the API call.
    *
    * @param {string} message Text to be placed in pre element.
    */
   function appendPre(message) {
     var pre = document.getElementById('content');
     var textContent = document.createTextNode(message + '\n');
     pre.appendChild(textContent);
   }

   /**
    * Print the summary and start datetime/date of the next ten events in
    * the authorized user's calendar. If no events are found an
    * appropriate message is printed.
    */
   function listUpcomingEvents() {
     gapi.client.calendar.events.list({
       'calendarId': 'primary',
       'timeMin': (new Date()).toISOString(),
       'showDeleted': false,
       'singleEvents': true,
       'maxResults': 10,
       'orderBy': 'startTime'
     }).then(function(response) {
       var events = response.result.items;
       appendPre('Upcoming events:');

       if (events.length > 0) {
         for (i = 0; i < events.length; i++) {
           var event = events[i];
           var when = event.start.dateTime;
           if (!when) {
             when = event.start.date;
           }
           appendPre(event.summary + ' (' + when + ')')
         }
       } else {
         appendPre('No upcoming events found.');
       }
     });
   }


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
