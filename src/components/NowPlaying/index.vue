<template>
	<div class="movie_body" ref="movie_body">
		<Loading v-if="isLoading"></Loading>
		<ul>
			<li v-if="flag" style="width: 100%;height: 40px;background: #0062CC;color: #fff;display: flex;justify-content: center;align-items: center;margin: 0;padding: 0;">{{ pullDownMsg }}</li>
			<li v-for="item in movieList" :key="item.id">
				<div class="pic_show" @tap="handleToDetail"><img :src="item.img | setWH('128.180')" /></div>
				<div class="info_list">
					<h2>
						{{ item.nm }}
						<img v-if="item.version" src="../../assets/maxs.png" />
					</h2>
					<p>
						观众评
						<span class="grade">{{ item.sc }}</span>
					</p>
					<p>主演:{{ item.star }}</p>
					<p>{{ item.showInfo }}</p>
				</div>
				<div class="btn-mall">购票</div>
			</li>
		</ul>
	</div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
	data() {
		return {
			movieList: [],
			pullDownMsg: '',
			flag: false,
			isLoading:true,
			prevCityId:-1
		};
	},
	// mounted使用activated代替 数据渲染页面keep-active让页面不会重新渲染 
	activated() {

	var cityId=this.$store.state.city.id;
	if(this.prevCityId===cityId){
		this.isLoading=false;
		return;
	}
	console.log(123)
		// 根据城市获取相应的电影
		this.axios.get('/api/movieOnInfoList?cityId='+cityId).then(res => {
			var msg = res.data.msg;
			if (msg == 'ok') {
				this.movieList = res.data.data.movieList;
				this.isLoading=false;
				this.prevCityId=cityId;
				// console.log(this.movieList);
				/*
				 * 一下是滚动事件
				 * 1、数据加载完成后走better-scroll
				 * 2、注册事件tap
				 * 3、监听事件为 scroll:滚动
				 * 4、监听事件为 touchEnd:停止滚动触发
				 * 5、probeTtype 1 滚动速度
				 * **/

				this.$nextTick(() => {
					// 数据在加载完后才可以调用better-scroll事件
					var scroll = new BScroll(this.$refs.movie_body, {
						tap: true, //让tap事件生效
						probeTtype: 1
					});
					scroll.on('scroll', pos => {
						if (pos.y > 30) {
							this.pullDownMsg = '正在更新中...';
						}
					});
					scroll.on('touchEnd', pos => {
						if (pos.y > 30) {
							this.pullDownMsg="正在更新中，请稍后 ！ ！ ！"
							this.flag = true;
							this.axios.get('/api/movieOnInfoList?cityId=15').then(res => {
								var msg = res.data.msg;
								if (msg == 'ok') {
									this.pullDownMsg = '更新成功...';
									 setTimeout(()=>{
										 this.movieList = res.data.data.movieList;
										 	this.pullDownMsg = '';
										 	this.flag=!this.flag;
									 },1000)
									
								}
							});
						}

						console.log('停止滚动');
					});
				});
			}
		});
	},
	methods: {
		//
		handleToDetail() {
			console.log('handleToDetail');
		}
	}
};
</script>
<style scoped>
.movie_body {
	height: 600px;
	margin-top: 40px;
	flex: 1;
	/* background: forestgreen; */
	overflow: auto;
	position: relative;
}
.movie_body ul {
	margin: 0 12px;
	overflow: hidden;
}
.movie_body ul li {
	margin-top: 12px;
	display: flex;
	align-items: center;
	border-bottom: 1px #e6e6e6 solid;
	padding-bottom: 10px;
}
.movie_body .pic_show {
	width: 64px;
	height: 90px;
}
.movie_body .pic_show img {
	width: 100%;
}
.movie_body .info_list {
	margin-left: 10px;
	flex: 1;
	position: relative;
}
.movie_body .info_list h2 {
	font-size: 17px;
	line-height: 24px;
	width: 150px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.movie_body .info_list p {
	font-size: 13px;
	color: #666;
	line-height: 22px;
	width: 200px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.movie_body .info_list .grade {
	font-weight: 700;
	color: #faaf00;
	font-size: 15px;
}
.movie_body .info_list img {
	width: 50px;
	position: absolute;
	right: 10px;
	top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
	width: 47px;
	height: 27px;
	line-height: 28px;
	text-align: center;
	background-color: #f03d37;
	color: #fff;
	border-radius: 4px;
	font-size: 12px;
	cursor: pointer;
}
.movie_body .btn_pre {
	background-color: #3c9fe6;
}
.movie_body .pullDown {
	margin: 0;
	padding: 0;
	border: none;
}
</style>
