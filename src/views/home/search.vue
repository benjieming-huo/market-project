<template>
    <div>
        
      <van-search v-model="keyW" @keyup="sou" placeholder="请输入搜索关键词" />
    <ul>
        <li v-for="(val,index) in data" :key="index">
            {{val}}
        </li>
    </ul>
    </div>
</template>

<script>
export default {
    name: 'search',
    data() {
        return {
            data:[],
            keyW:"",

        };
    },
    created(){
    this.$store.commit("isShowFooter", false);

    },
    beforeDestroy(){
    this.$store.commit("isShowFooter", true);

    },
    mounted() {
        
    },
    methods: {
        sou(){
            this.$http.get("http://localhost:8080/getAirPortInfo.php" + `?wd=${this.keyW}&cb=ret`).then(ret=>{
                console.log(ret);
            })
        },
        
    },
};
</script>