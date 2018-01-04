<template>
	<div id = "chiTietSDT">
		<h1>LỊCH SỬ</h1>
		<table id='tabDetail' class='table table-hover'>
			<thead>
					<tr>  
						<th>Thời gian</th>
						<th>Địa chỉ</th>
						<th>Ghi chú</th>
					</tr>	
			</thead>

			<tbody>
				<tr v-for="c in dsDaCoXeNhan">
         	 		<td> {{req.ngayGio}}</td>
         	 		<td>{{req.diaChi}}</td>
         	 		<td>{{req.ghiChu}}</td>
         	 	</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	import {history} from '../firebase';

	export default {
		name: 'BookingHistory',

		firebase: {
			dsLichSu: history
		}
	}
</script>