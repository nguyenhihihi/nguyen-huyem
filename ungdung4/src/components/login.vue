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
						<label for="txtUsername">Username</label>
						<input type="text" class="form-control" id="txtUsername" v-model="username">
					</div>
					<div class="form-group">
						<label for="txtPassword">Password</label>
						<input type="password" class="form-control" id="txtPassword" v-model="password">
					</div>
					<button type="button" class="btn btn-block btn-primary" @click="login">
						<span class="glyphicon glyphicon-user"></span>
						Đăng nhập
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
    	title: 'Đăng nhập',
    	username: '',
    	password: '',
    	taixe:[],
    }
  },

  methods: {
    login () {
	var driver = Driver;
    driver.on('value', function(snapshot){
      if(self.taixe.length>0)
        self.taixe.splice(0);
      Object.keys(snapshot.val()).forEach(function(key){
        var obj = {
                    lat: snapshot.val()[key].lat,
                    lng: snapshot.val()[key].lng,
                    state: snapshot.val()[key].state,
                    type: snapshot.val()[key].type,
                    key:  key
                    };
         self.taixe.push(obj);   
        });
    });
      if (this.username === 'huyen' && this.password === '123') {
      	localStorage.access_token = '1234567890';
        this.$router.push('/taixe');
      } else {
      	alert('login failed');
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>