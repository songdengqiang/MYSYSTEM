<template>
  <div class="mainPage">
    <div class="login" v-if="login">
      <div class="Logo">
        <h1 class="Logo_Hogo"><i>知识图谱管理原型系统V1</i></h1>
      </div>
      <section class="Login">
        <form name="MyForm" action="" >
          <div class="Login_fade-box">
            <!--输入账户-->
            <input type="text" name="accouts" class="Login_UserName" placeholder="请输入账户" v-model="Account">
            <!--输入密码-->
            <input type="password" placeholder="请输入密码" v-model="Password">
            <button type="button" class="button1" @click="logins">登陆</button>
            <button type="button" class="button1" @click="registers">注册</button>
          </div>
        </form>
      </section>
      <div class="Circle">
        <div class="Circle_Inner">
        </div>
      </div>
    </div>
    <div class="register" v-if="register">
        <div class="Logo">
          <h1 class="Logo_Hogo"><i>平台登录账户注册-界面</i></h1>
        </div>
        <section class="Login">
          <form name="MyForm" action="" >
            <div class="Login_fade-box">
              <!--输入账户-->
              <input type="text" name="accouts" class="Login_UserName" placeholder="请输入账户" v-model="Account">
              <!--输入密码-->
              <input type="password" placeholder="请输入密码" v-model="Password">
              <button type="button" class="button1" @click="posts">注册</button>
              <button type="button" class="button1" @click="back">返回</button>
            </div>
          </form>
        </section>
        <div class="Circle">
          <div class="Circle_Inner">
          </div>
        </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

// @ 可以检索组件的位置
export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      pathId: null,
      login: true,
      register: false,
      Account: '',
      Password: ''
    }
  },
  methods: {
    logins () {
      const message = {}
      message.account = this.Account
      message.password = this.Password
      const _this = this
      // console.log(message)
      axios.post(this.GLOBEL.pathID + '/login/check', message).then(res => {
        if (res.data === '成功！') {
          alert('登录成功！')
          setTimeout(() => {
            _this.$router.push('/home/monitor')
          }, 500)
          // this.Effective_time = 70
        } else {
          alert('账号密码错误，请重新输入！')
          _this.Account = ''
          _this.Password = ''
        }
      }).catch(function (err) {
        console.log(err)
        alert('服务器连接失败!,尝试本地登录!')
        setTimeout(() => {
          _this.$router.push('/home/monitor')
        }, 100)
      })
    }, // 登录逻辑
    registers () {
      this.login = false
      this.register = true
    }, // 注册逻辑
    back () {
      this.login = true
      this.register = false
    },
    posts () {
      const message = {}
      message.account = this.Account
      message.password = this.Password
      // console.log(message)
      axios.post(this.GLOBEL.pathID + '/login/insertData', message).then(res => {
        if (res.data === '成功！') {
          alert('注册成功！')
          this.Account = ''
          this.Password = ''
          // this.Effective_time = 70
        } else {
          alert('注册失败！')
          this.Account = ''
          this.Password = ''
        }
      }).catch(function (err) {
        console.log(err)
        alert('服务器连接失败！')
      })
    }
  }
}
</script>
<!--利用scoped来约束组件的css独立影响组件-->
<style scoped>
  @import url('../assets/Css/login/login.css');
</style>
