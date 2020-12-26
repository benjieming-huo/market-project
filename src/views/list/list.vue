<template>
    <div>
    <div class=" left iconfont icon-right" @click="change">
    </div>
      <div>
            <van-tabs v-model="activeName">
                <van-tab title="男装" name="a">
                    <van-grid :column-num="2" :gutter="25">
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search3.alicdn.com/img/i3/45202905/O1CN01r5mTME1XKXDSnsJvU_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search3.alicdn.com/img/i3/132989643/O1CN01L0PZWg2L6XuJxmGW5_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search.alicdn.com/img/i4/11170294/TB2hg0krmtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search.alicdn.com/img/i4/26485327/O1CN01HdxU0t1pDoU72zvaz_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search.alicdn.com/img/i4/126871238/O1CN01DW9M2Y1L12ydQSD7E_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search1.alicdn.com/img/i1/133277383/O1CN010FqpVs24PSmZ660fu_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
      </van-grid>
                </van-tab>
                <van-tab title="新品" name="b">
                        <van-grid :column-num="2" :gutter="25">
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search3.alicdn.com/img/i3/45202905/O1CN01r5mTME1XKXDSnsJvU_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search3.alicdn.com/img/i3/132989643/O1CN01L0PZWg2L6XuJxmGW5_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search.alicdn.com/img/i4/11170294/TB2hg0krmtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search.alicdn.com/img/i4/26485327/O1CN01HdxU0t1pDoU72zvaz_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search.alicdn.com/img/i4/126871238/O1CN01DW9M2Y1L12ydQSD7E_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search1.alicdn.com/img/i1/133277383/O1CN010FqpVs24PSmZ660fu_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
      </van-grid>
                </van-tab>
                <van-tab title="热销" name="c">
                     <van-grid :column-num="2" :gutter="25">
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search3.alicdn.com/img/i3/45202905/O1CN01r5mTME1XKXDSnsJvU_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search3.alicdn.com/img/i3/132989643/O1CN01L0PZWg2L6XuJxmGW5_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search.alicdn.com/img/i4/11170294/TB2hg0krmtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search.alicdn.com/img/i4/26485327/O1CN01HdxU0t1pDoU72zvaz_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search.alicdn.com/img/i4/126871238/O1CN01DW9M2Y1L12ydQSD7E_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
        <van-grid-item>
          <a href="#"
            ><img
              src="http://g.search1.alicdn.com/img/i1/133277383/O1CN010FqpVs24PSmZ660fu_!!0-saturn_solar.jpg_260x260.jpg"
            />
            <p>品类:SX善喜灰色气质羊毛针织打底连衣裙</p>
            <h3>价格:¥699.00</h3>
          </a>
        </van-grid-item>
      </van-grid>
                </van-tab>
            </van-tabs>
      </div>
    </div>
</template>
<script>
import "@/assets/ieon/iconfont.css"
import Vue from 'vue';
import { Tab, Tabs,Grid, GridItem } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);

Vue.use(Grid);
Vue.use(GridItem);
export default {
    data () {
        return {
            activeName: 'a',
        }
    },
    created () {
        this.$store.commit('isShowFooter',false);
    },
    beforeDestroy () {
        this.$store.commit('isShowFooter',true)
    },
    methods: {
        change(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
    .left{
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
