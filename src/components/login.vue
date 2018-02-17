<template>
<div id="login">
  <el-row type="flex" justify="space-around" align="middle">
    <div>
        <el-card class="box-card" style="max-width: 350px">
          <el-input placeholder="Email" name="email" v-model="email"></el-input>
          <el-input placeholder="Password" type="password" name="password" v-model="password" style="margin-bottom:20px;"></el-input>

          <el-button @click="login" class="beauty" style="width:100%; height:50px;">Login</el-button>
          <hr>
          <!-- <p style="text-align:center; color:grey;">or</p> -->
          <el-button style="width:100%;" class="el-button beauty blue-purple" @click="fbLogin">
            <span>Continue with Facebook</span>
          </el-button>
        </el-card>
        <div class="bottom-wrapper">
          <el-button @click="register" class="beauty">Register</el-button>
        </div>           
    </div>
  </el-row>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {},
  methods: {
    login() {
      axios
        .post("http://35.198.204.175:3030/api/users/login", {
          email: this.email,
          password: this.password
        })
        .then(data => {
          localStorage.setItem("token", "data.data.token");
          this.$router.push({ name: "task" });
        })
        .catch(err => console.error(err));
    },
    register() {
      this.$router.push({ name: "register" });
    },
    fbLogin() {
      FB.login(
        function(response) {
          if (response.authResponse) {
            console.log(response);
            axios
              .post("http://35.198.204.175:3030/api/users/login-facebook", {
                tokenFB: response.authResponse.accessToken
              })
              .then(data => {
                localStorage.setItem("token", data.data.token);
                this.$router.push({ name: "todo" });
              })
              .catch(err => console.error(err));
          } else {
            console.log(response, "belum connect");
          }
        },
        { scope: "public_profile,email" }
      );
    }
  }
};
window.fbAsyncInit = function() {
  FB.init({
    appId: "1530275277041978",
    cookie: true,
    xfbml: true,
    version: "v2.11"
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
  text-align: center;
  margin-top: 100px;
}
</style>
