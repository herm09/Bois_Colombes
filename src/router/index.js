import { createRouter, createWebHashHistory } from 'vue-router'
import AccueilView from '@/views/AccueilView.vue'
import SignalerView from '@/views/SignalerView.vue'
import SortiesView from '@/views/SortiesView.vue'
import ResidencesView from '@/views/ResidencesView.vue'
import AideView from '@/views/AideView.vue'


const routes = [
  {
    path: '/accueil',
    name: 'accueil',
    component: AccueilView
  },
  {
    path: '/signaler',
    name: 'signaler',
    component: SignalerView
  },
  {
    path: '/sorties',
    name: 'sorties',
    component: SortiesView
  },
  {
    path: '/residences',
    name: 'residences',
    component: ResidencesView
  },
  {
    path: '/aide',
    name: 'aide',
    component: AideView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router