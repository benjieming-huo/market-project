<template>
    <div>
        <div>
            <div class="goBack" @click="goBack">
        <div>&lt;</div>
      </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'detail',
    data() {
        return {
            
        };
    },
    created(){
        this.$store.commit("isShowFooter",false);
        
    },
    beforeDestroy(){
        this.$store.commit("isShowFooter",true);

    },
    mounted() {
        
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        }
    },
};
</script>

<style lang="scss" scoped>
    .goBack{
    height: 50px;
    border-radius: 50%;
    background: rgb(20, 18, 18,);
    position: absolute;
    top: 5px;
    left: 5px;
    div{
        height: 50px;
        width: 50px;
        font-size: 35px;
        color: white;
        text-align: center;
        line-height: 50px;
    }
}
</style>