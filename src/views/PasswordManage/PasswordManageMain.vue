<template>
  <div id="PasswordManageMain">
    <el-container>
      <el-header>
        <el-input v-model="searchWord" placeholder="search" suffix-icon="el-icon-search">
        </el-input>
      </el-header>
      <el-main>
          <div v-for="list in lists" :key="list.id" id="passwordManageItem">
            <span class="id">{{list.id}}.</span>
            <span class="project">{{list.project}}</span>
            <span class="username">{{list.username}}</span>
            <span class="password">{{list.password}}</span>
            <span class="fun_button">
              <el-button type="primary">修改</el-button>
              <el-button type="primary">删除</el-button>
            </span>
            <span>
              历史记录
            </span>
          </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import generateDataArray from '@/test-resources/fakerData'
export default {
  name: "PasswordManageMain",
  data() {
    return {
      searchWord: "",
      lists: null
    }
  },
  mounted () {
    this.lists = generateDataArray(10);
    console.log(this.lists)
  }
}
</script>

<style lang="less" scoped>
#PasswordManageMain {
  //background-color: #cccccc;
}
.el-container {
  width: 80%;
  background-color: #F8F6F4;
  margin: 0 auto;
}
.el-header {
  //background-color: #B3C0D1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px !important;
}
.el-input {
  width: 80%;
  //height: 38px;
  /deep/ .el-input__inner {
    padding-left: 5px;
    font-size: 22px;
    letter-spacing: 0.5px;
    width: 100%;
    height: 38px;
    border: 1px solid #ccc;
    border-radius: 9px;
    text-indent: 10px;
  }
  /deep/ .el-input__inner:focus {
    outline: none;
  }
  /deep/ .el-icon-search:before {
    font-size: 24px;
  }
}
#passwordManageItem {
  width: 95%;
  height: 80px;
  background-color: rgba(227, 244, 244, .3);
  margin: 10px auto;
  border-radius: 10px;
  display: flex;
  align-items: center;

  span {
    margin: 0 auto;
    //background-color: rgba(196, 223, 223, .2);
    //font-size: 18px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .id {
    width: 30px;
  }
  .id, .project, .username, .password {
    border-radius: 5px;
  }
  .id:hover, .project:hover, .username:hover, .password:hover {
    background-color: rgba(210, 233, 233, .3);
  }
  .project {
    width: 100px;
  }
  .username {
    width: 150px;
  }
  .password {
    width: 150px;
  }
  .fun_button {
    .el-button {
      width: 70px;
      height: 40px;
      box-sizing: border-box;
    }
  }
}
#passwordManageItem:hover {
  box-shadow: #999 1px 1px 10px 1px;
}
</style>
