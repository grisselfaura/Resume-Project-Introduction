function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261, 
            lng: -33.134766
        }
     });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Create an array of alphabetical characters used to label the markers.

    var locations = [
        {lat: 40.785091, lng: -73.968285}, 
        {lat: 41.084045, lng: -73.874256}, 
        {lat: 40.754932, lng: -73.984016}
    ];

    var markers = locations.map(function(location, i) { //this map method here is a built-in JavaScript method.
        return new google.maps.Marker({
                        position: location,
                        label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
