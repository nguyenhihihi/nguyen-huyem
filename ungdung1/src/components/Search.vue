<template>
	<div id="searchPanel" class="container">
		<div class="row">
			<div class="col-md-2 col-lg-2 col-sm-2 col-xs-2">			
			</div>
			
			<div class="col-md-10 col-lg-10 col-sm-10 col-xs-10">			<h1>TÌM KIẾM THÔNG TIN</h1>
				<div id="Search">
				<label for="txtsearch">Số điên thoại: </label>
				<input type="" name="" id="txtsearch">
				<button id="btnSearch" type="button" class="btn btn-primary" @click = "search()">Tìm kiếm</button>
			</div>
			<br><br>
			<div id="chiTiet">
				
			</div>
			</div>
		</div>
			
		</div>
</template>

<script>
	export default {
		name: 'Search',
		methods: {
			search(){
				var sdt = $('#txtsearch').val();
				this.$emit('searchSDT', sdt);
			}
		},
	}
</script>