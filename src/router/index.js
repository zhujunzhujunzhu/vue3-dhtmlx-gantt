/*
 * @Author: zhujunzhujunzhu 2693474327@qq.com
 * @Date: 2022-10-26 11:29:16
 * @LastEditors: zhujunzhujunzhu 2693474327@qq.com
 * @LastEditTime: 2022-10-26 14:24:05
 * @FilePath: \vue3-dhtmlx-gantt\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
