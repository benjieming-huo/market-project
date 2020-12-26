<template>
  <div id="app">
      <div class="top">
          <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
    <!-- 轮播图 -->

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 新品 -->
    <div class="new">
      <div class="xptj">
        <van-nav-bar
          
          left-text="新品推荐"
          right-text="查看更多"
          
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
      </div>

      <swiper>
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
      </swiper>
    </div>
    <!-- 列表 -->

    <div class="list">
      <div class="bkrx"><van-tag type="danger" size="large">爆款热销</van-tag></div>
      <van-grid :column-num="2">
        <van-grid-item
          v-for="value in 8"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Grid, GridItem } from "vant";
import { NavBar } from 'vant';
import { Toast } from "vant";
import { Tag } from 'vant';
import { Search } from 'vant';
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
  data() {
    return {
      value: '',
    };
  },
  created () {
    this.$http.get(url.getHome).then(ret=>{
            console.log(ret);
        })
  },
  components: {
    Swiper,
  },
  methods: {
    onClickLeft() {
    //   Toast("");
    },
    onClickRight() {
      this.$router.push("./list")
    },
  },
};
</script>
<style lang="scss">
.my-swipe .van-swipe-item {
  color: #fff;
  // width:10000px;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.swiper-slide {
  height: 125px;
  width:100px;
  background: mediumslateblue;
//   margin-right: 11px;
  display: inline-block;
  // width:8000px;
}
.new {
  background: pink;
  height: 175px;
}
.xptj {
  background: yellowgreen;
}
.list {
  background: orange;
  height: 400px;
}
.bkrx {
  background: greenyellow;
}
</style>