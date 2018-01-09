<template>
	<div class="col-md-10 col-lg-10 col-xs-10 col-sm-10 col-lg-10">
			<h2>DANH SÁCH YÊU CẦU ĐÃ ĐỊNH VỊ</h2>
		<table id='tabKetQua2' class='table table-hover table3'>
			<thead>
				<tr> 
	            	<th>SĐT</th>
	            	<th>Địa chỉ</th>
	            	<th>Ghi chú</th>
	            	<th>Thời gian</th>
         	 	</tr>
         	 </thead>
         	 <tbody v-if = "dsDaDinhVi.length > 0"> 
         	 	<tr v-for="req in dsDaDinhVi">
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
	import {DsDaDinhVi} from '../firebase'; 
	
	export default {
		name: 'DaChuaDinhvi',
		firebase: {
			dsDaDinhVi: DsDaDinhVi
		},
		 mounted()
        {
            var self = this;
          	self.dsDaDinhVi = self.dsDaDinhVi.reverse(); 

        }
     }
</script>

	
	
<style>
	#tabKetQua2 {
        display: block;
        overflow-y: scroll;
        overflow-x: scroll;
        white-space: nowrap;
        height: 50px;
    }
</style>
