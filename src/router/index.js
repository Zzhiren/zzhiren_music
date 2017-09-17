import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const musicHall = (resolve) => {
  import('components/music-hall/music-hall').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/musicHall',
      name: 'musicHall',
      component: musicHall
    },
    // {
    //   path: '/tab',
    //   name: 'tab',
    //   component: tab
    // }
  ]
})
