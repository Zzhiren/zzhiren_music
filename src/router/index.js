import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const musichallx = (resolve) => {
  import('components/music-hall/music-hall').then((module) => {
    resolve(module)
  })
}

const tab = (resolve) => {
  import('components/tab/tab').then((module) => {
    resolve(module)
  })
}
const main = (resolve) => {
  import('base/main/main').then((module) => {
    resolve(module)
  })
}


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/tab'
    },
    // {
    //   path: '/musichall',
    //   name: 'musichall',
    //   component: musichall
    // },
    {
      path: '/tab',
      name: 'tab',
      component: tab,
      children: [
        {
          path: 'musichall',
          name: 'musichall',
          component: musichallx
        }
      ]
    }
    // {
    //   path: '/',
    //   name: 'main',
    //   component: main,
    //   children: [
    //     {
    //       path: 'musichall',
    //       name: 'musichall',
    //       component: musichall
    //     }
    //   ]
    // }
  ]
})
