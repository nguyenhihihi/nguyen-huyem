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
					<button type="button" class="btn btn-block btn-primary" @click="login">
						<span class="glyphicon glyphicon-user"></span>
						Đăng nhập
					</button>
          <router-link :to = "'/register'" type="button" class="btn btn-block btn-default">
            <span class="glyphicon glyphicon-plus"></span>
            <span class="glyphicon glyphicon-user"></span>
            Đăng ký
          </router-link>
				</form>
			</div>
			<div class="col-sm-3 col-md-3 col-xl-3 col-lg-3"></div>
		</div>
	</div>
</div>
</template>

<script>
import {Driver} from '../firebase';
import {db} from '../firebase';
export default {

  name: 'Login',

  data () {
    return {
    	title: 'Đăng nhập',
    	username: '',
    	password: '',
    	taixe:[],
      taixe: null,
    }
  },

  methods: {
    login () {
      var self = this;
      var us = self.username;
      var ps = self.password;
      var keys;

      var kq= false;

      var kq2 = false;

	   var driver = Driver.orderByChild('username').equalTo(us);

     driver.on('value', function(snapshot){

      if (snapshot.val() != null){
       // self.taixe = snapshot.val();
       var tem;
              Object.keys(snapshot.val()).forEach(function(key){
         tem = snapshot.val()[key];
         keys = key;
      });
      
        if (tem.username == us && tem.password == ps)
       {

          self.taixe = tem;
         
        window.keytaixe = keys;
        console.log("key gl:" + window.keytaixe);
          localStorage.key= keys;
          localStorage.access_token= '1234567890';
          console.log(kq);
          kq = true;
          
        } 
        else
        {
          alert('Sai mật khẩu');
          kq2 = true;
          return;
        }
        console.log('tai zze');
         console.log(self.taixe);
      }
      else 
      {
        alert('Đăng nhập không thành không.')
        console.log('rong');
        kq2 = true;
        return;
      }

     });

     console.log('qua trang 2');
     console.log(self.taixe);

     while(kq == false)
     {
      if (kq2 = true)
      {
        break;
      }
     }

     if (kq == true)
     {
      
      var ref = db.ref('driver/' + keys);
      ref.update({state: 0});
      //router qua trang khac
      this.$router.push('/taixe');
     }
    },
          sleep2(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
              if ((new Date().getTime() - start) > milliseconds){
                break;
          }
        }
      },


  }
}
</script>

<style lang="css" scoped>
</style>