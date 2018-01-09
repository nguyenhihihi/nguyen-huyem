<template>
	<div>
		{{title}} lat{{lat}} lng{{lng}} key {{key}}
		<div id = "map2">
			
		</div>
		<button id = 'xacnhan' @click = "submit">Xác nhận</button>
	</div>
</template>
<script>
import {db} from '../firebase';
export default {

  name: 'Login',

  data () {
    return {
    	title: 'Định vị xe',
    	lat: "",
    	lng: "",
    	key: "",
    	daco: 0,
    	marker: null,
    }
  },

  mounted(){
  	//console.log('key cua tai xe');
  	console.log(localStorage.key);
  	this.luukey();
  	this.initMap();
  },
  
  methods: {
  		initMap() {
  		 	var self = this;
	        // Create a map object and specify the DOM element for display.
	  
	        var map = new google.maps.Map(document.getElementById('map2'), {
	          center: {lat: 10.762622, lng: 106.660172},
	          zoom: 10
	        });
	     //   google.maps.event.setMapOnAll(null);
	        google.maps.event.addListener(map, 'click', function(event) {
	        		//setMapOnAll(null);
	        		if (self.daco == 1)
	        		{
	        			// var ll =  new google.LatLng(event.latLng.lat(), event.latLng.lng());
	        			self.marker.setPosition(event.latLng);
	        			self.lat = event.latLng.lat();
					 self.lng = event.latLng.lng();
	        			return;
	        		}
	        		//rong.setMap(map);
					self.marker = new google.maps.Marker({position: event.latLng, map: map});
					 
					 console.log(event.latLng.lat() + event.latLng.lng());
					 self.lat = event.latLng.lat();
					 self.lng = event.latLng.lng();
					 self.daco = 1;

				});
	         function clearMarkers() {
		        setMapOnAll(null);
		      }

		       function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

	},

	submit(){
		var self = this;
		//update lat long 
		var ref = db.ref('driver/' + self.key);

		ref.update({lat: self.lat, lng:self.lng})
		//route toi page don khach
		this.$router.push('/request');
	},
	luukey()
	{
		var self = this;
		console.log(self.key);
		if (self.key == "")
		{
			self.key = localStorage.key;
		}
	}
    },
}
</script>

<style lang="css" scoped>
</style>
<style type="text/css">
		#map2{
			height: 500px;
			width: 100%;
		}
	</style>