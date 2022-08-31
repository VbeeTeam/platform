<template>
  <div class="order wrap">
    <van-tabs v-model="active" color="#1baeae" title-active-color="#1baeae" @change="changeTab">
      <van-tab v-for="item in tabList" :key="item" :title="item">
        <van-card
          v-for="(item, index) in list"
          :key="index"
          :num="item.num"
          :price="item.sellingPrice"
          :desc="item.goodsIntro"
          :title="item.goodsName"
          :thumb="item.goodsCoverImg"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      tabList: ["全部", "待付款", "已付款"],
      list: []
    };
  },
  methods: {
    changeTab(val){
      console.log(val)
      if(val == 0){ //全部
        this.list = this.$store.state.cartList.concat(this.$store.state.orderList)
      }else if(val == 1){ //购物车
        this.list = this.$store.state.cartList
      }else if(val == 2){ //订单
        this.list = this.$store.state.orderList
      }
    }
  },
  created() {
    console.log(this.$store.state.orderList);
    this.list = this.$store.state.orderList;
  },
};
</script>

<style>
</style>