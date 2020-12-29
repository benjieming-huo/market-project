<template>
    <div>
        <div class="top" @click="goback"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回</div>
        <div  class=" imginfo">
            <img :src="list.qr_code">
        </div>
        <button @click="goTo">查询订单状态</button>
    </div>
</template>
<script>
import { Toast } from 'vant';
import Vue from 'vue';
Vue.use(Toast);
export default {
    data () {
        return {
            list:[]
        }
    },
    created () {
        fetch('https://m.28sjw.com/order/getQR.php',{
            method:"post",
            body:"_s=1&_f=0.01&_t=1",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
        }).then(res=>res.json()).then(data=>{
            this.order_id=data.order_id;
            this.list=data;
            console.log(this.list);
        });
   this.$store.commit("isShowFooter",false)
    },
    methods: {
        goback(){
            this.$router.go(-1);
        },
            goTo() {
                setTimeout(()=>{
                this.$http.get(`https://m.28sjw.com/order/orderPayStatusCheck.php?_oid=${this.order_id}`).then(ret=>{
                    console.log(ret);
                    if(ret.status==200){
                        Toast('支付成功');
                    }
                })
            },1000)
        },
    },   
}
</script>
<style lang="scss" scoped>
    .imginfo{
        width: 400px;
        height: 400px;
        background: beige;
        margin:auto;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .top{
        color: white;
        padding-left: 20px ;
        font-size: 20px;
        line-height: 60px;
        width:100%;
        height:60px;
        background: rgb(113, 113, 245);
    }
</style>