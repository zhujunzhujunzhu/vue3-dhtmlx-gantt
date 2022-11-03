<!-- eslint-disable no-undef -->
<!--
 * @Author: zhujunzhujunzhu 2693474327@qq.com
 * @Date: 2022-10-31 14:16:59
 * @LastEditors: zhujunzhujunzhu 2693474327@qq.com
 * @LastEditTime: 2022-11-02 15:58:41
 * @FilePath: \vue3-dhtmlx-gantt\src\views\criticalPath.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { onMounted, ref } from "vue";
let ganttStyle = ref({
  width: "1400px",
  height: "500px",
});
// gantt.plugins({
// 	critical_path: true
// });

function updateCriticalPath(toggle) {
  toggle.enabled = !toggle.enabled;
  if (toggle.enabled) {
    toggle.innerHTML = "Hide Critical Path";
    gantt.config.highlight_critical_path = true;
  } else {
    toggle.innerHTML = "Show Critical Path";
    gantt.config.highlight_critical_path = false;
  }
  gantt.render();
}
// 需要开启关键路径的呈现才可以看得到的
gantt.config.highlight_critical_path = true;
//利用模板可以很方便进行样式的修改
// gantt.templates.task_class = function(start, end, task){
//  if(gantt.isCriticalTask(task))
//  return "critical_task";
//  return "";
//  };

//  gantt.templates.link_class = function(link){
//  if(gantt.isCriticalLink(link))
//  return "critical_link";
//  return "";
//  };

gantt.templates.task_class = function (start, end, task) {
  if (task.$critical) return "gantt_critical_task";
  if (task.isRed) return "gantt_task_red";
  return "";
};
gantt.templates.link_class = function (link) {
  console.log(link);
  if (link.isRed) return "gantt_link_red";
  return "";
};

window.check_children = function check_children(id) {
  function check_predecessors(id) {
    var task = gantt.getTask(id);
    var predecessors = task.$target;
    for (var i = 0; i < predecessors.length; i++) {
      var link = gantt.getLink(predecessors[i]);
      var predecessor = gantt.getTask(link.source);
      if (task.$critical && +predecessor.end_date >= +task.start_date)
        predecessor.$critical = true;
      else predecessor.$critical = false;
      gantt.refreshTask(predecessor.id); // 数据更改需要刷新
      if (predecessor.$target[0]) check_predecessors(predecessor.id);
    }
  }
  var critical_data = { ids: [], max_end_date: null };
  // eslint-disable-next-line no-undef
  gantt.eachTask(function (child) {
    if (+child.end_date == +critical_data.max_end_date) {
      critical_data.ids.push(child.id);
    }
    if (+child.end_date > +critical_data.max_end_date) {
      critical_data.max_end_date = new Date(child.end_date);
      critical_data.ids = [];
      critical_data.ids.push(child.id);
    }
    child.$critical = false;
  }, id);

  for (var i = 0; i < critical_data.ids.length; i++) {
    var task = gantt.getTask(critical_data.ids[i]);
    task.$critical = true;
    check_predecessors(task.id);
  }

  gantt.render();
};

gantt.templates.task_text = function (start, end, task) {
  console.log(task);
  if (task.type == "project")
    return (
      task.text +
      '<input type=button value="Critical check" onclick="check_children(' +
      task.id +
      ')">'
    );
  return task.text;
};

gantt.config.work_time = true;
gantt.config.details_on_create = false;
gantt.config.duration_unit = "day";
gantt.config.row_height = 30;
gantt.config.min_column_width = 40;

gantt.templates.timeline_cell_class = function (task, date) {
  if (!gantt.isWorkTime(date)) return "week_end";
  return "";
};

onMounted(() => {
  console.log(document.getElementById("gantt_here_test_3"));
  gantt.init("gantt_here_test_3");
  gantt.config.bar_height = 60;

  gantt.parse({
    data: [
      { id: 1, text: "Office itinerancy", open: true, type: "project" },
      {
        id: 2,
        text: "Office facing",
        start_date: "21-07-2019",
        duration: "20",
        parent: "1",
        isRed: true,
        color: "yellow",
        textColor: "red",
      },
      {
        id: 3.1,
        text: "俊",
        type: gantt.config.types.milestone,
        parent: 1,
        start_date: "22-07-2020",
        isRed: true,
      },
      {
        id: 3,
        text: "Furniture installation",
        start_date: "22-07-2019",
        duration: "5",
        parent: "1",
        isRed: true,
      },
      {
        id: 4,
        text: "The employee relocation",
        start_date: "29-07-2019",
        duration: "15",
        parent: "1",
      },
      {
        id: 5,
        text: "Interior office",
        start_date: "29-07-2019",
        duration: "15",
        parent: "1",
      },
      {
        id: 6,
        text: "Air conditioners installation",
        start_date: "19-08-2019",
        duration: "2",
        parent: "1",
      },
      {
        id: 7,
        text: "Workplaces preparation",
        start_date: "21-08-2019",
        duration: "2",
        parent: "1",
      },
      {
        id: 8,
        text: "Preparing workplaces for us",
        start_date: "22-07-2019",
        duration: "10",
        parent: "1",
      },
      {
        id: 9,
        text: "Workplaces importation",
        start_date: "23-08-2019",
        duration: "1",
        parent: "1",
      },
      { id: 10, text: "Analysis", open: true, type: "project" },
      {
        id: 11,
        text: "11 Documentation creation",
        start_date: "26-08-2019",
        duration: "14",
        parent: "10",
      },
      {
        id: 12,
        text: "12 Software design",
        start_date: "26-08-2019",
        duration: "10",
        parent: "10",
      },
      {
        id: 13,
        text: "13 Interface setup",
        start_date: "13-09-2019",
        duration: "1",
        parent: "10",
      },
      { id: 14, text: "14 Development", open: true, type: "project" },
      {
        id: 15,
        text: "Develop System",
        start_date: "16-09-2019",
        duration: "5",
        parent: "14",
      },
      {
        id: 16,
        text: "Integrate System",
        start_date: "16-09-2019",
        duration: "15",
        parent: "14",
      },
      {
        id: 17,
        text: "Test",
        start_date: "07-10-2019",
        duration: "1",
        parent: "14",
      },
    ],
    links: [
      { id: "1", source: "3", target: "4", type: "0", isRed: true },
      {
        id: "2",
        source: "3",
        target: "5",
        type: "0",
        isRed: true,
        color: "yellow",
      },
      { id: "3", source: "2", target: "6", type: "0", isRed: true },
      { id: "4", source: "4", target: "6", type: "0", isRed: true },
      { id: "5", source: "5", target: "6", type: "0" },
      { id: "6", source: "6", target: "7", type: "0" },
      { id: "7", source: "7", target: "9", type: "0" },
      { id: "8", source: "8", target: "9", type: "0" },
      { id: "9", source: "9", target: "10", type: "0" },
      { id: "10", source: "9", target: "11", type: "0" },
      { id: "11", source: "9", target: "12", type: "0" },
      { id: "12", source: "11", target: "13", type: "1" },
      { id: "13", source: "12", target: "13", type: "1" },
      { id: "14", source: "13", target: "14", type: "0" },
      { id: "15", source: "13", target: "15", type: "0" },
      { id: "16", source: "15", target: "17", type: "0" },
      { id: "17", source: "16", target: "17", type: "0" },
    ],
  });

  // 通过get来更改颜色  线条颜色直接可以通过加color来实现
  // gantt.getLink(2).color = "blue";
});
function getLinks() {
  const links = gantt.getLinks();
  console.log(links);
}
</script>

<template>
  <div>
    <button @click="getLinks">links</button>
    <div id="gantt_here_test_3" :style="ganttStyle"></div>
    <div>hello world</div>
  </div>
</template>

<style>
/* 处理进度条位置相关问题 */
.gantt_bars_area {
  position: absolute;
  left: 0px;
  top: 0px;
}
.gantt_link_red .gantt_link_wrapper div {
  background-color: red !important;
}

.gantt_task_red {
  background-color: brown;
  border: 1px rgb(42, 165, 52) solid;
}
/* 能不能利用正则的方式  [gantt_link_line-*] */
/* .gantt_link_red  */

/* .[gantt_link_line_*] {
  background: green;
} */
</style>
