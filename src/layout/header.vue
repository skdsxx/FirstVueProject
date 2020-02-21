<template>
  <div id="app">
    <div class="header">
      <div class="header-Logo">
        <img id="header-img" src="../assets/logo.png" />
        <div class="header-title">
          <font id="header-title-font">后台管理系统 测试</font>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {}
</script>

<style scoped>
.header {
  background-color: darkgreen;
  height: 90px;
}
#header-img {
  margin-left: 20px;
  margin-top: 15px;
  width: 60px;
  height: 60px;
  float: left;
}
.header-title {
  float: left;
  line-height: 90px;
}
#header-title-font {
  display: inline;
  margin-left: 15px;
  font-size: 36px;
  font-weight: bolder;
  color: #ffffff;
}
</style>
