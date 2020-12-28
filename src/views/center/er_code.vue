<template>
    <div>
        <div class="top" @click="goback"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回</div>
        <div  class=" imginfo">
            <img :src="list.data">
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            list:[]
        }
    },
    created () {
    this.$http.post("https://m.28sjw.com/order/getQR.php?_s=1&_f=0.1&_t=2").then(ret=>{
        this.list=ret
       console.log(this.list);
     });
     this.$store.commit("isShowFooter",false)
    },
    methods: {
        goback(){
            this.$router.go(-1);
        }
    }
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