<template>
  <div>
    <Header :title="headerTitle"></Header>
    <Login></Login>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from "./../../components/Header/index";
import Tabbar from "./../../components/Tabar/index";
import Login from  './../../components/Login/index'
export default {
  data() {
    return {
      headerTitle:"我的电影"
    };
  },

  methods: {},
  components: {
    Header,
    Tabbar,
    Login
  }
};
</script>
<style  scoped>
</style>