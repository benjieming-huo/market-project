import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "vant/lib/index.css"
import axios from "@/api/http"
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload,{
  loading:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201201%2F10%2F20120110165014_ZdU3U.jpg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611641901&t=fe7afca443c5c5f066ce844613debce6"
})
Vue.config.productionTip = false
Vue.prototype.$http=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
