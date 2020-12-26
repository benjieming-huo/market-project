<template>
    <div>
    <div class=" left iconfont icon-right" @click="change">
    </div>
      <div>
            <van-tabs v-model="activeName">
                <van-tab title="男装" name="a">
                    <van-grid :gutter="5">
                        <van-grid-item v-for="value in 10" :key="value" icon="photo-o" text="文字"/>
                    </van-grid>
                </van-tab>
                <van-tab title="新品" name="b">
                        <van-grid :gutter="5">
                        <van-grid-item v-for="value in 10" :key="value" icon="photo-o" text="文字" />
                    </van-grid>
                </van-tab>
                <van-tab title="热销" name="c">
                    <van-grid :gutter="5">
                        <van-grid-item v-for="value in 10" :key="value" icon="photo-o" text="文字" />
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
    .iconfont{
       
    }
</style>
