<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2 class="city_title">热门城市</h2>
        <ul class="clearfix">
          <li>上海</li>
          <li>上海</li>
          <li>上海</li>
          <li>上海</li>
        </ul>
      </div>
      <div class="city_sort" ref="city_sort">
        <div>
          <h2>A</h2>
          <ul>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
          </ul>
           <h2>A</h2>
          <ul>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
          </ul>
           <h2>A</h2>
          <ul>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
          </ul>
           <h2>A</h2>
          <ul>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
          </ul>
           <h2>A</h2>
          <ul>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
            <li>鞍山</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>
<style  scoped>
li {
  list-style: none;
}
.city_body {
  width: 100%;
  height: 100%;
  background: #fff5f0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot .city_title {
  padding-left: 10px;
}
.city_body .city_hot .clearfix li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  width: 100%;
  font-size: 14px;
  padding-left: 15px;
  background: #f0f0f0;
  font-weight: normal;
  line-height: 30px;
}
.city_body .city_sort ul li {
  line-height: 30px;
}
.city_body .city_index {
  position: fixed;
  right: 10px;
  top: 100px;
}
.city_body .city_index ul {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>