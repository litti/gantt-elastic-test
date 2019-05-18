import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import Dayjs from 'vue-dayjs';

Vue.use(Dayjs, {
  // language set, default cn
  lang: 'de',
  /**
   * addon filters { key: filter name }
   * if set {} will only dayjs base filter can use.
   */
  filters: {
    ago: 'ago',
  },
  /**
   * addon directives { key: directives name }
   * set {} to disable.
   */
  directives: {}
});

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
