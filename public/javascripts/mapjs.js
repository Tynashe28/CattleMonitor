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
  const drawingManager = new google.maps.drawing.DrawingManager({
    
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.POLYGON,
      ],
    },
    
    circleOptions: {
      fillColor: "#ffff00",
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1,
    },
  });

  drawingManager.setMap(map);
}
