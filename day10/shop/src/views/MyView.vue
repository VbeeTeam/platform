<template>
    <div class="my wrap">
        <div class="card">
            <img src="../assets/img/user.png" alt="">
            <h5 v-if="userInfo">登录名：{{ userInfo["用户名"] }}</h5>
        </div>
        <van-cell title="我的订单" is-link to="/order"/>
        <van-cell title="关于我们" is-link to="/about"/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userInfo: null
        }
    },
    created(){
        console.log(localStorage.getItem("userInfo"))
        this.userInfo = JSON.parse(localStorage.getItem("userInfo")) 
    }
}
</script>
<style lang="less" scoped>
.my{
    .card{
        width: 90%;
        height: 115px;
        background-color: #51c7c7;
        border-radius: 8px;
        box-shadow: 0 0 8px #ccc;
        margin: 20px auto;
        display: flex;
        align-items: center;
        img{
            margin: 0 20px;
        }
        h5{
            font-size: 16px;
            color: #ffffff;
            font-weight: normal;
        }
    }
}
</style>