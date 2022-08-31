<template>
  <div class="cart wrap">
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <van-swipe-cell v-for="(item, index) in list" :key="item.goodsId">
        <div class="li">
          <van-checkbox
            :name="item.goodsId"
            @click="clickCheckbox"
          ></van-checkbox>
          <van-card
            :num="item.num"
            :price="item.sellingPrice"
            :desc="item.goodsIntro"
            :title="item.goodsName"
            :thumb="item.goodsCoverImg"
          >
            <template #tags>
              <van-tag plain type="danger">{{ item.tag }}</van-tag>
            </template>
            <template #footer>
              <van-stepper
                @change="sum"
                v-model="item.num"
                theme="round"
                button-size="22"
                disable-input
              />
            </template>
          </van-card>
        </div>
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="del(index)"
          />
        </template>
      </van-swipe-cell>
    </van-checkbox-group>
    <van-submit-bar
      v-show="list.length > 0"
      :price="sumTotal * 100"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked" @click="allSelect">全选</van-checkbox>
    </van-submit-bar>
    <div class="tit" v-show="list.length == 0">
      <van-icon name="warning" size="2rem" color="#1baeae" />
      <h4>您还没有任何商品哦！</h4>
      <router-link to="/">去添加</router-link>
    </div>
    <!-- 密码输入框 -->
    <van-password-input
      v-show="moneyBoolean"
      :value="value"
      :error-info="errorInfo"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />
    <!-- 数字键盘 -->
    <van-number-keyboard
      v-show="moneyBoolean"
      v-model="value"
      :show="showKeyboard"
      @blur="showKeyboard = false"
    />
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      result: [],
      list: [],
      checked: false,
      sumTotal: 0,
      value: "",
      errorInfo: "",
      showKeyboard: true,
      moneyBoolean: false,
    };
  },
  methods: {
    // 提交订单
    onSubmit() {
      console.log(this.result);
      if (this.result.length == 0) {
        Toast("请选择商品");
      } else {
        // 填支付密码加入订单
        this.moneyBoolean = true;
      }
    },
    //   全选反选
    allSelect() {
      // if(this.checked){
      //     this.$refs.checkboxGroup.toggleAll(true);
      // }else{
      //     this.$refs.checkboxGroup.toggleAll(false);
      // }
      this.$refs.checkboxGroup.toggleAll(this.checked);
      this.sum();
    },
    // 点击一个复选框
    clickCheckbox() {
      console.log("result:", this.result);
      var filterArr = this.list.filter((item) => {
        // includes是否包含
        return this.result.includes(item.goodsId);
      });
      if (filterArr.length == this.list.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
      this.sum();
    },
    // 合计方法
    sum() {
      var sumPrice = 0;
      console.log("result:", this.result);
      // 循环商品数组进行过滤出已经选择的商品进行合计 商品单价 * 商品数量
      var filterArr = this.list.filter((item) => {
        // includes是否包含
        return this.result.includes(item.goodsId);
      });
      console.log(filterArr);
      filterArr.forEach((item) => {
        sumPrice += item.sellingPrice * item.num;
      });
      this.sumTotal = sumPrice;
      console.log(this.sumTotal);
    },
    // 删除购物车商品
    del(index) {
      console.log(index);
      this.list.splice(index, 1);
    },
  },
  watch: {
    value(value) {
      if (value.length === 6 && value !== "123456") {
        this.errorInfo = "密码错误";
      } else if (value.length === 6 && value === "123456") {
        // 1.取出原有订单数据
        var oldList = this.$store.state.orderList;
        // 2.过滤出选择的商品
        var filterArr = this.list.filter((item) => {
          // includes是否包含
          return this.result.includes(item.goodsId);
        });
        // 3.将选择的商品添加到原有订单数据里
        var newList = oldList.concat(filterArr);
        // 4.保存订单数据,将数据提交到vuex保存
        this.$store.commit("mutationsOrderList", newList);
        // 5.删除购物车里添加到订单的数据(将未选择的购物车商品重新保存)
        var noSelect = this.list.filter((item) => {
          // includes是否包含
          return !this.result.includes(item.goodsId);
        });
        this.$store.commit("mutationsCartList", noSelect)
        // 6.跳转订单
        this.$router.push({ path: "/order" });
      } else {
        this.errorInfo = "";
      }
    },
  },
  created() {
    console.log(this.$store.state.cartList);
    this.list = this.$store.state.cartList;
  },
};
</script>

<style lang="less" scoped>
.cart {
  .li {
    display: flex;
    padding-left: 15px;
  }
  .van-card {
    flex: 1;
    padding-left: 0;
  }
  .van-submit-bar {
    bottom: 50px;
  }
  .tit {
    text-align: center;
    padding-top: 100px;
    h4 {
      font-size: 16px;
      color: #1baeae;
    }
    a {
      font-size: 16px;
      color: #1989fa;
    }
  }
  .delete-button {
    height: 100%;
  }
}
</style>