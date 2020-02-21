<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10"
        class="logo"
        :class="collapsed?'logo-collapse-width':'logo-width'">
        <img src="../assets/logo.png"/>
        <span class="header-title">{{collapsed?'':sysName}}</span>
      </el-col>
      <el-col :span="10">
        <div class="tools" @click.prevent="collapse">
          <i class="el-icon-turn-off"></i>
        </div>
      </el-col>
      <el-col :span="4" class="userinfo">
            <el-dropdown trigger="hover">
                <span class="userinfo-inner"><img :src="sysUserAvatar" /> {{sysUserName}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>我的消息</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
       </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
        <!--导航菜单-->
        <el-menu :default-active="$route.path"
        unique-opened router
        @open="handleopen"
        @close="handleclose"
        @select="handleselect"
        class="el-menu-vertical-demo"
        :collapse="collapsed"
        background-color="#556677"
        text-color="#fff"
        active-text-color="#ffd04b">
            <template v-for="(item,index) in $router.options.routes">
                <el-submenu :key="index" :index="index+''" v-if="!item.leaf&&!item.hidden">
                    <template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
                    <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">
                      <div v-if="!child.hidden"><span slot="title">{{child.name}}</span></div>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item :key="index" v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
                  <i :class="item.iconCls"></i><span slot="title">{{item.children[0].name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
      </aside>
      <section class="content-container">
        <div>
          <el-col :span="24" class="breadcrumb-container">
            <el-breadcrumb class="breadcrumb-inner" separator-class="el-icon-arrow-right">
              <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
               {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
           <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      sysName: 'Vue后台管理模板',
      collapsed: false,
      sysUserName: '孙晨宇',
      sysUserAvatar: require('../assets/staff-account.png')
    }
  },
  methods: {
    // 折叠导航栏
    collapse: function () {
      this.collapsed = !this.collapsed
    },
    handleopen () {},
    handleclose () {},
    handleselect: function (key, item) {},
    showMenu (i, status) {
      this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none'
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .header {
    height: 60px;
    color: #fff;
    .logo {
      height: 60px;
      background-color: green;
      font-size: 22px;
      padding-left: 20px;
      padding-right: 20px;
      border-color: rgba(238, 241, 146, 0.3);
      border-right-width: 1px;
      border-right-style: solid;
      img {
        width: 40px;
        float: left;
        margin-left:0px;
        margin-right:5px;
        margin-top: 10px;
      }
      .header-title {
        line-height: 60px;
      }
    }
    .logo-collapse-width {
      width: 65px;
    }
    .logo-width {
      width: 230px;
    }
    .tools{
      margin-left: -10px;
      width:14px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
    .el-icon-turn-off{
      color:black;
      font-weight: bolder;
      font-size: 20px;
    }
    .userinfo {
        text-align: right;
        padding-right: 15px;
        float: right;
        height: 40px;
        .userinfo-inner {
            cursor: pointer;
            color:#000;
            line-height: 60px;
            img {
                width: 40px;
                height: 40px;
                border-radius: 20px;
                margin: 10px 0px 10px 10px;
                float: right;
            }
        }
    }
  }
  .main {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    aside{
        flex:0 0 230px;
        width: 230px;
        background-color: #556677;
        .el-menu{
          height: 100%;
          border:0px;
        }
        .collapsed{
          width:65px;
          .item{
            position: relative;
          }
          .submenu{
            position:absolute;
            background-color: #556677;
            color: #fff;
            top:0px;
            left:60px;
            z-index:99999;
            height:auto;
            display:none;
          }
          .el-menu-item{
            background-color: #556677;
            color: #fff;
          }
        }
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 230px;
        height: 100%;
      }
    }
    .menu-collapsed{
        flex:0 0 65px;
        width: 60px;
    }
    .menu-expanded{
        flex:0 0 230px;
        width: 230px;
    }
    .content-container{
      // background: #f1f2f7;
      flex:1;
      // position: absolute;
      // right: 0px;
      // top: 0px;
      // bottom: 0px;
      // left: 230px;
      overflow-y: scroll;
      padding: 10px;
      .breadcrumb-container {
        Padding-bottom: 10px;
        .breadcrumb-inner {
          color: #fff;
          float: left;
        }
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
}
</style>
