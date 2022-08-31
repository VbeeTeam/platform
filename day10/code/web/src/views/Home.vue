<template>
  <div class="home content">
    <!-- <Header title="客户信息管理系统" /> -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="formInline.sex" placeholder="请选择性别">
          <el-option label="男" value="T"></el-option>
          <el-option label="女" value="F"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="info" @click="addCustomer">添加客户</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="序号" type="index" width="50"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="150"> </el-table-column>
      <el-table-column label="性别" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.sex == "T" ? "男" : "女" }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="150"> </el-table-column>
      <el-table-column prop="phone" label="手机号" width="150">
      </el-table-column>
      <el-table-column prop="description" label="备注" width="150">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
// import Header from '@/components/Header.vue'
export default {
  // 定义属性
  name: "Home",
  components: {
    // Header
  },
  data() {
    return {
      formInline: {
        name: "",
        sex: "",
      },
      tableData: [],
      currentPage4: 1,
      size: 5,
      total: 0,
    };
  },
  methods: {
    //查询
    onSubmit() {
      console.log("submit!", this.formInline);
      this.getList(this.formInline);
    },
    //条数改变时查询
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
      var obj = {
        page: this.currentPage4,
        size: val,
      };
      this.getList(obj);
    },
    //页数改变时查询
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage4 = val;
      var obj = {
        page: val,
        size: this.size,
      };
      this.getList(obj);
    },
    //新增客户
    addCustomer() {
      this.$router.push({ path: "/add" });
    },
    //编辑客户
    handleEdit(index, row) {
      this.$router.push({path: "/edit", query: {id: row.id}});
    },
    //删除客户
    handleDelete(index, row) {
      console.log(index, row);
      this.axios
        .delete("http://localhost:3000/delete", { data: { id: row.id } })
        .then((res) => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.$message({
              message: "删除成功",
              type: "success",
            });
            this.getList();
          }
        });
    },
    //获取客户列表
    getList(param) {
      this.axios
        .get("http://localhost:3000/list", {
          params: param,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.tableData = res.data.data;
            this.total = res.data.total;
          }
        });
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getList();
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>

<style lang='scss' scoped>
.home {
  .block {
    padding-top: 20px;
    text-align: left;
  }
}
</style>