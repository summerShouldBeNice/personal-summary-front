<template>
  <div id="index">
    <!--<div class="nav_box">-->
    <!--  <ul class="nav">-->
    <!--    <li>1</li>-->
    <!--    <li>2</li>-->
    <!--    <li>3</li>-->
    <!--  </ul>-->
    <!--</div>-->
    <!--导航 根据用户信息查询-->
    <ul class="nav">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>3</li>
      <li>3</li>
    </ul>

    <div class="overlay" v-if="isLogin"></div>

    <div class="loginBox" v-if="isLogin"></div>
  </div>


</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Nav',
  data() {
    return {
      isLogin: true
    }
  },
  mounted () {
    let isLogin = 1;
    if (1 == 1) {

    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
#index {
  display: flex;
  justify-content: center;
  align-items: center;
  .wh(100%, 100%);
  background-image: url("@/assets/test.jpg");
}
//导航
.nav {
  display: flex;
  justify-content: center;
  border-radius: 12px;
  background-color: aliceblue;
}

ul {
  height: 60px;
  display: flex;
  justify-content:  space-between;
  align-items: center;
  //padding: 0;
}
li {
  list-style: none;
  width: 40px;
  height: 40px;
  margin: 0 10px;
  background-color: blanchedalmond;
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
