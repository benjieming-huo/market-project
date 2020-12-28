<template>
  <div id="app">
  <div @click="goback">返回</div>
      <van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  disabled-text="以下地址超出配送范围"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
  </div>
</template>
<script>
import { mapState } from "vuex";
import {mapMutations} from "vuex";
import Vue from 'vue';
import { AddressList } from 'vant';
import { Toast } from 'vant';

Vue.use(AddressList);
Vue.use(Toast);

export default {
   data() {
    return {
      chosenAddressId: '1',
      datalist:[],
    };
  },
  computed: {
    ...mapState(["list","disabledList"]),
  },

  methods: {
     ...mapMutations(["changeList"]),
    goback(){
      this.$router.go(-1);
    },
    onAdd() {
      this.$router.push("/edit")
    },
    onEdit(item, index) {
    Toast('编辑地址:' + index);
    },
  },
}
</script>
<style lang="scss" scoped>

</style>
