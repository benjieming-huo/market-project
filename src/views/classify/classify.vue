<template>
  <div>
    <div>
      <h1 class="fen">分类</h1>
    </div>
    <div class="nav">
      <div 
      class="menu" 
      v-for="(item,index) in list" 
      @click="change"
      :key="index"
      >
        <i :class="item.icon"></i>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/icon/iconfont.css";
export default {
  data () {
    return {
      list:[
        {icon:"iconfont icon-nanzhuang",name:'男装'},
        {icon:"iconfont icon-nvzhuang",name:'女装'},
        {icon:"iconfont icon-icon-",name:'日用'},
        {icon:"iconfont icon-shuma",name:'数码'},
        {icon:"iconfont icon-19",name:'运动'},
        {icon:"iconfont icon-suitcase",name:'包箱'},
        {icon:"iconfont icon-muyingleimu",name:'母婴'},
        {icon:"iconfont icon-xiangshui",name:'香水'},


      ]
    }
  },
  methods: {
    change(){
      this.$router.push("/list")
    }
  }
};
</script>
<style lang="scss" scoped>
.fen{
  margin-left: 20px;
}
.nav {
  width: 90%;
  margin: 0 auto;
  //   border: 1px solid black;
}
.menu {
  margin-bottom: 30px;
  padding: 20px 0 0 30px;
  box-sizing: border-box;
}
.menu:nth-child(2n-1) {
  width: 45%;
  height: 100px;
  margin-right: 10%;
  float: left;
  overflow: hidden;
  background: #f4f4f4;
}
.menu:nth-child(2n) {
  width: 45%;
  height: 100px;
  float: left;
  overflow: hidden;
  background: #f4f4f4;
}
.iconfont{
    font-family: "iconfont" !important;
    font-size: 30px !important;
    display: block;
}
</style>