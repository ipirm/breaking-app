import VueRouter from 'vue-router'
import Vue from 'vue'

 const Index = () => import(/* webpackChunkName: "Index" */ '@/pages/index.vue')
 const Episode = () => import(/* webpackChunkName: "Episode" */ '@/pages/episode.vue')
 const Character = () => import(/* webpackChunkName: "Character" */ '@/pages/character.vue')

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
        },
        {
            path: 'episodes/:id',
            name: 'episode',
            component: Episode,
        },
        {
            path: 'characters/:id',
            name: 'character',
            component: Character,
        },
    ]
})



export default router