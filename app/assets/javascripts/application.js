// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require_self

 function initMap(a, b) {

 		a = parseInt(a);
		b = parseInt(b);

		if(isNaN(a) || isNaN(b)){
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: {lat: 51.508742, lng: -0.120850}
        });

        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 51.508742, lng: -0.120850},
          map: map,
          icon: image
        });
   	} else {
   	var new_center = { lat: a, 
                   	   lng: b };
    console.log(new_center);

    var new_position = { lat: a, 
                   		 lng: b };
    console.log(new_position);

	var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: new_center
        });

        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var beachMarker = new google.maps.Marker({
          position: new_position,
          map: map,
          icon: image
        });
   	}
}
/* 
Je passe par une methode Get pour changer, 
cette fonction fait l'equivalent de ce qui ce passe en php avec $_GET 
*/
	function $_GET(param) {
		var vars = {};
		window.location.href.replace( location.hash, '' ).replace( 
			/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
			function( m, key, value ) { // callback
				vars[key] = value !== undefined ? value : '';
			}
		);

		if (param) {
			return vars[param] ? vars[param] : null;	
		}
		return vars;
	}

	var d_lat = decodeURI( $_GET('latitude'));
	var d_long = decodeURI( $_GET('longitude'));

	d_lat = parseInt(d_lat);
	d_long = parseInt(d_long);

	if (d_lat >=90 || d_lat <= -90 || d_long >=180 || d_long <= -180 )
		{ alert('latitude entre 90 et - 90 longitude entre 180 et -180 !')}

	if (!isNaN(d_lat) || !isNaN(d_long)){

		function initMap() {

 		a = parseInt(d_lat);
		b = parseInt(d_long);

		if(isNaN(a) || isNaN(b)){
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: {lat: 51.508742, lng: -0.120850}
        });

        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 51.508742, lng: -0.120850},
          map: map,
          icon: image
        });
   	} else {
   	var new_center = { lat: a, 
                   	   lng: b };
    console.log(new_center);

    var new_position = { lat: a, 
                   		 lng: b };
    console.log(new_position);

	var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: new_center
        });

        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var beachMarker = new google.maps.Marker({
          position: new_position,
          map: map,
          icon: image
        });
   	}
}
	}


