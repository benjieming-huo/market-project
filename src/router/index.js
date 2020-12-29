import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import list from './routes/list'; 
import home from "./routes/home";
import classify from "./routes/classify"
import center from "./routes/center"
import detail from "./routes/detail";
import login from "./routes/login"; 
import cartRouter from "./routes/cart"
import logonRouter from "./routes/logon"
import { Toast } from 'vant';

Vue.use(Toast);
const routes = [
  list,
  cartRouter,
  ...home,
  classify,
  ...center,
  detail,
  login,
  logonRouter,
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

      "/address",
      "/er_code",
      "/edit",
     "/cart"
  ];
  if(arr.includes(to.path)  && !localStorage.getItem("jwt") ){
    Toast("您还没有登录，请先登录")
    setTimeout(() => {
      router.push({path:"/login",query:{toUrl:to.fullPath}})
    }, 2000);
    
  }else{
    // 不满足不跳
    next();
  }
})

export default router;
