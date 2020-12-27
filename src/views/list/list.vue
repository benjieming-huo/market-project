<template>
  <div>
    <div class="left iconfont icon-right" @click="change"></div>
    <div>
      <van-tabs v-model="activeName">
        <van-tab title="男装" name="a">
          <van-grid :column-num="2" :gutter="25">
            <van-grid-item v-for="(item,index) in manData" :key="index">
              <div>
                <img
                v-lazy="item.goods_big_logo"
                />
                <p class="p1">{{item.goods_name | parsername}}</p>
                <h3 class="h">已售:{{item.goods_number}}  | <i class="yuan"> {{item.goods_price}}&yen;/件</i></h3>
             </div>
            </van-grid-item>
          </van-grid>
        </van-tab>

        <van-tab title="新品" name="b">
          <van-grid :column-num="2" :gutter="25">
            <van-grid-item v-for="(item,index) in womenData" :key="index">
               <div>
                <img
                v-lazy="item.goods_big_logo"
                />
                 <p class="p1">{{item.goods_name | parsername}}</p>
                <h3 class="h">已售:{{item.goods_number}}  | <i class="yuan"> {{item.goods_price}}&yen;/件</i></h3>
               </div>
            </van-grid-item>
          </van-grid>
        </van-tab>

        <van-tab title="热销" name="c">
          <van-grid :column-num="2" :gutter="25">
            <van-grid-item v-for="(item,index) in hotData" :key="index">
              <div>
                <img
                v-lazy="item.goods_big_logo"
                />
                <p class="p1">{{item.goods_name | parser}}</p>
                <h3 class="h">已售:{{item.goods_number}}  | <i class="yuan"> {{item.goods_price}}&yen;/件</i></h3>
             </div>
            </van-grid-item>
          </van-grid>
        </van-tab>


      </van-tabs>
    </div>
  </div>
</template>
<script>
import "@/assets/ieon/iconfont.css";
import Vue from "vue";
import { Tab, Tabs, Grid, GridItem } from "vant";
import url from "@/config/uri";
Vue.use(Tab);
Vue.use(Tabs);

Vue.use(Grid);
Vue.use(GridItem);
export default {
  data() {
    return {
      activeName: "a",
      manData:[],
      womenData:[],
      hotData:[],
    };
  },
filters: {
  parsername(val){
    let str="";
    str=val.substr(0,9)+"..."
    return val.substr(0,9)+"...";
  },
   parser(val){
    let str="";
    str=val.substr(0,9)+"..."
    return val.substr(0,9)+"...";
  }

},
  created() {
     this.$http.get(url.getHome).then(ret=>{  
        
             this.manData=ret.data;
              console.log(this.manData);          
        })
      this.$http.get(url.getToys).then(ret=>{  
       
             this.womenData=ret.data;
              console.log(this.womenData);          
        })
      this.$http.get(url.getBaby).then(ret=>{  
      
             this.hotData=ret.data;
              console.log(this.hotData);          
        })
    this.$store.commit("isShowFooter", false);
  },
  beforeDestroy() {
    this.$store.commit("isShowFooter", true);
  },
  methods: {
    change() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
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
.p1{
  font-size: 18px;
  color: rgb(41, 41, 41);
}
.h{
  font-size: 18px;
  color: rgb(41, 41, 41);
  
}
</style>
