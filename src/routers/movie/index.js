export default {
  path: '/movie',
  component: () => import('@/views/Movie/index.vue'),
  children: [{
      path: 'city',
      component: () => import("@/components/City")
    },
    {
      path: 'nowPlaying',
      component: () => import("@/components/NowPlaying")
    },
    {
      path: 'comingsoon',
      component: () => import("@/components/ComingSoon")
    },
    {
      path: 'search',
      component: () => import("@/components/Search")
    },
    {
      path : 'detail/:id',
      components : {
          detail:()=>import("@/views/Movie/detail")
      },
      props:{
        detail:true
      }
  },
    {
      path: '/movie',
      redirect: '/movie/nowPlaying'
    },
  ]
}
