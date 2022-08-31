<template>
  <div class="header"> 
      <h1>{{ $route.meta.title }}</h1>
  </div>
</template>

<script>

export default {
  // 定义属性
  name:'Header',
  props: ["title"],
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log(this.$route)
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  }
}
</script>

<style lang='scss' scoped>
.header{
    h1{
        text-align: center;
        color: #ccc;
        padding: 20px 0;
    }
}
</style>