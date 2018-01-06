<template>
  <div class="container-fluid">
    <div class="row">
    <div class="col-sm-9 col-md-9">
        <router-view></router-view>
      </div>
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
    <div class="row">
      <div class="col-md-1 col-lg-1 col-xs-1 col-sm-1 col-lg-1">
       </div>
      <div class="col-md-5 col-lg-5 col-xs-5 col-sm-5 col-lg-5">
        <DangDiChuyen/>
      </div>
      <div class="col-md-5 col-lg-5 col-xs-5 col-sm-5 col-lg-5">
        <DaHoanThanh/>
      </div>
    </div>
  </div>
</template>

<script >
  import axios from 'axios';
  import ChuaDinhVi from './ChuaDinhVi.vue';
  import DaDinhVi from './DaDinhVi.vue';
  import DaCoXeNhan from './DaCoXeNhan.vue';
  import DangDiChuyen from './DangDiChuyen.vue';
  import DaHoanThanh from './DaHoanThanh.vue';

  export default {
    name: 'index',
    components: {
      ChuaDinhVi, DaDinhVi, DaCoXeNhan, DangDiChuyen,DaHoanThanh
    },
  }
</script>