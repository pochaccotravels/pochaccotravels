import { createRouter, createWebHashHistory } from 'vue-router'

// ➕ To add a page:
//   1. Make a new file in src/views/ (copy AboutView.vue)
//   2. Add a line below. The `title` is what shows in the nav menu.
export const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue'), meta: { title: 'Home' } },
  { path: '/about', component: () => import('@/views/AboutView.vue'), meta: { title: 'About' } },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})