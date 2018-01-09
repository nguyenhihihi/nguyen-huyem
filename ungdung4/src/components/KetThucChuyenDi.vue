<template>
	<div>
		hiển thị thông tin chuyến đi, xong update ma req là đã hoàn thành và trạng thái xe thành đang rảnh, route qua request

		{{key}}
	</div>
</template>
<script>
	import {db} from '../firebase';
	export default{
		name: 'finish',
		data()
		{
			return {
				key: "",
			}
		},
		mounted(){
			var key = this.$route.params.xe;
			this.luuid(key);
			this.xuli();
		},
		methods: {
			luuid(key){
				var self = this;
				self.key = key;
			},
			xuli()
			{	
				var self = this;
			
				var ref = db.ref('reqDatXe/' + self.key);

				ref.update({tinhTrang: 'da hoan thanh'});

				var keyXe;
				ref.on('value', function(snapshot) {
					keyXe =snapshot.val().xeRuoc;
					
					var ref2 = db.ref('driver/' + keyXe );
					ref2.update({state: 0});
				});	

			}
		}
	}
</script>