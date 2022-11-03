/*
 * @Author: zhujunzhujunzhu 2693474327@qq.com
 * @Date: 2022-10-26 11:29:16
 * @LastEditors: zhujunzhujunzhu 2693474327@qq.com
 * @LastEditTime: 2022-10-26 14:18:24
 * @FilePath: \vue3-dhtmlx-gantt\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

console.log(gantt)
