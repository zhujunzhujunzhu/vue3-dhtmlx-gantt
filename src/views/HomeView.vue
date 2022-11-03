<!--
 * @Author: zhujunzhujunzhu 2693474327@qq.com
 * @Date: 2022-10-26 11:29:16
 * @LastEditors: zhujunzhujunzhu 2693474327@qq.com
 * @LastEditTime: 2022-11-02 10:17:15
 * @FilePath: \vue3-dhtmlx-gantt\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from "vue";
import Gantt from "./Gantt.vue";
const msg = ref("hello");
</script>

<template>
  <main>
    {{ msg }}
    <Gantt />
  </main>
</template>
