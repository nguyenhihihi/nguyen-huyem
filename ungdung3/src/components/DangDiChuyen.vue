<template>
<div class="col-md-10 col-lg-10 col-xs-10 col-sm-10 col-lg-10">
		<h2>DANH SÁCH YÊU CẦU ĐANG DI CHUYỂN</h2>
		<table id='tabKetQua' class='table table-hover table2'>
			<thead>
				<tr> 
	            	<td>SĐT</td>
	            	<td>Địa chỉ</td>
	            	<td>Ghi chú</td>
	            	<td>Thời gian</td>
         	 	</tr>
         	 </thead>
         	 <tbody v-if="dsDangDiChuyen.length > 0"> 
         	 	<tr v-for="req in dsDangDiChuyen">
         	 		<td> {{req.sdt}}</td>
         	 		<td>{{req.diaChi}}</td>
         	 		<td>{{req.ghiChu}}</td>
         	 		<td>{{req.ngayGio}}</td>
         	 	</tr>
         	 </tbody>
         	 <tbody v-else>
				<tr>
					Không có điểm nào.
				</tr>
			</tbody>
         </table> 
	</div>
</template>

<script>
	import {DsDangDiChuyen} from '../firebase'; 
	export default {
		name: 'ChuaDinhvi',
		firebase: {
			dsDangDiChuyen: DsDangDiChuyen
		},
		 mounted()
        {
            var self = this;
            self.dsDangDiChuyen = self.dsDangDiChuyen.reverse(); 

        }
	}
</script>

