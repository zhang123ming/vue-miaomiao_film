<template>
  <div id="detailContrainer" class="slide-enter-active">
    <Header :title="headerTitle">
      <i class="iconfont icon-right" @touchstart="handToBack"></i>
    </Header>
    <Loading v-if="isLoading" />
    <div v-else id="content" class="contentDetail">
      <div class="detail_list">
       <div class="detail_list_bg" :style="{ 'background-image' : 'url('+ movieInfo.img.replace(/w\.h/,'148.208') +')' }"></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="movieInfo.img | setWH('148.208')" alt />
          </div>
          <div class="detail_list_info">
            <h2>{{movieInfo.nm}}</h2>
            <p>{{movieInfo.enm}}</p>
            <p>{{movieInfo.sc}}</p>
            <p>{{movieInfo.cat}}</p>
            <p>{{movieInfo.src}} / {{movieInfo.dur}}分钟</p>
            <p>{{movieInfo.pubDesc}}</p>
          </div>
        </div>
      </div>
      <div class="detail_intro">
        <p>{{movieInfo.dra}}</p>
      </div>
      <div class="detail_player swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item,index) in movieInfo.photos" :key="index">
            <div>
              <img :src="item |setWH('140.127')" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./../../components/Header/index";
export default {
  data() {
    return {
      headerTitle: "影片详情",
      movieInfo: {},
      isLoading:true,
      // Movieid:this.$route.params.id,//获取路由id
    };
  },
  props: ["id"],
  created() {
    this.getMovieInfo();
  },
  // http://39.97.33.178/api/detailmovie?movieId=345808
  methods: {
    // 电影详情
    getMovieInfo() {
      this.axios.get("/api/detailmovie?movieId=" + this.id).then(res => {
        var msg = res.data.msg;
        if (msg === "ok") {
          this.movieInfo = res.data.data.detailMovie;
          // console.log(this.movieInfo);
          this.isLoading=false;
          this.$nextTick(() => {
            new Swiper(this.$refs.detail_player, {
              slidesPerView: "auto",
              freeMode: true,
              freeModeSticky: true
            });
          });
        }
      });
    },
    // 返回按钮
    handToBack() {
      this.$router.back();
    }
  },
  components: {
    Header
  }
};
</script>
<style  scoped>
#detailContrainer {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: white;
}
#detailContrainer.slide-enter-active {
  animation: 0.3s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
#content {
  padding-top: 50px;
}
#content.contentDetail {
  display: block;
  margin-bottom: 0;
}
#content .detail_list {
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.detail_list .detail_list_bg {
  width: 100%;
  height: 100%;
  background: 0 40%;
  filter: blur(20px);
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
}
.detail_list .detail_list_filter {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #40454d;
  opacity: 0.55;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.detail_list .detail_list_content {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.detail_list .detail_list_img {
  width: 108px;
  height: 150px;
  border: solid 1px #f0f2f3;
  margin: 20px;
}
.detail_list .detail_list_img img {
  width: 100%;
  height: 100%;
}
.detail_list .detail_list_info {
  margin-top: 20px;
}
.detail_list .detail_list_info h2 {
  font-size: 20px;
  color: white;
  font-weight: normal;
  line-height: 40px;
}
.detail_list .detail_list_info p {
  color: white;
  line-height: 20px;
  font-size: 14px;
  color: #ccc;
}
#content .detail_intro {
  padding: 10px;
}
#content .detail_player {
  margin: 20px;
  display: flex;
}
.detail_player .swiper-slide {
  width: 70px;
  margin-right: 20px;
  text-align: center;
  font-size: 14px;

}
.detail_player .swiper-slide img {
  width: 100%;
  margin-bottom: 5px;
}
.detail_player .swiper-slide p:nth-of-type(2) {
  color: #999;
}
</style>