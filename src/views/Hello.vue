<template>
  <div id="index">
    <!--导航-->
    <ul class="nav">
      <li v-for="item in menuList"
          :key="item.path"
          :style="{backgroundImage: 'url(' + item.menuImgUrl + ')' }"
          @click="clickMenuItem(item)">
      </li>
      <li :style="{backgroundImage: 'url(' + require('@/assets/nav/add.png') + ')'}"></li>
    </ul>

    <!--用户未登录时的遮罩层-->
    <div class="overlay" v-if="isLogin"></div>

    <!--用户未登录时的登录框-->
    <div class="loginBox" v-if="isLogin">
      <el-form :model="formData">
        <el-form-item>
          <p>Login to your account</p>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="username" v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>


</template>
<script>
import menuList from '@/config/menuList'
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Hello',
  data() {
    return {
      isLogin: false,
      menuList: null,
      formData: {
        username: null,
        password: null
      }
    }
  },
  mounted () {
    // let isLogin = 1;
    // if (1 == 1) {
    //
    // }
    axios.post('http://localhost:8888/user/login',{
      username: 'warmwind',
      password: 'qq2693387413'
    },{
      headers: {
        'Content-Type': 'application/json',
        'withCredentials': true
      }
    }).then(result => {
      this.menuList = result.data.data
      console.log(this.menuList)
      console.log(result.data)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    // 点击图标跳转到对应的功能页面
    clickMenuItem(item) {
      console.log(item)
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

/deep/ input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;  margin: 0;
}
// 主div flex定位
#index {
  display: flex;
  justify-content: center;
  align-items: center;
  .wh(100%, 100%);
  background-image: url("@/assets/test.jpg");
}
//导航在主div居中 设置
.nav {
  border-radius: 12px;
  background-color: rgba(240,248,255,.3);
}
ul {
  height: 80px;
  display: flex;
  justify-content:  space-between;
  align-items: center;
}
li {
  list-style: none;
  width: 64px;
  height: 64px;
  margin: 0 20px;
}
li:hover {
  border-radius: 10px;
  background-color: rgba(153,153,153,.3);
}
// 遮罩层
.overlay {
  .wh(100%, 100%);
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(30px);
  z-index: 999;
}
// 登录外层盒子
.loginBox {
  .wh(500px, 300px);
  //background-color: azure;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 12px;
}
// 登录表单
.el-form {
  .wh(400px, 300px);
  //background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.el-form-item {
  width: 100%;
  margin: 10px 0;
}
//登录框p标签
.el-form-item:nth-child(1) {
  height: 50px;
  p {
    font-size: 22px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 1px;
  }
}
/deep/ .el-input__inner:focus {
  outline: none;
}
/deep/ .el-input__inner::placeholder {
  letter-spacing: 1px;
}
// 账号和密码输入框
.el-form-item:nth-child(2),
.el-form-item:nth-child(3) {
  height: 50px;
  .el-input {
    .wh(340px, 40px);
    margin-left: 30px;
    /deep/ .el-input__inner {
      caret-color: white;
      width: 340px !important;
      border: 0px;
      border-radius: 0;
      border-bottom: 2px solid #ccc;
      background-color: transparent;
      font-size: 20px;
      padding-left: 10px;
      margin-top: 5px;
    }
  }
}
// 登录按钮
.el-form-item:nth-child(4) {
  height: 50px;
  .el-button {
    .wh(360px, 40px);
    margin-left: 25px;
    border-radius: 5px;
    background-color: #409EFF;
    color: #fff;
    border: 0px;
    font-size: 20px;
  }
}
</style>
