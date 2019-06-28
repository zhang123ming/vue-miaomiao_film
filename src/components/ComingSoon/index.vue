<template>
	<div class="movie_header">
			<Loading v-if="isLoading"></Loading>
		<ul>
			<li v-for="item in comingList" :key="item.id">
				<dir class="pic_show"><img :src="item.img|setWH('128.180')" /></dir>
				<div class="info_list">
					<h2>{{item.nm}}<img v-if="item.version" src="../../assets/maxs.png"></h2>
					<p>
						<span class="person">{{item.wish}}</span>人想看
					</p>
					<p>主演:{{item.star}}</p>
					<p>{{item.rt}}上映</p>
				</div>
				<div class="btn-mall">预售</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			comingList:[],
			isLoading:true,
			prevId:-1,
		};
	},
	activated() {
		var cityId=this.$store.state.city.id;
		if(this.prevId===cityId){
			return;
		}

		this.axios.get('/api/movieComingList?cityId='+cityId).then(res => {
			// console.log(this.prevId)
			var msg = res.data.msg;
			if (msg === 'ok') {
				this.comingList=res.data.data.comingList;
				this.isLoading=false;
				this.prevId=cityId;
				// console.log(this.comingList)
			}
		});
	},
	methods: {}
};
</script>
<style scoped>
.movie_header {
	margin-top: 40px;
	flex: 1;
	overflow: auto;
}
.movie_header ul {
	margin: 0 12px;
	overflow: hidden;
}
.movie_header ul li {
	margin-top: 12px;
	display: flex;
	align-items: center;
	border-bottom: 1px #e6e6e6 solid;
	padding-bottom: 10px;
}
.movie_header .pic_show {
	width: 64px;
	height: 90px;
}
.movie_header .pic_show img {
	width: 100%;
}
.movie_header .info_list {
	margin-left: 10px;
	flex: 1;
	position: relative;
}
.movie_header .info_list h2 {
	font-size: 17px;
	line-height: 24px;
	width: 150px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.movie_header .info_list p {
	font-size: 13px;
	color: #666;
	line-height: 22px;
	width: 200px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.movie_header .info_list img {
	width: 50px;
	position: absolute;
	right: 10px;
	top: 5px;
}
.movie_header .btn-mall {
	width: 47px;
	height: 27px;
	line-height: 28px;
	text-align: center;
	background-color:dodgerblue;
	color: #fff;
	border-radius: 4px;
	font-size: 12px;
	cursor: pointer;
	border-radius: 3px;
}

</style>
