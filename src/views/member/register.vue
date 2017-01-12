<template>
  <section class="login-view">
    <form>
      <div class="form-group">
        <input type="text" name="username" class="form-control" placeholder="请输入手机/邮箱" v-model="mobile">
        <div class="input-bg"></div>
      </div>
      <div class="form-group">
        <input type="password" name="password" class="form-control" PLACEHOLDER="请输入密码" v-model="password">
        <div class="input-bg"></div>
      </div>
      <button type="submit" @click="register" class="submit">注册</button>

            <p>{{mobile}}</p>
            <p>{{password}}</p>

      <div v-for="article in articles" class="text item">
        {{article.title}}
      </div>
      <img src="../../assets/logo.png" style="height:200px;width:200px">
    </form>
  </section>
</template>

<style lang="less">
  .login-view {
    padding-top: 50px;
    position: absolute;
    min-height: 100%;
    width: 100%;
    background-color: #f6f6f6;

    form {
      padding: 0px 31px 0px 31px;

      .form-group {
        margin: 30px 0 0;
        height: 34px;
        position: relative;

        .form-control {
          border: none;
          background-color: #f6f6f6;
          border-radius: 0px;
          box-shadow: none;
          outline: none;
          display: block;
          width: 100%;
          padding: 6px 12px;
          font-size: 14px;
          line-height: 1.42857143;
          color: #555;
        }

        .input-bg {
          position: absolute;
          top: 20px;
          height: 12px;
          width: 100%;
          border: solid #c4c4c4;
          border-width: 0 1px 1px 1px;
        }

      }
      .submit {
        width: 163px;
        background-color: #fe8233;
        color: #fff;
        border: none;
        border-radius: 36px;
        margin-top: 45px;
        padding: 8px 12px;
        font-size: 15px;
        outline: none;
        display: block;
        margin-right: auto;
        margin-left: auto;
      }

    }

  }
</style>

<script>
  export default{
    data () {
      var mobile = ''
      var password = ''
      var articles = []
      return { mobile: mobile, password: password, articles: articles }
    },
    methods: {
      register () {
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
          // url: "widget?type=register_page&ajax=yes&action=register",
          // url: "http://10.45.19.32:8080"
          headers: {

          },
          emulateJSON: true
        }).then(function (response) {
          // 这里是处理正确的回调

          this.articles = response.data.subjects
            // this.articles = response.data["subjects"] 也可以
        }, function (response) {
          // 这里是处理错误的回调
          console.log(response)
        })
//        alert('功能尚未完善')
        return false
      }
    },
    components: {}
  }

</script>
