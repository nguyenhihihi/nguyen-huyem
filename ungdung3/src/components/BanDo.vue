<template>
	<div>
		<h1>Đây là bản đồ: {{key}}</h1>
		<div id = "map">
			<!-- XE: {{xe}}<br/> -->
			<!-- Khach: {{khach}}<br/> -->
		</div>

	</div>
</template>

<script>

	import {DsDaCoXeNhan} from '../firebase'; 
	import {Driver} from '../firebase'; 
	import {req} from '../firebase'; 
	import {db} from '../firebase'; 
export default{
	name: "BanDo",
	data(){
		return{
			key: "",
			xe: null,
			khach: null,
		}
	},
	firebase:
	{
		dsDaCoXeNhan: DsDaCoXeNhan,
		driver: Driver,
		r: req,
	},
	mounted (){

		var key = this.$route.params.key;
		this.luuid(key);
		//this.dieuChinhDuLieu();
		//this.timKhach();
		//this.timXe();
		this.XuLyData();

		
	},

	methods: {
		XuLyData(){	
			var datxe;
			var taixe;

			var self = this;
			var kq = db.ref('reqDatXe/'+ self.key);
			var keyXeRuoc;
			kq.on('value', function(snapshot){
				datxe = snapshot.val();
				 keyXeRuoc = snapshot.val().xeRuoc;
				 var kq2 = db.ref('driver/'+ keyXeRuoc);
				kq2.on('value', function(snapshot2){
				taixe = snapshot2.val();
				console.log(datxe);
				console.log(taixe);
				self.initMap(taixe.lat, taixe.lng, datxe.lat, datxe.long)

				//init map

			});
			});
		},
		initMap(posXeLat, posXeLong, posKhachLat, posKhachLong) {
          var posXe = {lat: posXeLat , lng: posXeLong};
          var posKhach = {lat: posKhachLat, lng: posKhachLong};
           if (typeof posXe.lat === 'undefined'|| typeof posXe.lng === 'undefined' || typeof posKhach.lat === 'undefined' || typeof posKhach.lng === 'undefined')
           {   
            var loi = "</i></b><h4>Đang tải dữ liệu...</h4></b></i>";
            $('#map').empty();
            $('#map').append(loi);

            return;
           }

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: posXe
        });
         var directionDisplay = new google.maps.DirectionsRenderer({
          map:map
         });

         var request = {
          destination: posXe,
          origin: posKhach,
          travelMode:'DRIVING'
         };

         var directionService = new google.maps.DirectionsService();

        directionService.route(request, function(response, status){
          if (status == 'OK'){
            directionDisplay.setDirections(response);
          }
        });
      },
		luuid(key)
		{
			var self = this;
			self.key = key;
		},
	}
}	
</script>
  <style type="text/css">
     #map {
        height: 550px;
        width: 100%;
       }
       h1{
          text-align:  center;
       }
  </style>