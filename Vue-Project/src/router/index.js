import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/navbar/home'
import Vip from '@/components/navbar/vip'
import Search from '@/components/navbar/search'
import Cart from '@/components/navbar/cart'

import NewsList from '@/components/news/newslist'
import NewsDetail from '@/components/news/newsdetail'

import PhotoList from '@/components/photo/photolist'
import PhotoDetail from '@/components/photo/photodetail'

import ProList  from '@/components/product/prolist'
import ProDetail from '@/components/product/prodetail'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect :'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/vip',
      component: Vip
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/news',
      component: NewsList
    },
    {
      path: '/news/detail',
      component: NewsDetail
    },
    {
      path: '/photo',
      component: PhotoList
    },
    {
      path: '/photo/detail',
      component: PhotoDetail
    },
    {
      path: '/product',
      component: ProList
    },
    {
      path: '/product/detail',
      component: ProDetail
    },
  ]
})
