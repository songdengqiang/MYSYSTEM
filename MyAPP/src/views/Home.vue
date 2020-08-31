<template>
  <div class="home">
    <header class="headerCss">
      <h4>知识图谱管理原型系统平台</h4>
      <div class="deck">
        <div></div>
        <div></div>
        <div class="decoration">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="decoration">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="decoration1">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="decoration1">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="topBar topBar1">
        <div class="btns">实时监控</div>
        <div class="btns">设备信息</div>
        <div class="btns">仓储信息</div>
      </div>
      <div class="topBar topBar2">
        <div class="btns">故障信息</div>
        <div class="btns">维修记录</div>
        <div class="btns">系统设置</div>
      </div>
    </header>
    <router-view></router-view>
    <footer class="footerCss">
      <h6>系统的设置</h6>
      <h6>东华大学机械工程智能制造研究所</h6>
      <h6 >日期：{{times}}</h6>
    </footer>
  </div>
</template>

<script>
import api from '@/assets/Js/home/home'
// import echarts from 'echarts'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      times: '',
      workShip: '车间1',
      workShipNum: 0
    }
  },
  methods: {},
  watch: {
  },
  mounted () {
    // 页面时间的定义
    setInterval(() => { this.times = api.getTime() }, 1000)
  }
}
</script>

<style scoped>
/* 头部样式的设置 */
  @import url("../assets/Css/home/header.css");
  @import url("../assets/Css/common/decoration.css");
  @import url("../assets/Css/common/decoration1.css");
  @import url("../assets/Css/common/btn1.css");
/* 主体内容的设置 */

/* 尾部样式的设置 */
  @import url("../assets/Css/home/footer.css");
/* 全局样式的设置 */
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .home{
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: black;
  }
</style>
