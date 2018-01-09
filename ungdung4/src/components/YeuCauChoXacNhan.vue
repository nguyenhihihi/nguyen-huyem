<template>
	<div>
		<div v-if = "req != null">
		{{key}}
		{{req}}
		{{keypoint}}
		<button @click = "dismiss">Hủy</button>
		<!-- them key vao cho nay -->
		<router-link :key = "keypoint" :to = "'/depart/' + keypoint" type="button" class="btn btn-block btn-primary">Nhận xe
		</router-link>
		</div>
		<div v-else>
			không có yêu cầu
		</div>		
	</div>
</template>

<script>
	import {req} from '../firebase';
	import {db} from '../firebase';

	export default {
		name: 'request',
		data(){
			return {
				key: "",
				req: null,
				keypoint: "",
			}
		},

		mounted(){
			console.log('day la key');
			console.log(localStorage.key);
			this.luuid();
			this.LayData();
		},

		methods: {
			dismiss(){
				var self = this;
				var xeruoc = self.req.xeRuoc + 'bihuy';

				var ref = db.ref('reqDatXe/' + self.keypoint);
				ref.update({xeRuoc: xeruoc, tinhTrang: 'chua dinh vi'});
			},
			LayData(key){
				var self = this;
				console.log('self key')
				console.log(self.key);
				var ref = req; //.orderByChild('xeRuoc').equalTo(self.key);
				

				ref.on('value', function(snapshot){
					console.log(snapshot.val());
					if (snapshot.val() != null)
					{
						console.log(snapshot.val());
						Object.keys(snapshot.val()).forEach(function(key){
							if (snapshot.val()[key].tinhTrang == 'da dinh vi' && snapshot.val()[key].xeRuoc == self.key)
							{
								self.req = snapshot.val()[key];
								self.keypoint = key;
							}
						});
					}
					else
					{
						console.log('rong te toat');
					}

				});

			},

			luuid()
			{
				var self = this;
				self.key = localStorage.key;
			},
			}
		}
</script>