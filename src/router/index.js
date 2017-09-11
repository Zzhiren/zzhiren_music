import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const tab = (resolve) => {
  import('components/tab/tab').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'tab',
    //   component: tab
    // },
    // {
    //   path: '/tab',
    //   name: 'tab',
    //   component: tab
    // }
  ]
})
