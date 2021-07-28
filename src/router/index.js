import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home/index.vue'
// import Friends from '../views/Friends/index.vue'
// import Cart from '../views/Cart/index.vue'
// import Search from '../views/Search/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/Home/index.vue'),
    meta: {
      title: 'home',
      active: 0
    }
  },
  {
    path: '/friends',
    component: () => import('../views/Friends/index.vue'),
    meta: {
      title: 'friends',
      active: 1
    }
  },
  {
    path: '/cart',
    component: () => import('../views/Cart/index.vue'),
    meta: {
      title: 'cart',
      active: 2
    }
  },
  {
    path: '/search',
    component: () => import('../views/Search/index.vue'),
    meta: {
      title: 'search',
      active: 3
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
