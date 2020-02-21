<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less">
html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img {
   margin:0;
   padding:0;
}
fieldset, img,input,button { border:none; padding:0;margin:0;outline-style:none; }
#app{
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
// .el-submenu [class^=fa] {
//   vertical-align: baseline;
//   margin-right: 10px;
// }

// .el-menu-item [class^=fa] {
//   vertical-align: baseline;
//   margin-right: 10px;
// }

.toolbar {
  background: #f2f2f2;
  padding: 10px;
  /*border:1px solid #dfe6ec;*/
  margin: 10px 0px;
  .el-form-item {
    margin-bottom: 10px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
