<template>
<div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import LogIn from './components/login.vue';
import TaiXe from './components/taixe.vue';

export default {

  name: 'App',

  data () {
    return {
      products: []
    }
  },

  components: {
    LogIn, TaiXe
  },
}
</script>

<style lang="css" scoped>
</style>