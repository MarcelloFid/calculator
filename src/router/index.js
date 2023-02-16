import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import FormView from '../views/FormView.vue'
import CalculatorView from "@/views/CalculatorView.vue";

const routes = [
  {
    path: '/',
    name: 'calculator',
    component: CalculatorView
  },
  {
    path: '/feedback',
    name: 'feedback',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/CalculatorView.vue')
    component: FormView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
