<template>
  <div id="box">
    <!-- 头部 -->
      <div class="left iconfont icon-right" @click="change"></div>
    <div class="header">
      <span> 商品详情 </span>
    </div>
    <!-- 图片 -->
    <div class="BigImg">
      <img
        class="BigImg_img"
        src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2873789948,317726200&fm=26&gp=0.jpg"
        alt=""
      />
    </div>

    <!-- 详情介绍 -->
    <div>
      <p>
        ....................................商品详情介绍......................
      </p>
      <div class="explain">
        <span>￥100</span>
        已优惠：￥200
      </div>
    </div>

    <div class="explain">
      <span> 送至：嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷 </span>
    </div>
    <div class="last">
      <van-grid>
        <van-grid-item  text="商品介绍" />
        <van-grid-item  text="文规格参数字" />
        <van-grid-item  text="包装清单" />
        <van-grid-item  text="售后服务" />
      </van-grid>
    </div>
    <div>
     
    </div>
  </div>
</template>



<script>
import Vue from "vue";
import "@/assets/ieon/iconfont.css";
import { Collapse, CollapseItem, Grid, GridItem } from "vant";
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
export default {
 
  data() {
    return {
      activeNames: ["1"],
    };
  },
   created () {
        this.$store.commit('isShowFooter',false);
        
    },
    beforeDestroy () {
        this.$store.commit('isShowFooter',true)
    },
  methods:{
     change() {
      this.$router.go(-1);
    },
 
}
  }

</script>
<style class="scss" scoped>
.header {
  border-bottom: 1px solid #ccc;
  padding-bottom: 6px;
  padding: 6px;
}
.left {
  width: 45px;
  height: 45px;
  color: rgb(230, 227, 227);
  font-size: 30px;
  line-height: 45px;
  margin-left: 20px;
  text-align: center;
  border-radius: 50%;
  margin-top: 20px;
  background: rgb(37, 37, 37);
}
span {
  display: inline-block;
  padding: 10px;
  margin-right: 120px;
}
.BigImg {
  position: relative;
  margin-top: 10px;
  width: 372px;
  height: 260px;
  text-align: center;
}
.BigImg_img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 174px;
  margin-top: 10px;
  vertical-align: middle;
}
.explain {
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding-top: 6px;
}
</style>