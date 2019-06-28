// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/**
 *1、
 *  router 
 *  */
import router from './routers/index'

/**
 *2、
 *  vuex
 *  */
import store from './stores/index'



/**
 *4、axios
 *  
 *  */
import axios from 'axios'
Vue.prototype.axios = axios;

/**
 *
 *  图片过滤器
 *  */
Vue.filter('setWH',(url , arg)=>{
    return url.replace(/w\.h/,arg);
});

/**
 *loading组件配置全局
 *  
 *  */
import Loading from '@/components/Loading/index'
Vue.component('Loading',Loading)


/**
 *
 *  
 *  */


/**
 *
 *  
 *  */


/**
 *
 *  挂载 router store
 *  */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
