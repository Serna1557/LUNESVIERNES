import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ejemplo from '../views/Ejemplo.vue'
import Mostrar from '../views/Mostrar.vue'
import registrar from '../views/registrar.vue'
import editar from '../views/editar.vue'
import listarPosts from '../views/Posts/ListarPosts.vue'
import EditarPosts from '../views/Posts/EditarPosts.vue'
import nuevoregistro from '../views/Posts/nuevoregistro.vue'

import login from '../views/Auth/login.vue'
import register from '../views/Auth/register.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'login',
    component: login
  },

  {
    path: '/register',
    name: 'register',
    component: register
  },

  {
    path: '/nuevoregistro',
    name: 'nuevoregistro',
    component: nuevoregistro
  },

  {
    path: '/EditarPosts/:id',
    name: 'EditarPosts',
    component: EditarPosts
  },

  {
    path: '/listarPosts',
    name: 'listarPosts',
    component: listarPosts
  },

  {
    path: '/editar/:Id',
    name: 'editar',
    component: editar
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: registrar
  },
  {
    path: '/Ejemplo',
    name: 'Ejemplo',
    component: Ejemplo
  },
  {
    path: '/Mostrar',
    name: 'Mostrar',
    component: Mostrar
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
