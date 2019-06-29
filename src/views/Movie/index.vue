<template>
  <div id="main">
    <!-- 头部 -->
    <Header :title="headerTitle"></Header>
    <!-- 首页导航 -->
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>{{$store.state.city.nm}}</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <!-- 底部 -->
    <Tabbar></Tabbar>
    <router-view name="detail"></router-view>
  </div>
</template>

<script>
import Header from "./../../components/Header/index";
import Tabbar from "./../../components/Tabar/index";
import { messageBox } from "./../../components/JS/index";

export default {
  data() {
    name: "mian";
    return {
      headerTitle: "喵喵电影",
      cityInfo: [] //获取定位信息
    };
  },
  mounted() {
    setTimeout(() => {
      this.axios.get("/api/getLocation").then(res => {
        var msg = res.data.msg;
        if (msg === "ok") {
          var nm = res.data.data.nm;
		  var id = res.data.data.id;
		  if(this.$store.state.city.id==id){
			  return;
		  }
          messageBox({
            title: "当前位置是:",
            content: nm,
            cancel: "取消",
            ok: "切换定位",
            handleOk() {
				//本地存储
				
              window.localStorage.setItem("NowNm", nm); 
			  window.localStorage.setItem("NowId", id);
			  window.location.reload();
            }
          });
          // 		this.cityInfo = res.data.data;
          // 		  console.log(this.cityInfo);
        }
      });
    }, 2000);
  },
  methods: {},
  components: {
    Header,
    Tabbar
  }
};
</script>
<style scoped>
#main {
  margin-top: 50px;
}
.movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
  position: fixed;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .city_name.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_item.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}

/* .slide-enter-active { */
  /* animation: 13s detailMove;
}
@keyframes detailMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
} */
</style>
