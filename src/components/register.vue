<template>
  <el-row type="flex" justify="space-around" align="middle" id="register">
      
    <div>
        <el-card class="box-card" style="max-width: 350px">
          <el-input placeholder="Name" name="name" v-model="name"></el-input>
          <el-input type="email" placeholder="Email" name="email" v-model="email"></el-input>
          <el-input placeholder="Password" type="password" name="password" v-model="password"></el-input>
          <el-input placeholder="Retype Password" type="password" name="password" v-model="retype_password" style="margin-bottom:20px;"></el-input>
          <el-button @click="register" class="beauty" style="width:100%; height:50px;">Register</el-button>
        </el-card>
        <div class="bottom-wrapper">
          <el-button @click="toLogin" class="beauty">Login</el-button>
        </div> 
    </div>
  </el-row>
</template>

<script>
import notify from "notifyjs"
import axios from "axios";
import validator from "email-validator";
export default {
  data() {
    return {
      email: null,
      password: null,
      name: null,
      retype_password: null,
      alert: null
    };
  },
  methods: {
    register() {
      if (!validator.validate(this.email)) {
        this.email = "";
        this.name = "";
        this.password = "";
        this.retype_password = "";
        this.$notify.error({
          title: 'Error',
          message: 'Email tidak valid'
        });
      } else {
        if (this.retype_password == this.password) {
          axios
            .post("http://35.198.204.175:3030/api/users/register", {
              email: this.email,
              name: this.name,
              password: this.password,
              retype_password: this.retype_password
            })
            .then(data => {
                console.log(data);
              localStorage.setItem("token", "data.data.token");
              this.$router.push({ name: "task" });
            })
            .catch(err => console.error(err));
        } else {
          this.email = "";
          this.name = "";
          this.password = "";
          this.retype_password = "";
          this.$notify.error({
          title: 'Error',
          message: 'Password Berbeda'
        });
        }
      }
    },
    toLogin() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
#register {
  text-align: center;
  margin-top: 100px;
}
</style>