<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-lg-6 col-xs-6 col-sm-6 col-lg-6">
        <Search/>
      </div>      
      <div class="col-md-6 col-lg-6 col-xs-6 col-sm-6 col-lg-6">
        <div>
          <BookingInfo/>
        </div>
        <div>
          <BookingHistory/>
        </div>      
        </div>
    </div>
  </div>
  
</template>

<script>
  import axios from 'axios';
  import BookingInfo from './components/BookingInfo.vue';
  import BookingHistory from './components/BookingHistory.vue';
  import Search from './components/Search.vue'

  export default {
    name: 'app',
    components: {
      BookingInfo, BookingHistory, Search
    },
  }
</script>