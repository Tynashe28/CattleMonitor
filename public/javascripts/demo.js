/**
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function moveMapToBerlin(map){
  map.setCenter({lat:-17.8223249, lng:30.8948401});
  map.setZoom(14);
  

const polygon = H.map.Polygon(lineString);
}
var platform = new H.service.Platform({
  apikey: "q99Md4ZjnRBk99hbZIwP4zVMWuTXXALlfkuyEgSv6cg"
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:-17.8223249, lng:30.8948401},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1
});
var circle = new H.map.Circle({lat: -17.8223249, lng: 30.8948401}, 800);

// Add the circle to the map:
map.addObject(circle);

// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);



// Now use the map as required...
window.onload = function () {
  moveMapToBerlin(map);
}
