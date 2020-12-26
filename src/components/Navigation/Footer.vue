<template>
    <div>
        <van-tabbar @change="tab" v-model="active">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item class="iconfont icon-category01" icon="">分类</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
      
        </van-tabbar>
    </div>
</template>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import "@/assets/ieon/iconfont.css"
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
    data () {
        return {
             active: 0,
             url:["/home","/classify","/center"]
        }
    },
    created(){
        //根据页面索引纠正底部导航
      this.active=this.url.indexOf(this.$route.path)>= 0
                ? this.url.indexOf(this.$route.path)
                : 0;
      // console.log(this.$route.path);
    //   console.log(this.$route);
  },

    methods: {
        tab(index){
            this.$router.push(this.url[index])
        },
    },
     watch: {
         $route:function(val){
             this.active=this.url.indexOf(val.fullPath)>0 ? this.url.indexOf(val.fullPath) : 0;
         }
    },
}
</script>
<style lang="scss" scoped>
    .iconfont{
        font-size: 15px;
    }
</style>