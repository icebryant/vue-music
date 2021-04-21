import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '../views/recommend.vue'
import Singer from '../views/singer.vue'
import Search from '../views/search.vue'
import TopList from '../views/top-list.vue'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/top-list',
    name: 'TopList',
    component: TopList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
