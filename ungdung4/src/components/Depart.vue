<template>

<div class="panel panel-default">
	<div class="panel-heading">
		<h2 class="panel-title"><b>{{title}}</b><div style="text-align: right;">
			<router-link :to = "'/thongtin'" type="button" class="btn btn-default"> <span class="glyphicon glyphicon-user"></span>
								</router-link>
		</div></h2>
	</div>
	<div class="panel-body">
		<div class="row">
			<div class="col-sm-3 col-md-3 col-xl-3 col-lg-3"></div>
			<div class="col-sm-6 col-md-6 col-xl-6 col-lg-6">
				<div id = "mapdichuyen"></div>
				<div>
					<button id = 'btnBatDau' style="display: block;" @click = 
						"batdau" type="button" class="btn btn-block btn-primary">Bắt đầu</button>
					<div id='router' style="display: none;" >
					<router-link :key = "key" :to = "'/finish/' + key" type="button" class="btn btn-block btn-warning">
						Hoàn tất
					</router-link>
				</div>
				</div>
			</div>
			<div class="col-sm-3 col-md-3 col-xl-3 col-lg-3"></div>
		</div>
	</div>
</div>

</template>

<script>
	//1
	import {db} from '../firebase';
	export default {
		name: 'depart',
		data(){
			return{
				title: "Bản đồ hành trình",
				taixe: null,
				req: null,
				key: "",
				keytaixe: "",
			}
		},

		mounted(){
			var key = this.$route.params.xe;
			console.log(key);
			this.luuid(key);

			this.layDiem();


		},

		methods: {
		luuid(key)
		{
			var self = this;
			self.key = key;
		},

		layDiem()
		{

			var self = this;
			var ref = db.ref('reqDatXe/' + self.key);
			var xeRuoc =  localStorage.key;
			console.log('xe ruoc '+ xeRuoc);
			self.keytaixe = xeRuoc;
			ref.update({tinhTrang: 'da co xe nhan',xeRuoc: xeRuoc});

			var ref2 = db.ref('driver/' + xeRuoc)
			ref2.update({state: 1});
			ref.on('value', function(snapshot){
				self.req = snapshot.val();
				console.log(self.req);
				var ref2 = db.ref('driver/' + xeRuoc);
			ref2.on('value', function(snapshot){
				self.taixe = snapshot.val();
				console.log(self.taixe);

				self.initMap(self.taixe.lat, self.taixe.lng, self.req.lat, self.req.long);
			});
			});
		},

		batdau(){
			var self= this;
			var ref = db.ref('reqDatXe/'+self.key);

			ref.update({tinhTrang: 'dang di chuyen'});

		var ref = db.ref('reqDatXe')
		$('#btnBatDau').css('display', 'none');
		$('#router').css('display', 'block');
		},
		initMap(posXeLat, posXeLong, posKhachLat, posKhachLong) {
          var posXe = {lat: posXeLat , lng: posXeLong};
          var posKhach = {lat: posKhachLat, lng: posKhachLong};
           if (typeof posXe.lat === 'undefined'|| typeof posXe.lng === 'undefined' || typeof posKhach.lat === 'undefined' || typeof posKhach.lng === 'undefined')
           {   
            var loi = "</i></b><h4>Đang tải dữ liệu...</h4></b></i>";
            $('#mapdichuyen').empty();
            $('#mapdichuyen').append(loi);

            return;
           }

        var map = new google.maps.Map(document.getElementById('mapdichuyen'), {
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

          google.maps.event.addListener(map, 'click', function(event) {
          	var ref = db.ref('driver/' + self.keytaixe);
          	ref.update({lat: event.latLng.lat(), lng:  event.latLng.lng()});

				});
      },

			//lay tai xe va request cho vao 2 cái data

			//xu ly nhan nut bat dau, ghi firebase: tinh trang req dang chay hay gì đó xem lại cho đúng, state của drive là đang bận, chuyển chữ và css trong nút bắt đầu thành kết thúc và màu khác
			//vì sài router nên có thể dùng display block none để tương tác
		}

	}
</script>
  <style type="text/css">
     #mapdichuyen {
        height: 700px;
        width: 100%;
       }
       h1{
          text-align:  center;
       }
  </style>