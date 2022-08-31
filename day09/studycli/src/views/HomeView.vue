<template>
  <div class="home">
    <HeaderCom />
    <h1>首页</h1>
    <ul>
      <li>无序列表</li>
      <li>无序列表</li>
      <li>无序列表</li>
      <li>无序列表</li>
      <li>无序列表</li>
    </ul>
    <p class="p1">段落</p>
    <h3>{{ msg }}</h3>
    <button @click="test">点击</button>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }} -- {{ index }}
      </li>
    </ul>
    <button @click="toBack">返回按钮</button>
  </div>
</template>
<script>
import HeaderCom from "../components/HeaderCom.vue"
export default {
  // data在脚手架中一个方法
  data() {
    return {
      msg: "vue-cli脚手架渲染数据",
      list:["香蕉","苹果","梨子"]
    }
  },
  components: {
    HeaderCom
  },
  methods: {
    test(){
      alert("Hello Vue-cli")
    },
    // 返回上一个路由
    toBack(){
      // this.$router.back();
      this.$router.go(-1);
    }
  },
  created() {
    // 路由接收参数
    console.log(this.$route)
  }
}
</script>
// less css语法
// scoped 私有属性:当前在这个页面组件编写的样式只在当前页面起作用
<style lang="less" scoped>
// .home h1{
//   color: red;
// }
// .home ul li:nth-child(4){
//   background-color: gray;
// }
// .home ul li:nth-child(5){
//   background-color: green;
// }
// less使用嵌套结构去写样式
.home{
  h1{
    font-size: 20px;
    color: blue;
  }
  ul{
    li{
      color: red;
      // &继承上一层的样式
      &:nth-child(1){
        color: blue;
      }
      &:nth-child(3){
        color: aqua;
      }
    }
  }
  .p1{
    color: red;
  }
}
</style>
