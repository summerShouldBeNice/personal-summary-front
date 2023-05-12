<template>
  <div id="index">
    <!--导航 根据用户信息查询-->
    <ul class="nav">
      <li v-for="item in menuList"
          :key="item.path"
          :style="{backgroundImage: 'url(' + item.menuImg + ')' }"
          @click="clickMenuItem(item)">
      </li>
      <li :style="{backgroundImage: 'url(' + require('@/assets/nav/add.png') + ')'}"></li>
    </ul>

    <div class="overlay" v-if="isLogin"></div>

    <div class="loginBox" v-if="isLogin"></div>
  </div>


</template>
<script>
import menuList from '@/config/menuList'
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Nav',
  data() {
    return {
      isLogin: false,
      menuList: null
    }
  },
  mounted () {
    // let isLogin = 1;
    // if (1 == 1) {
    //
    // }
    axios.post('http://localhost:8080/user/login',{
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

    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
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
  //display: flex;
  //justify-content: center;
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
.loginBox {
  .wh(500px, 300px);
  background-color: azure;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
.overlay {
  .wh(100%, 100%);
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(30px);
  z-index: 999;
}
</style>
