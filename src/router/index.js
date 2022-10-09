import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AccountCreated from '@/views/AccountCreated.vue'
import MyAccount from '@/views/MyAccount'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/account-created',
    name: 'AccountCreated',
    component: AccountCreated,
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
