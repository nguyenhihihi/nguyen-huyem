<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <router-view>
          
        </router-view>
      </div>
       <div class="col-md-3">
        <ChuaDinhVi/>
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