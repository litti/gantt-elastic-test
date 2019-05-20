<template>
  <div class="home">
    <gantt-elastic :tasks="tasks" :resources="resources" :options="options">
      <gantt-elastic-header slot="header"></gantt-elastic-header>
      <gantt-elastic-footer slot="footer"></gantt-elastic-footer>
    </gantt-elastic>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import GanttElastic from "../../../gantt-elastic/src/GanttElastic";

  // just helper to get current dates
  function getDate(hours) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const timeStamp = new Date(currentYear, currentMonth, currentDay, 15, 0, 0).getTime();
    return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
  }

  export default {
    name: 'home',
    components: {
      HelloWorld,
      ganttElasticHeader: {template: `<span>your header</span>`}, // or Header
      ganttElastic: GanttElastic,
      ganttElasticFooter: {template: `<span>your footer</span>`},
    },
    computed: {
      resources: function () {

        let t = [];

        for (let i = 0; i < 100; i++)
        {
          t.push({
            id: i,
            label: 'res ' + i,
            row: i,
            user:
                '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
            type: 'task'
          })
        }

        return t;
      },

      tasks: function () {

        let t = [];

        let len = 100;
        for (let i = 0; i < len; i++)
        {
          t.push({
            id: i,
            resourceId: i,
            label: 'Make some noise ' + i,
            user:
                '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
            start: getDate(-24 * 5 + i * 24),
            duration: 5 * 24 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000,
            progress: 20,
            type: 'task',
          });

          t.push({
            id: i + len,
            resourceId: i,
            label: 'Make some noise ' + i + len,
            user:
                '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
            start: getDate(i * 24 + 48),
            duration: 5 * 24 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000,
            progress: 20,
            type: 'task',
          });

          t.push({
            id: i + 2 * len,
            resourceId: i,
            label: 'Make some noise ' + i + 2 * len,
            user:
                '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
            start: getDate(i * 24 + 7 * 24 + 48),
            duration: 5 * 24 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000,
            progress: 20,
            type: 'task',
          });

          t.push({
            id: i + 3 * len,
            resourceId: i,
            label: 'Make some noise ' + i + 3 * len,
            user:
                '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
            start: getDate(i * 24 + 2 * 7 * 24 + 48),
            duration: 5 * 24 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000,
            progress: 20,
            type: 'task',
          });

          t.push({
            id: i + 4 * len,
            resourceId: i,
            label: 'Make some noise ' + i + 4 * len,
            user:
                '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
            start: getDate(i * 24 + 3 * 7 * 24 + 48),
            duration: 5 * 24 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000,
            progress: 20,
            type: 'task',
          });

          t.push({
            id: i + 5 * len,
            resourceId: i,
            label: 'Make some noise ' + i + 5 * len,
            user:
                '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
            start: getDate(i * 24 + 4 * 7 * 24 + 48),
            duration: 5 * 24 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000,
            progress: 20,
            type: 'task',
          });

          t.push({
            id: i + 6 * len,
            resourceId: i,
            label: 'Make some noise ' + i + 6 * len,
            user:
                '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
            start: getDate(i * 24 + 5 * 7 * 24 + 48),
            duration: 5 * 24 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000,
            progress: 20,
            type: 'task',
          });
        }

        return t;
      },

      options: function () {

        return {
          maxRows: 20,
          scope: {
            before: 20,
            after: 100
          },
          times: {
            timeZoom: 21,
          },
          taskList: {
            columns: [
              {
                id: 1,
                label: 'ID',
                value: 'id',
                width: 40
              },
              {
                id: 2,
                label: 'Description',
                value: 'label',
                width: 200,
                expander: true
              },
              {
                id: 3,
                label: 'Assigned to',
                value: 'user',
                width: 130,
                html: true
              },
              {
                id: 3,
                label: 'Start',
                value: task => this.$dayjs(task.start).format('YYYY-MM-DD'),
                width: 78
              },
              {
                id: 4,
                label: 'Type',
                value: 'type',
                width: 68
              },
              {
                id: 5,
                label: '%',
                value: 'progress',
                width: 35,
                style: {
                  'task-list-header-label': {
                    'text-align': 'center',
                    width: '100%'
                  },
                  'task-list-item-value-container': {
                    'text-align': 'center'
                  }
                }
              }
            ]
          },
          chart: {
            progress: {
              width: 20,
              height: 6,
              pattern: true,
              bar: false,
            },
            text: {
              offset: 0,
              xPadding: 10,
              display: true,
            },
          },
          calendar: {
            workingDays: [1, 2, 3, 4, 5],
            hour: {
              display: false,
            }
          }
        }
      }
    }
  }
</script>
