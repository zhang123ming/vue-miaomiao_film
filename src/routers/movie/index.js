export default{
    path:'/movie',
    component:()=>import('@/views/Movie/index.vue'),
    children:[
        {path:'/movie',redirect:'/movie/nowPlaying'},
        {path:'city',component:()=>import("@/components/City")},
        {path:'nowPlaying',component:()=>import("@/components/NowPlaying")},
        {path:'comingsoon',component:()=>import("@/components/ComingSoon")},
        {path:'search',component:()=>import("@/components/Search")}
    ]
}