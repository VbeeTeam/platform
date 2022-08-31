<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="username">
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  // 定义属性
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          console.log(this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>

<style lang='scss' scoped>
.login {
  width: 400px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  ::v-deep .el-form {
    .el-form-item{
        margin-top: 40px;
    }
    .el-form-item__label {
      width: 70px !important;
    }
    .el-form-item__content {
      margin-left: 80px !important;
    }
  }
}
</style>