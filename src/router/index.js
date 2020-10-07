import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        title: 'ME2 thermodynamics labs',
        metaTags: [
            {
              name: 'description',
              content: 'The home page of our example app.'
            },
        ]
    }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router