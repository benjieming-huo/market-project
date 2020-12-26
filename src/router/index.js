import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import list from './routes/list'; 
import home from "./routes/home";
import classify from "./routes/classify"
import center from "./routes/center"
import detail from "./routes/detail";
import login from "./routes/login";

const routes = [
  list,
  home,
  classify,
  center,
  detail,
  login,
  {
    path:"/",
   redirect: "/home"
  }
]

const router = new VueRouter({
  mode:'history',
  routes,
 
})

export default router;
