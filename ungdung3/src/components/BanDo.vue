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
	},
	mounted (){

		var key = this.$route.params.key;
		this.luuid(key);
		//this.dieuChinhDuLieu();
		this.timKhach();
		//this.timXe();

		
	},
	// watch: {
	//   	'$route' (to, from) {
	// 	  	var key = this.$route.params.key;
	// 		this.luuid(key);
	// 		this.timKhach();
	// 		this.timXe();
	//   	}
	// },


	methods: {
	dieuChinhDuLieu()
		{
			// var self = this;

			// if (self.dsDaCoXeNhan.length == 0)
			// {
			// 	self.dsDaCoXeNhan = self.dsDaCoXeNhan[0];	
			// } 

			// if (self.driver.length == 0)
			// {
			// 	self.driver = self.driver[0];	
			// } 
		},
		timKhach()
		{

			var self = this;
			
			var i = 0;
			var n = self.dsDaCoXeNhan.length;
			console.log(self.dsDaCoXeNhan);
			console.log(Object.values(self.dsDaCoXeNhan));
			//console.log(self.dsDaCoXeNhan["Observer"]);
			console.log("so luong diem: ");
			console.log(n);
			console.log( JSON.parse(JSON.stringify(self.dsDaCoXeNhan)));

			for(i; i < n; i++)
			{
				if(self.dsDaCoXeNhan[i]['.key'] == self.key)
				{
					console.log('tim thay khach' +i);
					self.khach = self.dsDaCoXeNhan[i];
					console.log("tim duoc khach");
					console.log(self.khach);
					break;
				}
			}
			console.log('khong tim thay');
		},
		timXe()
		{
			var self = this;
			var i = 0;
			var sl = self.driver.length;
			console.log(self.driver);
			console.log(sl);
			console.log(self.driver[0]);
			console.log(self.driver.length);
			//console.log(self.khach.xeRuoc);
			return;

			// for(i; i < sl; i++)
			// {
			// 	if(self.driver[i]['.key'] == self.khach.xeRuoc)
			// 	{
			// 		console.log('tim thay xe' +i);

			// 		self.xe = self.driver[i];
			// 		console.log("tim duoc xe");
			// 		console.log(self.xe);
			// 		break;
			// 	}
			// }
			console.log('khong tim thay xe');
		},

		luuid(key)
		{
			var self = this;
			self.key = key;
		},

		// initMap(posXeLat, posXeLong, posKhachLat, posKhachLong) {
		//           var posXe = {lat: posXeLat , lng: posXeLong};
		//           var posKhach = {lat: posKhachLat, lng: posKhachLong};
		//            if (typeof posXe.lat === 'undefined'|| typeof posXe.lng === 'undefined' || typeof posKhach.lat === 'undefined' || typeof posKhach.lng === 'undefined')
		//            {   
		//             var loi = "</i></b><h4>Đang tải dữ liệu...</h4></b></i>";
		//             $('#map').empty();
		//             $('#map').append(loi);

		//             return;
		//            }

		//         var map = new google.maps.Map(document.getElementById('map'), {
		//           zoom: 7,
		//           center: posXe
		//         });
		//          var directionDisplay = new google.maps.DirectionsRenderer({
		//           map:map
		//          });

		//          var request = {
		//           destination: posXe,
		//           origin: posKhach,
		//           travelMode:'DRIVING'
		//          };

		//          var directionService = new google.maps.DirectionsService();

		//         directionService.route(request, function(response, status){
		//           if (status == 'OK'){
		//             directionDisplay.setDirections(response);
		//           }
		//         });
		//       },
	}
}	
</script>