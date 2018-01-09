<template>
	<div class =row>
		<div class="col-md-12 col-lg-12 col-xs-12 col-sm-10 col-lg-12">
			<h2 style="text-align: left;"> HỆ THỐNG BARG</h2>
			<h4>DANH SÁCH YÊU CẦU CHƯA ĐỊNH VỊ</h4>
			<table id='tabKetQua' class='table table-hover table2 ' border="1">
				<thead>
					<tr> 
		            	<td>SĐT</td>
		            	<td>Địa chỉ</td>
		            	<td>Thời gian</td>
		            	<td>Định vị</td>
		     	 	</tr>
		     	 </thead>
		     	 <tbody v-if = "dsChuaDinhVi.length > 0"> 
		     	 	<tr v-for="req in dsChuaDinhVi">
		     	 		<td>{{req.sdt}}</td>
		     	 		<td>{{req.diaChi}}</td>
		     	 		<td>{{req.ngayGio}}</td>
		     	 		<td>
		                <router-link :key= "req['.key']" :to = "'/bando/' + req['.key']">
		                  <span class='glyphicon glyphicon-globe'></span> 
		                </router-link>                   		 
		              </td>
		     	 		<!-- <td><a href='javascript:;' class='test' @click="dinhvi(req['.key'])">
				            <span class='glyphicon glyphicon-map-marker'></span> </a>
				        </td> -->
		     	 	</tr>
		     	 </tbody>
		     	  <tbody v-else>
					
						Không có điểm nào.
					
				</tbody>
		     </table> 
		</div>
	</div>
</template>

<script>
	import {DsChuaDinhVi} from '../firebase'; 
	export default {
		name: 'ChuaDinhvi',
		firebase: {
			dsChuaDinhVi: DsChuaDinhVi
		},
		mounted()
		{
			var self = this;
			self.dsChuaDinhVi = self.dsChuaDinhVi.reverse(); 

		},
		methods: {
			dinhvi(key){
				this.$emit('dinhviToaDo', key);
			}
		},
	}
</script>
