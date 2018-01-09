<template>
	<div class="panel panel-default">
	<div class="panel-heading">
		<h3 class="panel-title">{{title}}</h3>
	</div>
	<div class="panel-body">
		<div class="row">
			<div class="col-sm-3 col-md-3 col-xl-3 col-lg-3"></div>
			<div class="col-sm-6 col-md-6 col-xl-6 col-lg-6">
				<form>
					<div class="form-group">
						<label for="txtUsername">Tài khoản</label>
						<input type="text" class="form-control" id="txtUsername" v-model="username">
					</div>
					<div class="form-group">
						<label for="txtPassword">Mật khẩu</label>
						<input type="password" class="form-control" id="txtPassword" v-model="password">
					</div>
						<div class="form-group">
						<form id='fLoaiXe'>
							<input type="radio" name="radioLoaiXe" value ="Xe thường" checked="true"> Xe thường &nbsp; &nbsp; &nbsp; &nbsp;
							<input type="radio" name="radioLoaiXe" value ="Xe Premium" > Xe Premium 
						</form>
					</div>
					<button type="button" class="btn btn-block btn-primary" @click="DangKy">
						<span class="glyphicon glyphicon-ok"></span>
						Đăng ký
					</button>
                    <button type="button" class="btn btn-block btn-default" @click = "huy">
                        <span class="glyphicon glyphicon-remove"></span>
                        Hủy bỏ
                    </button>
				</form>
			</div>
			<div class="col-sm-3 col-md-3 col-xl-3 col-lg-3"></div>
		</div>
	</div>
</div>
</template>

<script>
import {Driver} from '../firebase';
export default {

  name: 'Login',

  data () {
    return {
    	title: 'Đăng ký',
    	username: '',
    	password: ''
    }
  },

  methods: {
    huy(){
        this.$router.push('/');
    },
    DangKy () {
    	

    	if (this.username == "" || this.password == "")
    	{
    		alert("Nhập Tài khoản và mật khẩu.");
    		return;
    	}
    	 var loaixe = $('input[name=radioLoaiXe]:checked', '#fLoaiXe').val();

    	var tp;

    	if (loaixe = "Xe thường"){
    		tp = 0;
    	}
    	else
    	{
    		tp = 1;
    	}

    	Driver.push({
    		lat: '',
    		lng: '',
    		state: 2,
    		type: tp,
    		username: this.username,
    		password: this.password
    	});
        alert('Đăng ký thành không. Bấm Ok để về trang đăng nhập.'); 
        this.$router.push('/');
  	}
},
}
</script>

<style lang="css" scoped>
</style>