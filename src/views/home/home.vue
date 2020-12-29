<template>
  <div id="app">
    <div class="top">
      <van-search v-model="value" @click="goSearch" placeholder="请输入搜索关键词" />
    </div>
    <!-- 轮播图 -->

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><a href="#"
          ><img
            src="https://gw.alicdn.com/imgextra/i1/1725301/O1CN01Qu3L8J1p1uBqzRw7z_!!1725301-0-lubanu.jpg"
            alt="" /></a
      ></van-swipe-item>
      <van-swipe-item
        ><a href="#"
          ><img
            src="https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg"
            alt="" /></a
      ></van-swipe-item>
      <van-swipe-item
        ><a href="#"
          ><img
            src="https://img.alicdn.com/imgextra/i3/6000000002212/O1CN019PgVtp1SD8k6VKNpk_!!6000000002212-0-octopus.jpg"
            alt="" /></a
      ></van-swipe-item>
      <van-swipe-item
        ><a href="#"
          ><img
            src="https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"
            alt="" /></a
      ></van-swipe-item>
    </van-swipe>
    <!-- 新品 -->
    <div class="new">
    <div :class="{topheader: show}">
      <div class="xptj">
        <van-nav-bar
        
          left-text="新品推荐"
          right-text="查看更多"
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
      </div>
    </div>
      <swiper>
        <div class="swiper-slide">
          <a href="#"
            ><img
              src="https://aecpm.alicdn.com/simba/img/TB1_UZ.GVXXXXc0XXXXSutbFXXX.jpg"
          /></a>
        </div>
        <div class="swiper-slide">
          <a href="#"
            ><img
              src="https://aecpm.alicdn.com/simba/img/TB1Brs6GVXXXXbOXFXXSutbFXXX.jpg"
          /></a>
        </div>
        <div class="swiper-slide">
          <a href="#"
            ><img
              src="https://aecpm.alicdn.com/simba/img/TB154Q4GVXXXXahXVXXSutbFXXX.jpg"
          /></a>
        </div>
        <div class="swiper-slide">
          <a href="#"
            ><img
              src="https://aecpm.alicdn.com/simba/img/TB1imo_GVXXXXaEXpXXSutbFXXX.jpg"
          /></a>
        </div>
        <div class="swiper-slide">
          <a href="#"
            ><img
              src="https://aecpm.alicdn.com/simba/img/TB1p4s3GVXXXXb6XVXXSutbFXXX.jpg"
          /></a>
        </div>
        <div class="swiper-slide">
          <a href="#"
            ><img
              src="https://aecpm.alicdn.com/simba/img/TB12fk3GVXXXXb0XFXXSutbFXXX.jpg"
          /></a>
        </div>
      </swiper>
    </div>
    <!-- 列表 -->
    <div class="list">
      <div class="bkrx">
        <van-tag type="danger" size="large">爆款热销</van-tag>
      </div>

      <van-grid :column-num="2" :gutter="25">
        <van-grid-item 
         v-for="(item,index) in dataList" 
         :key="index"
         @click="gotoDetail"
         >
          <a
            ><img
              v-lazy="item.goods_big_logo"
            />
            <p>{{item.goods_name | parsername}}</p>
             <p >已售:{{item.goods_number}}  | <i class="yuan"> {{item.goods_price}}&yen;</i></p>
          </a>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Grid, GridItem } from "vant";
import { NavBar } from "vant";
import { Toast } from "vant";
import { Tag } from "vant";
import { Search } from "vant";
import Swiper from "@/components/Swiper";
import url from "@/config/uri";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
Vue.use(Tag);
Vue.use(Search);

export default {
  //滚动条设置
  data() {
    return {
      value: "",
      dataList:[],
      show:false,
    };
  },
   mounted(){
        window.addEventListener('scroll',()=>{      
            let top =document.documentElement.scrollTop || 0;
            if(top<500){
                this.show=false;
            }else{
                this.show=true
            }
           
        })
    },
    filters: {
   parsername(val){
     let str=""
   str= val.substr(0,10)+"...";
   return str
   }
  },
   created () {
    this.$store.commit("isShowFooter", true);
    this.$http.get(url.getHome).then(ret=>{     
             this.dataList=ret.data;
        })
  },
  components: {
    Swiper,
  },
  methods: {
    onClickLeft() {
    },
    onClickRight() {
      this.$router.push("/list");
    },
    gotoDetail(){
      this.$router.push("/detail")
    },
    goSearch(){
      this.$router.push("/search")
    }
  },
};
</script>
<style lang="scss">
.topheader {
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
}
.yuan{
  color: red;
}
//轮播图
.my-swipe .van-swipe-item {
  color: #fff;
  height: 250px;

  // font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.my-swipe .van-swipe-item img {
  height: 100%;
  width: 100%;
}
//新品推荐
.new {
  background: rgb(180, 177, 177);
  height: 250px;
}
.xptj {
  background: yellowgreen;
}
.swiper-slide {
  height: 200px;
  // width: 150px;
  //   margin-right: 11px;
  display: inline-block;
  // width:8000px;
}
.swiper-slide img {
  height: 100%;
  // width: 100%;
}
//爆款热销
.list {
  background: rgb(223, 222, 222);
  margin-bottom: 35px;
  // height: 800px;
}
// .bkrx {
//   // background: greenyellow;
// }
.van-grid-item {
  // height: 150px;
  width: 100px;
}
.van-grid-item h3{
  color:red;
}
.van-grid-item img {
  height: 70%;
  width: 100%;
}
</style>