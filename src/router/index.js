import {createRouter,createWebHashHistory} from 'vue-router'


const Home =()=>import('../views/home/index.vue')
const AlbumDetail =()=>import('../views/albumDetail/index.vue')
const routes=[
    {path: "/", redirect: "/home"},
    {path: "/home", name: "Home", component: Home},
    {path:'/albumDetail',name:'AlbumDetail',component:AlbumDetail}
]

const router=createRouter({
    history: createWebHashHistory(),
    routes
})

export default router