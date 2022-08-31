<template>
  <header>
    <van-nav-bar
      fixed
      :title="$route.meta.title"
      :left-text="$route.meta.requiresAuth ? '返回' : ''"
      :left-arrow="$route.meta.requiresAuth ? true : false"
      @click-left="onClickLeft"
    />
  </header>
</template>
<script>
export default {
  methods: {
    // 返回上一级路由
    onClickLeft() {
      this.$router.back();
    }
  },
};
</script>
<style>
</style>