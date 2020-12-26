<template>
  <div class="zj">
    <van-grid>
      <!--待付款 obligation -->
      <!--待发货 sendTheGoods -->
      <!--待完成 completed -->
      <!--已完成 stocks -->

      <van-grid-item class="iconfont icon-daifukuan" text="待付款"/>
      <van-grid-item class="iconfont icon-daifahuo" text="待发货"/>
      <van-grid-item class="iconfont icon-daiwancheng" text="待完成" />
      <van-grid-item class="iconfont icon-ziyuan137" text="已完成" />
    </van-grid>
  </div>
</template>

<script>
import "@/assets/list-icon/iconfont.css";
import Vue from "vue";
import { Grid, GridItem, Icon } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);

export default {
  methods:{
    obligation(){
      console.log( 111);
    },
    sendTheGoods(){
      console.log( 222);
    },
    completed(){
      console.log( 333);
    },
    stocks(){
      console.log( 444);
    },


  }
};
</script>

<style class="scss" scoped>
.van-grid-item{
  margin-top: 20px;
  text-align: center;
}
</style>