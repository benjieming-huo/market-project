import home from "@/views/home/home"
import search from "@/views/home/search"
var homeRouter=[{
     path: '/home', 
     component: home
},
{path:"/search",component:search}
]
export default homeRouter;