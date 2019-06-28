<template>
	<div class="movie_body" ref="movie_body">
		<ul>
			<li v-if="flag" style="width: 100%;height: 40px;background: #0062CC;color: #fff;display: flex;justify-content: center;align-items: center;margin: 0;padding: 0;">
				{{ pullDownMsg }}
			</li>
			<li v-for="(item, index) in movieList" :key="item.id">
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
			pullDownMsg: '正在更新中，请稍后 ！ ！ ！',
			flag: false
		};
	},
	created() {
		this.getInfo();
	},
	methods: {
		//
		getInfo() {
			this.axios.get('/api/movieOnInfoList?cityId=15').then(res => {
				console.log(res);
			});
		},
		//
		handleToDetail() {
			console.log('handleToDetail');
		}
	}
};
</script>
<style scoped></style>
