<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 col-lg-4 col-xs-4 col-sm-4 col-lg-4">
        <ChuaDinhVi/>
      </div>

      <div class="col-md-4 col-lg-4 col-xs-4 col-sm-4 col-lg-4">
        <DaDinhVi/>
      </div>

      <div class="col-md-4 col-lg-4 col-xs-4 col-sm-4 col-lg-4">
        <DaCoXeNhan/>
      </div>
      
    </div>
  </div>
</template>

<script >
  import axios from 'axios';
  import ChuaDinhVi from './components/ChuaDinhVi.vue';
  import DaDinhVi from './components/DaDinhVi.vue';
  import DaCoXeNhan from './components/DaCoXeNhan.vue';

  export default {
    name: 'app',
    components: {
      ChuaDinhVi, DaDinhVi, DaCoXeNhan
    },
  }
</script>