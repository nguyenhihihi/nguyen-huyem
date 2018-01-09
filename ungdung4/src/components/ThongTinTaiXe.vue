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
						<input type="text" class="form-control" id="txtUsername" v-model="username" readonly="true">
					</div>
					<div class="form-group">
						<label for="txtPassword">Mật khẩu</label>
						<input type="password" class="form-control" id="txtPassword" v-model="password" readonly="true">
					</div>
						<div class="form-group">
						<form id='fLoaiXe'>
							<input type="radio" name="radioLoaiXe" value ="Xe thường" checked="true"> Xe thường &nbsp; &nbsp; &nbsp; &nbsp;
							<input type="radio" name="radioLoaiXe" value ="Xe Premium" > Xe Premium 
						</form>
					</div>
					<button type="button" class="btn btn-block btn-danger" @click="DangXuat">
						<span class="glyphicon glyphicon-ok"></span>
						Đăng xuất
					</button>
                    <button type="button" class="btn btn-block b btn-block btn-primary" @click = "QuayVe">
                        <span class="glyphicon glyphicon-home"></span>
                        Quay về
                    </button>
				</form>
			</div>
			<div class="col-sm-3 col-md-3 col-xl-3 col-lg-3"></div>
		</div>
	</div>
</div>
</template>

<script>
import {db} from '../firebase';
export default {

  name: 'Login',

  data () {
    return {
    	title: 'Thông tin tài khoản',
        username: "",
        password: "",
        key: "",
    	taixe: null,
    }
  },

  mounted(){
    this.laydl();
  },

  methods: {
    laydl(){
        var self = this;
        self.key = localStorage.key;
        var ref = db.ref('driver/' + self.key);

        ref.on('value', function(snapshot){
            self.taixe = snapshot.val();
            self.username = snapshot.val().username;
            self.password = snapshot.val().password;

            // if (snapshot.val().type == 0)
            // {
            //     $('#')
            // }
        });

    },
    QuayVe(){
        this.$router.push('/request');
    },
    DangXuat () {
        var self = this;
        var ref = db.ref('driver/' + self.key);

        ref.update({state:2});
    	
        localStorage.key = "";
        localStorage.access_token = null; 
        this.$router.push('/');
  	}
},
}
</script>

<style lang="css" scoped>
</style>