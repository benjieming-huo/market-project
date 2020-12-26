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

// 路由守卫(全局)
router.beforeEach((to,from,next)=>{
  let arr = [

  ];
  if(arr.includes(to.path)  && !localStorage.getItem("jwt") ){
    router.push({path:"/login",query:{toUrl:to.fullPath}})
  }else{
    // 不满足不跳
    next();
  }
})

export default router;
