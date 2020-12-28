<template>
  <div id="box">
    <!-- 头部 -->
    <div class="left iconfont icon-right" @click="change"></div>
    <div>
      <div class="header">
        
      </div>
      <!-- 图片 -->
      <div class="BigImg">
        <img class="BigImg_img" :src="list.goods_big_logo" />
      </div>

      <!-- 详情介绍 -->
      <div>
        <p>
          ....................................商品详情介绍......................
        </p>
        <div class="explain">
        <span> {{list.goods_name}} </span>
          <span>&yen;{{list.goods_price}}</span>
          已优惠：￥34
        </div>
      </div>
    </div>

    <div class="explain">
      <span> 送至：嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷 </span>
    </div>
    <div class="last">
      <van-grid>
        <van-grid-item text="商品介绍" />
        <van-grid-item text="文规格参数字"></van-grid-item>
        <van-grid-item text="包装清单" />
        <van-grid-item text="售后服务" />
      </van-grid>
    </div>
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          @click="onClickIcon"
        />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button
        @click="onClickIcon"
          type="danger"
          text="加入购物车"
        />
      </van-goods-action>
    </div>
  </div>
</template>



<script>
import Vue from "vue";
import "@/assets/ieon/iconfont.css";
import { Collapse, CollapseItem, Grid, GridItem } from "vant";
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Toast } from "vant";
import url from "@/config/uri";
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Toast);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
export default {
  data() {
    return {
      activeNames: ["1"],
      list: {},
    };
  },
  created() {
    this.$http.get(url.getDetails).then((ret) => {
      this.list=ret.data;
      console.log(this.list);
    });
    this.$store.commit("isShowFooter", false);
  },

  methods: {
    change() {
      this.$router.go(-1);
    },
    onClickIcon() {
      this.$router.push("/cart");
       window.localStorage.setItem()
    },
  },
};
</script>













<style class="scss" scoped>
.header {
  border-bottom: 1px solid #ccc;
  padding-bottom: 6px;
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
   width: 100%;

  height: 260px;
  text-align: center;
  overflow: hidden;
}
.BigImg_img {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  margin-top: 10px;
  vertical-align: middle;
}
.explain {
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding-top: 6px;
}
</style>