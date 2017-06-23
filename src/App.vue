<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>    
  </div>
</template>
 
<script>
export default {
  name: 'app',
  components:{
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
body {
	/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
	// background: #1F2D3D;
	font-family: Arial, SimSun, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
	font-size: 14px;
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
	transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
// table的body字号统一12px
.el-table{
    td{
        font-size: 12px;
    }
}

// 修改左侧导航默认样式
.el-submenu__icon-arrow{
    transform: rotateZ(90deg) scale(0.83, 0.83);
}
.el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow{
    transform: rotateZ(0deg) scale(0.83, 0.83);
}
</style>
