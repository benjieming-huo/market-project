import center from "@/views/center/center";
import address from "@/views/center/address";
import er_code from "@/views/center/er_code";
import edit from "@/views/center/edit";

var centerRouter=[

{
     path: '/center', component: center 
},
{
      path: '/address', component:address 
},
{
      path: '/er_code', component: er_code 
},
{
      path: '/edit', component: edit 
},

]
export default centerRouter