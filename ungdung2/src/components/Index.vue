<template>
  <div class="row">
    <div class="col-sm-12  col-md-12 col-lg-12 col-xl-12">
      <div id="mapName">
        <button ype="button" class="btn btn btn-info" @click="initMap">Hiển thị bản đồ</button>
      </div>
    </div>
  </div>
  
</template>
<script type="text/javascript">

export default {
	name: 'google-map',
	data: function () {
		return {
			map:null,
			marker:null,
		}
	},
	mounted: function () {
		this.initMap();
	},
	methods:{
    initMap(){
      	var map = new google.maps.Map(document.getElementById('mapName'), {
          center: {lat: 10.762622, lng: 106.660172},
          zoom: 10
        });
      },
   },

};

</script>
<style scoped>
#mapName {
  width: 970px;
  height: 650px;
  margin: 0 auto;
  background: powderblue;
}
</style>