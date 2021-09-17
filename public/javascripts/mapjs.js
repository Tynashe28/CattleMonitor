// Initialize and add the map
function initMap() {
    
  const cattle = { lat: -17.8223249, lng:30.8948401 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: cattle,
  });
  const marker = new google.maps.Marker({
    position: cattle,
    map: map,
  });
}
