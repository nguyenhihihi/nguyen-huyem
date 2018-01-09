<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3  col-md-3 col-lg-3 col-xl-3">
        <ChuaDinhVi/>
      </div>
      <div class="col-sm-9 col-md-9 col-lg-9 col-xl-9">
        <router-view>          
        </router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
  import ChuaDinhVi from './components/ChuaDinhVi.vue';
  import BanDo from './components/BanDo.vue';

  export default {
    name: 'app',

    components: {
      ChuaDinhVi, BanDo
    }
  }
</script>