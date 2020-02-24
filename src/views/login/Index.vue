<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-wrap">
        <li
          :class="{'current':item.current}"
          v-for="item in menuTab"
          :key="item.id"
          @click="checkMenu(item)"
        >{{item.txt}}</li>
      </ul>
    </div>
    <el-button>默认按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      menuTab: [
        { txt: "登录", current: true },
        { txt: "注册", current: false }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    checkMenu(data) {
      this.menuTab.forEach(i => {
        i.current = false;
      });
      data.current = true;
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}
.login-wrap {
  width: 330px;
  margin: 0 auto;
}
.menu-wrap {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
