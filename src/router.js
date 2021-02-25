import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProjectPage from './views/ProjectPage.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects/:project',
      name: 'ProjectPage',
      component: ProjectPage
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
