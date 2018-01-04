<template>
	<div>
			<h2>DANH SÁCH YÊU CẦU ĐÃ ĐỊNH VỊ</h2>
		<table id='tabKetQua' class='table table-hover'>
			<thead>
				<tr> 
	            	<th>SĐT</th>
	            	<th>Địa chỉ</th>
	            	<th>Ghi chú</th>
         	 	</tr>
         	 </thead>
         	 <tbody> 
         	 	<tr v-for="req in dsDaDinhVi">
         	 		<td> {{req.sdt}}</td>
         	 		<td>{{req.diaChi}}</td>
         	 		<td>{{req.ghiChu}}</td>
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
		}
     }
</script>