<template>
	<div id = "chiTietSDT">
		<h1 >LỊCH SỬ CỦA SĐT: <b v-if="list.length > 0">{{list[0].sdt}}</b></h1>
		<table id='tabDetail' class='table table-hover'>
			<thead>
					<tr>  
						<th>Thời gian</th>
						<th>Địa chỉ</th>
						<th>Ghi chú</th>
					</tr>	
			</thead>

			<tbody v-if="list.length > 0">
	         	 	<tr v-for = "c in list">
	         	 		<td> {{c.ngayGio}}</td>
	         	 		<td>{{c.diaChi}}</td>
	         	 		<td>{{c.ghiChu}}</td>
	         	 	</tr>
			</tbody>
			
		<tbody v-else>
			<tr>
			Không có lịch sử.
			</tr>
		</tbody>
		</table>
	</div>
</template>
<script>
	export default {
		name: 'BookingHistory',
		props: ['list']
  	}
</script>