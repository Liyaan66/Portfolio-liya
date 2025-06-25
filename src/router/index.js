import { createRouter, createWebHistory } from 'vue-router'

// Import your page components
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectView from '@/views/ProjectView.vue'
import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/projects', name: 'Projects', component: ProjectView },
  { path: '/blog', name: 'Blog', component: BlogView },
  { path: '/contact', name: 'Contact', component: ContactView },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Scroll to top on route change
    return { top: 0 }
  },
})

export default router
