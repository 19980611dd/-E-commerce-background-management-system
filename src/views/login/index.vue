<template>
  <div id="app">
    <div class="container">
      <div class="login-box">
        <!-- 头像区域 -->
        <div class="avatar"><img src="@/assets/logo.png" alt="" /></div>
        <!-- 登录表单区域 -->
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
          auto-complete="on"
          label-position="left"
        >
          <!-- 用户名 -->
          <el-form-item prop="username" class="username">
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder=""
              type="text"
              tabindex="1"
              auto-complete="on"
            >
              <i slot="prefix" class="el-input__icon el-icon-user-solid"></i
            ></el-input>
          </el-form-item>
          <el-form-item prop="mobile">
            <el-input
              ref="password"
              v-model="loginForm.password"
              type="passwordType"
              placeholder=""
              tabindex="2"
              auto-complete="on"
            >
              <i slot="prefix" class="el-input__icon el-icon-unlock"></i
            ></el-input>
          </el-form-item>
          <div class="btns">
            <el-button
              class="loginBtn"
              type="primary"
              style="width: 20%; margin-bottom: 30px"
              @click="login"
              >登录</el-button
            >
            <el-button
              class="loginBtn"
              type="info"
              style="width: 20%; margin-bottom: 30px"
              @click="resetLoginForm"
              >重置</el-button
            >
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            trigger: 'blur',
            message: '密码不能为空'
          }
        ]
      }
    }
  },
  methods: {
    // 重置表单
    resetLoginForm() {
      // console.log(this)
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      this.$refs.loginFormRef.validate(async (validate) => {
        // console.log(validate)
        if (!validate) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        console.log(res)
        if (res.meta.status !== 200) return this.$message.error('登陆失败')
        this.$message.success('登陆成功')
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    }
  }
}
</script>
<style scoped lang="less">
#app,
body,
html {
  width: 100%;
  height: 100%;
  .container {
    background-color: #2b4b6b;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-box {
      width: 450px;
      height: 300px;
      background-color: #fff;
      border-radius: 5px;
      position: relative;
      .username {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
      }
      .login-form {
        margin-top: 80px;
        padding: 0 15px;
      }
    }
    .avatar {
      position: absolute;
      top: -50px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 100px;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 10px green;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    .btns {
      display: flex;
      justify-content: flex-end;
    }
    .el-input__inner {
      margin-top: 10px;
    }
  }
}
</style>
