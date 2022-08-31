<template>
  <div class="login wrap">
    <div class="icon">
      <van-icon name="shopping-cart" color="#1296db" size="3rem" />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <p>立即注册</p>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" color="#1baeae"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      //   将用户信息保存在浏览器缓存localStorage中
      localStorage.setItem("userInfo", JSON.stringify(values));
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  .icon {
    text-align: center;
    margin: 20px 0;
  }
  p {
    font-size: 14px;
    color: #1989fa;
    padding-left: 15px;
  }
}
</style>