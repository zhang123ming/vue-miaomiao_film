<template>
  <div class="city_body">
    <Loading v-if="isLoading"></Loading>
    <div class="city_list">
      <div class="city_hot">
        <h2 class="city_title">热门城市</h2>
        <ul class="clearfix">
          <li
            v-for="item in hotList"
            :key="item.id"
            @click="handleToCliy(item.nm,item.id)"
          >{{item.nm}}</li>
        </ul>
      </div>
      <div class="city_sort" ref="city_sort">
        <div class="dv" v-for="(int, index2) in cityList" :key="index2">
          <h2>{{ int.index }}</h2>
          <ul v-for="(cit, i) in int.list" :key="i">
            <li @click="handleToCliy(cit.nm,cit.id)">{{ cit.nm }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li
          @touchstart="handToIndex(index3)"
          v-for="(wor, index3) in cityList"
          :key="index3"
        >{{ wor.index }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: [],
      hotList: [],
      isLoading: true
    };
  },

  methods: {
    //城市选择
    handleToCliy(nm, id) {
      // console.log(nm, id);
      this.$store.commit("city/CITY_INFO", { nm, id });
      window.localStorage.setItem("NowNm", JSON.stringify(nm));
      window.localStorage.setItem("NowId", JSON.stringify(id));
      this.$router.push("/movie/Playing");
    },
    // 点击跳转
    handToIndex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      // console.log(index);
      this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
    },
    formatCityList(cities) {
      var cityList = []; //城市分类
      var hotList = []; //热门城市
      for (var i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i]);
        }
      }
      for (var i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (toCom(firstLetter)) {
          //新添加索引
          cityList.push({
            index: firstLetter,
            list: [{ nm: cities[i].nm, id: cities[i].id }]
          });
        } else {
          //累计索引
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }
      function toCom(firstLetter) {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }
      cityList.sort((a, b) => {
        if (a.index > b.index) {
          return 1;
        } else if (a.index < b.index) {
          return -1;
        } else {
          return 0;
        }
      });
      return { cityList, hotList };
      // console.log(cityList.reverse());
      // console.log(cityList);
    },

    // 获取城市信息
    getCity() {
      var citylist = window.localStorage.getItem("cityList");
      var hotlist = window.localStorage.getItem("hotlist");

      if (citylist && hotlist) {
        this.cityList = JSON.parse(citylist);
        this.hotList = JSON.parse(hotlist);
        this.isLoading = false;
      } else {
        this.axios.get("/api/cityList").then(res => {
          // console.log(res.data.data);
          if (res.data.status == 0) {
            var cities = res.data.data.cities;
            var { cityList, hotList } = this.formatCityList(cities);
            console.log(this.formatCityList(cities));
            this.cityList = cityList;
            this.hotList = hotList;
            this.isLoading = false;
            // console.log(this.hotList);
            // console.log(this.cityList);

            // 本地存储
            window.localStorage.setItem(
              "cityList",
              JSON.stringify(this.cityList)
            );
            window.localStorage.setItem(
              "hotlist",
              JSON.stringify(this.hotList)
            );
          } else {
          }
        });
      }
    }
  },
  created() {
    this.getCity();
  }
};
</script>
<style scoped>
li {
  list-style: none;
}
.city_body {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #fff5f0;
  position: relative;
}
.city_body .city_hot {
}
.city_body .city_hot .city_title {
  margin-top: 10px;
  padding-left: 10px;
}
.city_body .city_hot .clearfix {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding-left: 20px;
  align-items: center;
  /* justify-content: center; */
  padding-top: 10px;
}
.city_body .city_hot {
  margin-top: 50px;
}
.city_body .city_hot .clearfix li {
  margin: 5px 6px;
  background: #fff;
  text-align: center;
  width: 25%;
  height: 33px;

  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
}

.city_body .city_sort {
  padding-left: 10px;
}
.city_body .city_sort h2 {
  width: 100%;
  font-size: 14px;
  padding-left: 15px;
  background: #f0f0f0;
  font-weight: normal;
  line-height: 30px;
  position: absolute;
}
.city_body .city_sort .dv ul li {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e5e5e5;
}
.city_body .city_index {
  height: 100%;
  background: #fff;
  position: fixed;
  right: 0px;
  top: 0px;
  padding-top: 110px;
  z-index: 2;
}
.city_body .city_index ul {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: 22px;
}
</style>
