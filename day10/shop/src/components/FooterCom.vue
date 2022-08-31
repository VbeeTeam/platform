<template>
  <footer>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart" :badge="$store.state.cartList.length">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>