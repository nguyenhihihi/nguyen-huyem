<template>
<div class="panel panel-default">
	<div class="panel-heading">
		<h3 class="panel-title">{{title}}</h3>
	</div>
	<div class="panel-body">
		<div class="row">
			<div class="col-sm-6 col-md-6">
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
		</div>
	</div>
</div>
</template>

<script>
export default {

  name: 'Login',

  data () {
    return {
    	title: 'Đăng nhập',
    	username: '',
    	password: ''
    }
  },

  methods: {
    login () {
      if (this.username === 'nndkhoa' && this.password === '123') {
      	localStorage.access_token = '1234567890';
        this.$router.push('/');
      } else {
      	alert('login failed');
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>