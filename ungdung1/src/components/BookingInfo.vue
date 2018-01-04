<template>
<div>
			<h1>THÔNG TIN ĐẶT XE</h1>
			<div id="DatXe" class="container">
				<div class="row">
					<div class="col-md-2 col-lg-2 col-sm-2 col-xs-2">
						<label for="txtSDT">Số điện thoại</label>
					</div>
					<div class="col-md-10 col-lg-10 col-sm-10 col-xs-10">
						<input type="text" name="" id="txtSDT" v-model="SDT"><br>
					</div>
				</div>
				<br>
				<div class="row">
					<div class="col-md-2 col-lg-2 col-sm-2 col-xs-2">
						<label for="txtDiaChi">Địa chỉ</label>
					</div>
					<div class="ccol-md-10 col-lg-10 col-sm-10 col-xs-10">
						<input type="text" name="" id="txtDiaChi" v-model="DiaChi">
					</div>
				</div>
				<br>
				<div class="row">
					<div class="col-md-2 col-lg-2 col-sm-2 col-xs-2">
						<label for="txtChiChu">Loại xe</label>
					</div>
					<div class="col-md-10 col-lg-10 col-sm-10 col-xs-10">
						<form id='fLoaiXe'>
							<input type="radio" name="radioLoaiXe" value ="Xe thường" checked="true"> Xe thường &nbsp; &nbsp; &nbsp; &nbsp;
							<input type="radio" name="radioLoaiXe" value ="Xe Premium" > Xe Premium 
						</form>
					</div>
				</div>
				<br>
				<div class="row">
					<div class="col-md-2 col-lg-2 col-sm-2 col-xs-2">
						<label for="txtChiChu">Ghi chú</label>
					</div>
					<div class="col-md-10 col-lg-10 col-sm-10 col-xs-10">
						<input type="" name="" id="txtGhiChu" v-model="GhiChu"><br>
					</div>
				</div>
				<br/>
					<div class="row">
					<div class="col-md-2 col-lg-2 col-sm-2 col-xs-2">
						
					</div>
					<div class="col-md-10 col-lg-10 col-sm-10 col-xs-10">
						<button id="btnDatXe" type="button" class="btn btn-primary" @click = "submitBooking()">Đặt xe</button>
				<button id="btnRandom" type="button" class="btn btn-primary" style="display: none;">Huyền vi diệu</button>
					</div>
				</div>
				
			</div>
		</div>
</template>
<script>
	import {req} from '../firebase'; 
	export default {
		name: 'BookingInfo',
		
		data(){
			return {
					DiaChi: "",
					GhiChu: "",
					lat: "",
					loaiXe: "",
					long: "",
					ngayGio: "",
					SDT: "",
					tinhTrang: "",
					xeRuoc: ""
			}
		},

		methods: {
					submitBooking()
					{
						req.push({
							diaChi: this.DiaChi,
							ghiChu: this.GhiChu,
							lat: "",
							loaiXe: $('input[name=radioLoaiXe]:checked', '#fLoaiXe').val(),
							long: "",
							ngayGio: new Date().toLocaleString(),
							sdt: this.SDT,
							tinhTrang: "chua dinh vi",
							xeRuoc: ""
						})
					}
		},

	}
</script>