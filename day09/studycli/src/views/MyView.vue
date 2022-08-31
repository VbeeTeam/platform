// 页面级组件
<template>
    <div class="my">
        <!-- 3.调用头部公共组件 -->
        <HeaderCom />
        <!-- <h1>{{ $route.meta.title }}页面</h1> -->
        <button @click="toHome">跳转首页</button>
        <!-- 3.路由组件跳转首页 -->
        <router-link to="/?id=2">跳转首页</router-link>
        <router-link :to="{name: 'home', params: obj}">跳转首页</router-link>
    </div>
</template>
<script>
// 1.导入公共组件路径
import HeaderCom from "../components/HeaderCom.vue"
export default {
    data() {
        return{
            obj:{
                id: 3
            }
        }
    },
    // 2.注册组件
    components: {
        HeaderCom
    },
    methods: {
        // 路由点击跳转页面
        // 传递参数 id = 1
        toHome() {
            // 1.通过path路径跳转,query传参：参数可以在url地址栏中看到
            // this.$router.push({path: "/", query:{id: 1}})
            // 2.通过name名称跳转,params传参：参数url地址栏看不到，相对安全
            this.$router.push({name: 'home', params:{id: 1}})
        }
    }
}
</script>

<style lang="less" scoped>

</style>