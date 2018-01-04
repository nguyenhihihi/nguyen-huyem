<template>
<div>
	<h2>DANH SÁCH YÊU CẦU ĐÃ CÓ XE NHẬN</h2>
		<table id='tabKetQua' class='table table-hover'>
			<thead>
				<tr> 
	            	<th>SĐT</th>
	            	<th>Địa chỉ</th>
	            	<th>Ghi chú</th>
         	 	</tr>
         	 </thead>
         	 <tbody> 
         	 	<tr v-for="req in dsDaCoXeNhan">
         	 		<td> {{req.sdt}}</td>
         	 		<td>{{req.diaChi}}</td>
         	 		<td>{{req.ghiChu}}</td>
         	 		<td>
         	 			<a href="'/chitiet?key=' + req.key" class='btn btn-xs btn-info'>
                   		 <span class='glyphicon glyphicon-globe'></span> 
                   		</a> 
                	</td>
         	 	</tr>
         	 </tbody>
         </table> 

	</div>
</template>

<script>
import {DsDaCoXeNhan} from '../firebase'; 
	export default {
		name: 'ChuaDinhvi',
		firebase: {
			dsDaCoXeNhan: DsDaCoXeNhan
		}
	}
</script>