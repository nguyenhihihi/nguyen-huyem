<template>
<div class="col-md-10 col-lg-10 col-xs-10 col-sm-10 col-lg-10">
	<h2>DANH SÁCH YÊU CẦU ĐÃ CÓ XE NHẬN</h2>
		<table id='tabKetQua' class='table table-fixed'>
			<thead>
				<tr> 
	            	<th>SĐT</th>
	            	<th>Địa chỉ</th>
	            	<th>Ghi chú</th>
                    <th>Thời gian</th>
         	 	</tr>
         	 </thead>
         	 <tbody v-if = "dsDaCoXeNhan.length > 0"> 
         	 	<tr v-for="req in dsDaCoXeNhan">
         	 		<td> {{req.sdt}}</td>
         	 		<td>{{req.diaChi}}</td>
         	 		<td>{{req.ghiChu}}</td>
              <td>{{req[".key"]}}</td>
         	 		<td>
                <router-link :key= "req['.key']" :to = "'/bando/' + req['.key']">
                  <span class='glyphicon glyphicon-globe'></span> 
                </router-link>                   		 
              </td>
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
import {DsDaCoXeNhan} from '../firebase'; 
	export default {
		name: 'ChuaDinhvi',
		firebase: {
			dsDaCoXeNhan: DsDaCoXeNhan
		},
        mounted()
        {
            var self = this;
            self.dsDaCoXeNhan = self.dsDaCoXeNhan.reverse(); 

        }
	}
</script>