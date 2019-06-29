// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routers'
import store from './stores'
Vue.config.productionTip = false

// 
import axios from 'axios'
Vue.prototype.axios = axios;
// 

Vue.filter('setWH', (url, arg) => {
	return url.replace(/w\.h/, arg);
});
// 
// import Scroller from '@/components/Scroller'
// Vue.component('Scroller', Scroller);
// 
import Loading from '@/components/Loading'
Vue.component('Loading', Loading);
// 
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
