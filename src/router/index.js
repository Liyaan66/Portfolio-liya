import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import ProjectDetail from '@/views/ProjectDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/project/:id', name: 'ProjectDetail', component: ProjectDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
