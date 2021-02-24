import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DKACalculator from './views/DKACalculator.vue'
import PaedsHub from './views/PaedsHub.vue'
import TheMoodMonitor from './views/TheMoodMonitor.vue'

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
      path: '/dkacalculator',
      name: 'dkacalculator',
      component: DKACalculator
    },
    {
      path: '/paedshub',
      name: 'paedshub',
      component: PaedsHub
    },
    {
      path: '/themoodmonitor',
      name: 'themoodmonitor',
      component: TheMoodMonitor
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
