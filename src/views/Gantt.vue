<!--
 * @Author: zhujunzhujunzhu 2693474327@qq.com
 * @Date: 2022-10-26 14:19:05
 * @LastEditors: zhujunzhujunzhu 2693474327@qq.com
 * @LastEditTime: 2022-11-02 15:01:24
 * @FilePath: \vue3-dhtmlx-gantt\src\views\Gantt.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import criticalPathVue from "./criticalPath.vue";
import { onMounted, ref } from "vue";
let ganttStyle = ref({
  width: "1400px",
  height: "800px",
});
onMounted(() => {
  // 处理文字包加载
  // // gantt.i18n.setLocale("cn");
  // gantt.config.auto_scheduling = false; //
  // gantt.config.auto_scheduling_strict = true;
  // gantt.config.row_height = 30; // 行高设置
  // gantt.config.fit_tasks = true; // 自适应任务
  // gantt.config.auto_types = true;
  // gantt.config.show_chart = true; // 是否显示右侧进度图
  // gantt.config.show_errors = false;
  // // 不能拖动进度的配置
  // // gantt.config.drag_progress = false
  // // 不能移动的配置
  // // gantt.config.drag_move = true
  // gantt.config.drag_resize = false;
  // //  11-7
  // gantt.config.details_on_dblclick = false; // 双击不显示详情配置
  // gantt.config.details_on_create = false; // 创建时不显示详情
  // gantt.init("gantt_here_test");
  // gantt.config.auto_scheduling_move_projects = true;
  // // 基本配置
  // gantt.parse({
  //   data: [
  //     {
  //       id: 1,
  //       text: "Project #2",
  //       start_date: "01-04-2018",
  //       duration: 18,
  //       progress: 0.4,
  //       open: true,
  //     },
  //     {
  //       id: 2,
  //       text: "Task #1",
  //       start_date: "02-04-2018",
  //       duration: 8,
  //       progress: 0.6,
  //       parent: 1,
  //     },
  //     {
  //       id: 3,
  //       text: "Task #2",
  //       start_date: "11-04-2018",
  //       duration: 8,
  //       progress: 0.6,
  //       parent: 1,
  //     },
  //   ],
  //   links: [
  //     { id: 1, source: 1, target: 2, type: "1" },
  //     { id: 2, source: 2, target: 3, type: "0" },
  //   ],
  // });
});

// 处理里程碑
</script>

<template>
  <!-- <div id="gantt_here_test" :style="ganttStyle"></div> -->
  <div class="red">
    <div>test</div>
    <criticalPathVue></criticalPathVue>
  </div>
</template>

<style>
/* 处理进度条位置相关问题 */
.gantt_bars_area {
  position: absolute;
  left: 0px;
  top: 0px;
}
.red {
  color: red;
}
</style>
