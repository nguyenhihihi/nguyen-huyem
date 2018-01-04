<template>
<div>
		<h2>DANH SÁCH YÊU CẦU CHƯA ĐỊNH VỊ</h2>
		<table id='tabKetQua' class='table table-hover'>
			<thead>
				<tr> 
	            	<th>SĐT</th>
	            	<th>Địa chỉ</th>
	            	<th>Ghi chú</th>
         	 	</tr>
         	 </thead>
         	 <tbody> 
         	 	<tr v-for="req in dsChuaDinhVi">
         	 		<td> {{req.sdt}}</td>
         	 		<td>{{req.diaChi}}</td>
         	 		<td>{{req.ghiChu}}</td>
         	 		<td>{{req}}</td>
         	 	</tr>
         	 </tbody>
         </table> 

	</div>
</template>

<script>
	import {DsChuaDinhVi} from '../firebase'; 
	export default {
		name: 'ChuaDinhvi',
		firebase: {
			dsChuaDinhVi: DsChuaDinhVi
		}
	}
</script>