

    var map;
    var locations = [
     ['Nightcliff', -12.384935, 130.849105, 4,'Nightcliff Donation Centre'],
     ['Casuarina ', -12.376717, 130.878238, 3,'Casuarina Donation Centre'],
     ['Darwin ', -12.426167, 130.840380, 2, 'Darwin Donation Centre'],
     ['Coconut Grove', -12.396830, 130.854272, 1, 'Coconut Grove Donation Centre'],

   ];
     var place = locations[i];
      var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(-12.396830, 130.854272),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };
      map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

    var infowindow = new google.maps.InfoWindow();

      var marker, i;
      var theDiv = document.getElementById("location");

      for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map,
          name: locations[i][4],
          title:locations[i][0],
          label: {
     text: locations[i][0],
     color: '#000000',
     fontSize: '12px',
     fontWeight: "bold"

   }});

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }

        })(marker, i));
        google.maps.event.addListener(marker, 'click', function() {
          theDiv.innerHTML += this.name; ;});
        google.maps.event.addListener(marker, 'click', function() {
            document.getElementById('map-canvas').style.display = "none" ;});
      }
      $(document).ready(function(){
      $('#submitrequest').click(function(){
            alert("Your Pickup Request has been submitted");
         })});
      $(document).ready(function(){
        $("#locationpicker").click(function(){
        $("#locationpicker").hide();
           })});
         function hideChoosefile(){
           var choosefile = document.getElementById('locationpicker');
           choosefile.addEventListener('click', showMap, false);
         }
         function showMap(){
            document.getElementById('map-canvas').style.display = "block";
         }
         window.addEventListener('load', hideChoosefile, false)
