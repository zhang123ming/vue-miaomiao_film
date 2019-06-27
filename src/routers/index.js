import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
// 路由导入
import adminRouter from './admin/index'
import cinemaRouter from './cinema/index'
import mineRouter from './mine/index'
import movieRouter from './movie/index'
export default new Router({
    mode:'history',
    routes:[
        adminRouter,
        cinemaRouter,
        mineRouter,
        movieRouter,
        {path:'/*',redirect:'/movie'}
    ]
})