<template>
	<div class="panel panel-default">
	<div class="panel-heading">
		<h2 class="panel-title"><b>{{title}}</b></h2>
	</div>
	<div class="panel-body">
		<div class="row">
			<div class="col-sm-3 col-md-3 col-xl-3 col-lg-3"></div>
			<div class="col-sm-6 col-md-6 col-xl-6 col-lg-6">
				<div v-if = "req != null">
					
					<b>SĐT:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; </b><b><i>{{req.sdt}}</i></b><br/>
					<b>Địa chỉ: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>{{req.diaChi}} &nbsp;&nbsp;&nbsp;<br/>
					<b>Ghi chú:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</b>{{req.ghiChu}}<br/>
					<b>Thời gian đặt: &nbsp;&nbsp;&nbsp;</b>{{req.ngayGio}}<br/>
					<div class="containerbtt">
						<div class="row">
							<div class="col-sm-6 col-md-6 col-xl-6 col-lg-6">
								<button @click="huy" class="btn btn-block btn-danger">Hủy</button>
							</div>
							
							<div class="col-sm-3 col-md-3 col-xl-3 col-lg-3">
								<router-link :key = "keypoint" :to = "'/depart/' + keypoint" type="button" class="btn btn-block btn-primary">Nhận khách
								</router-link>
							</div>
						</div>
						
					</div>
					
					<!-- them key vao cho nay -->
					
					</div>
					<div v-else>
						không có yêu cầu
					</div>	
			</div>
			<div class="col-sm-3 col-md-3 col-xl-3 col-lg-3"></div>
		</div>
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
				title: "Khách gọi yêu cầu",
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
			huy(){
				var self = this;
				var xeruoc = self.req.xeRuoc + 'bihuy';
				alert(self.keypoint);

				var ref = db.ref('reqDatXe/' + self.keypoint);
				ref.update({xeRuoc: "", tinhTrang: 'chua dinh vi'});
				self.req = null;
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