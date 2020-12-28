<template>
  <div id="box">
    <!-- 头 -->
       <div class="leftd iconfont icon-right" @click="change"></div>

    <div class="header">
      <h1>购物车</h1>
    </div>
    <!-- 商品列表 -->
    <div class="list">
      <div class="left">
        <img
          src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3382838140,4184179756&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="center">
        <h4>商品标题.............</h4>
        <span>商品简介</span>
        <div>￥348</div>
      <van-stepper v-model="value" min="1" max="8" />
      </div>
      <div class="right">×</div>
    </div>
    <div class="list">
      <div class="left">
        <img
          src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3382838140,4184179756&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="center">
        <h4>商品标题.............</h4>
        <span>商品简介</span>
        <div>￥348</div>
      <van-stepper v-model="value" min="1" max="8" />
      </div>
      <div class="right">×</div>
    </div>
    <div class="list">
      <div class="left">
        <img
          src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3382838140,4184179756&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="center">
        <h4>商品标题.............</h4>
        <span>商品简介</span>
        <div>￥348</div>
       <van-stepper v-model="value" min="1" max="8" />
      </div>
      <div class="right">×</div>
    </div>
    <div class="list">
      <div class="left">
        <img
          src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3382838140,4184179756&fm=26&gp=0.jpg"
          alt=""
        />
      </div>
      <div class="center">
        <h4>商品标题.............</h4>
        <span>商品简介</span>
        <div>￥348</div>
        <van-stepper v-model="value" min="1" max="8" />
      </div>
      <div class="right">×</div>
    </div>

    <!-- 结算 -->

    <div class="account">
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
     
    </div>

  </div>
</template>
<script>
import "@/assets/ieon/iconfont.css";

import Vue from 'vue';
import { Stepper,SubmitBar } from 'vant';

Vue.use(Stepper);
Vue.use(SubmitBar);


export default {
    data() {
    return {
      value: 1,
    };
  },
  methods: {
   change() {
      this.$router.go(-1);
    },
    onSubmit(){
      console.log( 123 );
    }
  },
  created () {
        this.$store.commit('isShowFooter',false);
        
    },
 
};
</script>
<style lang="scss" scoped>
.header {
  width: 200;
  text-align: center;
}
.list {
  display: flex;
  justify-content: space-between;
}
.right {
  padding-right: 20px;
  padding-top: 60px;
  font-size: 20px;
}

.left {
  width: 30%;
}
.van-submit-bar{
  position: fixed;
  bottom: 0;
}
.leftd {
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

</style>