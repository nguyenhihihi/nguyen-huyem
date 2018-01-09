<template>
  <div class="google-map" id="mapName"></div>
</template>
<script>
import  {db} from '../firebase';
import {Driver} from '../firebase';
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: "-map",
      ListDistance:[],
      ListOf10Driver:[],
      map: null,
      bounds: null,
      markers: [],
      marker:null,
      key:"",
      taixe:[],
      lat:null,
      lng: null,
      geocoder: new google.maps.Geocoder(),
      reverse: new google.maps.Geocoder(),
      infowindow: new google.maps.InfoWindow
      
    }
  },
  mounted: function () {
    this.ListDistance =[];
    this.taixe =[];
    this.ListOf10Driver=[];
    this.initMap();
    var key = this.$route.params.key;
    this.luuid(key);
    this.laydiem();
  },
  watch:{
      '$route' (to,from){
        var key = this.$route.params.key;
        this.luuid(key);
        this.laydiem();

      },
    },
    methods:{
      initMap(){
        const element = document.getElementById("mapName");
        const options = {
          zoom:8,
          center: new google.maps.LatLng(10.756,106.644)
        }
        this.map = new google.maps.Map(element, options);
        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        this.marker = new google.maps.Marker(
        {
            position: {lat: 10.756, lng: 106.644 },
            draggable: true,
            icon:image,
              animation: google.maps.Animation.DROP

        });
      },
      luuid(key){
        var self = this;
        self.key = key;
      },
      rad(x) {
        return x * Math.PI / 180;
      },

      // Tính khoảng cách 2 điểm
      getDistanc(mainpointlat, mainpointlng, p2) {
         var self = this;
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = self.rad(p2.lat - mainpointlat);
        var dLong = self.rad(p2.lng - mainpointlng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(self.rad(mainpointlat)) * Math.cos(self.rad(p2.lat)) *
          Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
      },
      timDanhSachTaiXeGanNhat(typeOfMoto){
        var self = this;
        if(self.ListDistance.length>0)
          self.ListDistance.splice(0);
        for(i =0;i < self.taixe.length; i++){
          self.ListDistance.push({index:i, distance: self.getDistanc(self.lat, self.lng, self.taixe[i])});
        }
        self.ListDistance.sort(function(a,b){
            return a.distance - b.distance;
        });
        console.log(self.ListDistance);
        if(self.ListOf10Driver.length>0)
          self.ListOf10Driver.splice(0);
        if(self.ListDistance.length>0){
          //Sửa 2->10
          for(var i =0;i<2;i++)
          {
            self.ListOf10Driver.push(self.taixe[self.ListDistance[i]["index"]]);
          }
        }
        
      },
      timTaiXe(typeOfMoto ){
        var self = this;
        for(var i =0;i <self.taixe.length;i++){

          if(self.ListDistance[i].distance>=1000)
          {             
            var ref = db.ref('reqDatXe/' + self.key);
            ref.update({lat: self.lat, long: self.lng, tinhTrang: "da dinh vi"});
            alert("Đã định vị nhưng không có xe đón");  
            return;
          }
          if(self.taixe[self.ListDistance[i]["index"]].state ==0 && self.taixe[self.ListDistance[i]["index"]].type == typeOfMoto )
          {
            var ref = db.ref('reqDatXe/' + self.key);
            ref.update({lat: self.lat, long: self.lng, tinhTrang: "da dinh vi", xeRuoc: self.taixe[ListDistance[i]["index"]].key });
            var ref = db.ref('driver/' + self.taixe[self.ListDistance[i].index].key );
            ref.update({state: 1});
            alert("Có xe, thông tin của khách đã được gửi đến xe");
            return;
          }
        }
        alert("Không có xe");
      },
      ShowMarkerCluster(locations){
        var self = this;
        var labels = 'ABCDEFGHIJ';
        
        if(self.markers.length >0)
        {
         self.markerCluster.clearMarkers();
        }
        self.markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        self.markerCluster = new MarkerClusterer(self.map, self.markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        return true;
      },
      dinhvi(typeOfMoto) {
        var self = this;
        self.geocoder.geocode({ 'address': self.diem.diaChi }, function(results, status) {
        alert(self.diem.diaChi);
        if (status === 'OK') {
          google.maps.event.addListener(self.marker, 'dragend', function (event) {
              self.marker.setPosition(event.latLng);             
              self.marker.setMap(self.map);
              var ref = db.ref('reqDatXe/' + self.key);
              ref.update({lat: event.latLng.lat(), long: event.latLng.lng()});
          });
          self.lat = parseFloat(results[0].geometry.location.lat().toFixed(6));
          self.lng =  parseFloat(results[0].geometry.location.lng().toFixed(6));
          self.map.setCenter(results[0].geometry.location);               
          self.marker.setPosition(results[0].geometry.location);
          self.marker.setMap(self.map);
          alert("Đang tiến hành định vị");
          self.timDanhSachTaiXeGanNhat(typeOfMoto);
         
          var all   = $.when(self.ShowMarkerCluster(self.ListOf10Driver));
          all.done(function () {
            alert("oko ok");
            self.timTaiXe(typeOfMoto);
          });
        } else {
          alert('không tìm thấy:  ' + status);
          var ref = db.ref('reqDatXe/' + self.key);
            ref.update({tinhTrang: "da dinh vi" });
          self.initMap();
          return;
        }
        });
      },
      laydiem()
       {
        var self = this;
        var d = db.ref('reqDatXe/' + self.key);
        d.on('value', function(snapshot){
          console.log(snapshot.val());
          self.diem = snapshot.val();
          console.log(self.diem);
        });

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
        if(self.diem!=null)
        {
          if(self.diem.loaiXe =="Xe Premium"){
            self.dinhvi(1);
          }
          else{
            self.dinhvi(0);
          }
        }
      }

    }
};
</script>
<style scoped>
.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>