<template>
  <el-row class="clearfix">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="20"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
</template>

<style scoped>
  .bg-purple {
    background: #2a5a92;
  }
  .bg-purple-light {
    background: #ca577d;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 600px;
  }
  .clearfix:after{
  content:"";
  display: block;
  clear:both;
  height:0;
  line-height: 0;
  visibility: hidden;
}
</style>
