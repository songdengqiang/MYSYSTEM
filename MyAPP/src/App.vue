<template>
  <div id="app">
<!--一级路由的占位符-->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted () {
    // 网页访问地址的获取
    const str = this.$el.baseURI.split('#')[0]
    this.GLOBEL.pathID = str.split(':')[0] + ':' + str.split(':')[1] + this.GLOBEL.port
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
