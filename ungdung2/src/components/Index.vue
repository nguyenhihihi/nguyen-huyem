<template>
  <div id="mapName">
  	<button ype="button" class="btn btn btn-info" @click="initMap">Hiển thị bản đồ</button>
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
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: powderblue;
}
</style>