<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-lg-6 col-xs-6 col-sm-6 col-lg-6">
        <Search  @searchSDT = "SearchSDT"/>
        <ResultSearch :list="dsTimKiem"/>
      </div>      
      <div class="col-md-6 col-lg-6 col-xs-6 col-sm-6 col-lg-6">
        <div>
          <BookingInfo @sdtThayDoi = "SDTThayDoi"/>
        </div>
        <div>
          <BookingHistory :list="dsLSCuaSDT"/>
        </div>      
        </div>
    </div>
  </div>
  
</template>

<script>
  import axios from 'axios';
  import BookingInfo from './components/BookingInfo.vue';
  import BookingHistory from './components/BookingHistory.vue';
  import Search from './components/Search.vue';
  import ResultSearch from './components/ResultSearch.vue';
  import {req} from './firebase';

//export const req = db.ref('/reqDatXe'); 

  export default {
    name: 'app',

    data(){
      return {
        dsLSCuaSDT: [],
        dsTimKiem:[]
      }
    },
    firebase: {
       dsLS: req
    },

    components: {
      BookingInfo, BookingHistory, Search, ResultSearch
    },
    methods: {
     SDTThayDoi(sdt)
      {
          
        var self = this;
        self.dsLSCuaSDT= [];
        var sl= self.dsLS.length;
        var i = 0;
        for (i; i < sl; i++)
        {
           if (self.dsLS[i].sdt == sdt)
           {
            console.log(i);
            self.dsLSCuaSDT.push(self.dsLS[i]);
           } 
        }
      },

      SearchSDT(sdt)
      {
        var self = this;
        self.dsTimKiem = [];
        var sl= self.dsLS.length;
        var i = 0;
        console.log(self.dsLS.length);
        console.log(sl);
        for (i; i < sl; i++)
        {
           if (self.dsLS[i].sdt == sdt)
           {
            console.log(i);
            self.dsTimKiem.push(self.dsLS[i]);
           } 
        }
      }
    }
  }
</script>