import {createRouter,createWebHashHistory} from 'vue-router'


const Home =()=>import('../views/home/index.vue')
const AlbumDetail =()=>import('../views/albumDetail/index.vue')
const SearchResult =()=>import('../views/searchResult/index.vue')

const routes=[
    {path: "/", redirect: "/home"},
    {path: "/home", name: "Home", component: Home},
    {path:'/albumDetail',name:'AlbumDetail',component:AlbumDetail},
    {path:'/searchResult',name:'SearchResult',component:SearchResult}

]

const router=createRouter({
    history: createWebHashHistory(),
    scrollBehavior:(to,from,savePosition)=>{
        // console.log('scrollBehavior:to', to)
        // console.log('scrollBehavior:from', from)
        // console.log('scrollBehavior:savePosition', savePosition)
        // if (savePosition) {
        //     return savePosition
        // } else {
        //     return {
        //         top: 0
        //     }
        // }
    },
    routes
})

router.beforeEach((to,from,next)=>{
        next()
})

export default router