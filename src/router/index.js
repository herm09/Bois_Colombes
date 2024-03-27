import { createRouter, createWebHashHistory } from 'vue-router'
import SignalerView from '@/views/SignalerView.vue'
import SortiesView from '@/views/SortiesView.vue'


const routes = [
  {
    path: '/signaler',
    name: 'signaler',
    component: SignalerView
  },
  {
    path: '/sorties',
    name: 'sorties',
    component: SortiesView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router