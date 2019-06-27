<template>
  <div class="movie_header">
    <ul>
      <li>
        <dir class="pic_show">
          <img src="./../../../static/1.jpg">
        </dir>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>
            观众评
            <span class="grade">9.2</span>
          </p>
          <p>主演：陈建斌，盘并用</p>
          <p>这是commingSoon</p>
        </div>
        <div class="btn-mall">购票</div>
      </li>
    </ul>
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
.movie_header{ flex:1; overflow:auto;}
.movie_header ul{ margin:0 12px; overflow: hidden;}
.movie_header ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_header .pic_show{ width:64px; height: 90px;}
.movie_header .pic_show img{ width:100%;}
.movie_header .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_header .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_header .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_header .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_header .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_header .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_header .btn_pre{ background-color: #3c9fe6;}
.movie_header .pullDown{ margin:0; padding:0; border:none;}
</style>