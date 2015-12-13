// function myLocation( e ) {
//   e.preventDefault();

//   var myLat = document.getElementsByClassName("newLat")[0].value;
//   var myLng = document.getElementsByClassName("newLng")[0].value;
//   // map = new google.maps.Map(document.getElementById('map'), {
//   //   center: {lat: myLat, lng: myLng},
//   //   zoom: 8
//   // });
//   console.log( myLat, myLng )
//   map.setCenter({lat: parseFloat(myLat,10), lng: parseFloat(myLng, 10)}); 

// }

// document.querySelector('button').addEventListener( 'click', myLocation);

//   var map;
//   function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 40.7, lng: -74},
//     zoom: 8
//     });
    
//   //   var marker = new google.maps.Marker({
//   //   map: map,
//   //   position: myLatLng,
//   //   title: 'Hello World!'
//   // });
//   }

// function myCurrentLocation (event) {
//   $.ajax({
//     type: "POST",
//     url: url,

//   })

// }

//   browserSupportFlag = true;
//   navigator.geolocation.getCurrentPosition(function(position) {
//   initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
//       map.setCenter(initialLocation);
//       console.log("1: ", initialLocation);
//     }, function() {
//       handleNoGeolocation(browserSupportFlag);
//   console.log("2: ", initialLocation);    
//   });

// //  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnLdrjJcSRfUCNhbVz0mlCEKMTeZoZGFE&callback=initMap"
//   //      async defer></script>
//     
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      console.log(pos.lat,pos.lng);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

initMap();