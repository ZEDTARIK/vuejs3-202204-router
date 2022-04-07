import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PostView from '../views/PostView.vue'
import ShowPost from '../components/Post/ShowPost'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'PostView',
    component: PostView
  },
  ,
  {
    path: '/post/:id',
    props: true,
    name: 'ShowPost',
    component: ShowPost
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
