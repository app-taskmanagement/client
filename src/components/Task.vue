<template>
<el-container>
    <el-header>
        <el-row class="header">
           <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">{{name}}</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-row>   
    </el-header>
      <el-main>
        <el-row class="task" :gutter="20">
            
        </el-row>
      </el-main>
      <el-footer>
        <el-row class="footer">
          <p>Built @taskManagement</p>
        </el-row>
      </el-footer>
    </el-container>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      name: "Surat Izin",
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card {
  margin-left: 30px;
}
.footer {
  text-align: center;
  color: white;
}
.task {
  padding-left: 10px;
  display: flex;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
