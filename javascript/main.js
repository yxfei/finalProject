function initMap() {
  var myLatLng;


  navigator.geolocation.getCurrentPosition(function(position) {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 14
    });
    var infoWindow = new google.maps.InfoWindow({map: map});  

    var coor = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
      currentLocation = new google.maps.LatLng(
        coor.lat,
        coor.lng);
      map.setCenter(currentLocation);
      
      infoWindow.setPosition(currentLocation);
      infoWindow.setContent('You are here');
      
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: coor,
        radius: 500,
        types: ['atm']
      }, callback);

    
//      initMap1(coor,map,infoWindow);
    }, function() {
      browserSupportFlag = false;
      handleNoGeolocation(browserSupportFlag);
    }); 
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

//initMap();


function initMap1(pyrmont) {
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 14
  });

  infoWindow = new google.maps.InfoWindow({map: map});

  console.log('===========',pyrmont.lng);
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 500,
    types: ['atm']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
