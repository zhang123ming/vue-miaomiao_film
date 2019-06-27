<template>
  <div>
    <Header :title="headerTitle"></Header>
    <CiList></CiList>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from "./../../components/Header/index";
import Tabbar from "./../../components/Tabar/index";
import CiList from './../../components/CiList/index'
export default {
  data() {
    return {
      headerTitle:"电影影院"
    };
  },

  methods: {},
  components: {
    Header,
    Tabbar,
    CiList
  }
};
</script>
<style  scoped>
</style>