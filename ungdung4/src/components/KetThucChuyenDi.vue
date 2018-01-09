<template>
	<div class="panel panel-default">
	<div class="panel-heading">
		<h2 class="panel-title"><b>{{title}}</b></h2>
	</div>
	<div class="panel-body">
		<div class="row">
			<div class="col-sm-3 col-md-3 col-xl-3 col-lg-3"></div>
			<div class="col-sm-6 col-md-6 col-xl-6 col-lg-6">
				<!-- {{req}} -->
				<b>SĐT:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; </b><b><i>{{req.sdt}}</i></b><br/>
					<b>Địa chỉ: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>{{req.diaChi}} &nbsp;&nbsp;&nbsp;<br/>
					<b>Ghi chú:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</b>{{req.ghiChu}}<br/>
					<b>Thời gian đặt: &nbsp;&nbsp;&nbsp;</b>{{req.ngayGio}}<br/>
				<br />
				<div>
				<button @click="quayverequest" type="button" class="btn btn-block btn-primary">
					<h4><span class="glyphicon glyphicon-home"></span> Xong</h4>
				</button>
			</div>
				
			</div>
			<div class="col-sm-3 col-md-3 col-xl-3 col-lg-3"></div>
		</div>
	</div>
</div>
	<!-- <div>
		hiển thị thông tin chuyến đi, xong update ma req là đã hoàn thành và trạng thái xe thành đang rảnh, route qua request

		{{key}}

	</div> -->
</template>
<script>
	import {db} from '../firebase';
	export default{
		name: 'finish',
		data()
		{
			return {
				title: "Kết thúc",
				key: "",
				req: null,
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
					keyXe = snapshot.val().xeRuoc;
					self.req = snapshot.val();
					var ref2 = db.ref('driver/' + keyXe );
					ref2.update({state: 0});
				});	

			},

			quayverequest(){
				 this.$router.push('/request');
			}
		}
	}
</script>