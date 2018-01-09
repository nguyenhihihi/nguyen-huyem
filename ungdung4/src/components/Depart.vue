<template>
	<div>
		{{req}}
		<button id = 'btnBatDau' style="display: block;" @click = 
		"batdau">Bat dau</button>
		<div id='router' style="display: none;">
		<router-link :key = "key" :to = "'/finish/' + key" type="button" class="btn btn-block btn-primary">
			Hoàn tất
		</router-link>
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
		}

			//lay tai xe va request cho vao 2 cái data

			//xu ly nhan nut bat dau, ghi firebase: tinh trang req dang chay hay gì đó xem lại cho đúng, state của drive là đang bận, chuyển chữ và css trong nút bắt đầu thành kết thúc và màu khác
			//vì sài router nên có thể dùng display block none để tương tác
		}

	}
</script>
