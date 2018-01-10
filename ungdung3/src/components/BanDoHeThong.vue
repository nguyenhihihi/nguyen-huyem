<template>
	<div>
		
		<h1>Đây là bản đồ: {{title}}</h1>
		<button class="btn btn-primary" style="text-align: center;" @click="initMap">Hiển thị bản đồ</button>
		<div id = "mapht">
		
		</div>

	</div>
</template>

<script>
	import {db} from '../firebase'; 
export default{
	name: "BanDo",
	data(){
		return{
			title: "Bản đồ hệ thống", 
			ds: [],
		}
	},
	mounted (){

		
		this.XuLyData();

		
	},

	methods: {
		XuLyData(){	
			var self = this;
			var ref = db.ref('driver/');

			ref.on('value', function(snapshot){
				snapshot.forEach(function(childSnapshot){
					if (childSnapshot.val().state == 1 || childSnapshot.val().state == 0)
					{
						self.ds.push(childSnapshot.val());
					}
				});
					console.log(self.ds);
				});
			},

			initMap() {
  		 	var self = this;
	        // Create a map object and specify the DOM element for display.
	  
	        var map = new google.maps.Map(document.getElementById('mapht'), {
	          center: {lat: 10.762622, lng: 106.660172},
	          zoom: 12
	        });
	     //   google.maps.event.setMapOnAll(null);
	     var sl = self.ds.length;
	     var kk = self.ds;
	     //console.log(kk);
	     //this.initMap();
	     var i = 0;

	     for(i; i < sl; i++)
	     {
	     	var pos = new google.maps.LatLng(kk[i].lat, kk[i].lng);
	     	// var position = {kk[i].lat, kk[i].lng};
	     	 var marker = new google.maps.Marker({position: pos, map: map});
		}
        }
      },


	
}	
</script>
  <style type="text/css">
     #mapht {
        height: 700px;
        width: 100%;
       }
       h1{
          text-align:  center;
       }
  </style>