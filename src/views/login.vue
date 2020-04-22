<template>
  <div>
    <h1>登录</h1>
    <input type="text" v-model="uname"><br><br>
    <input type="text" v-model="upwd"><br><br>
    <button @click="login">登录</button>
    <h1>
      <span>登陆状态:</span>
      <span>{{$store.state.isLogin}}</span><br>
      <span>当前用户:</span>
      <span>{{$store.state.uname}}</span>
    </h1>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
        uname: "1234scarecrow",
        upwd: "1178862608@qq"
      }
    },
    methods: {
      login() {
        let data = {
          uname: this.uname,
          upwd: this.upwd
        }
        console.log(data);
        data = this.$serialize(data);
        console.log("!!!!!!!!数据:")
        console.log(data);
        this.$http.get('/login' + '?' + data)
          .then(res => {
            alert(res.data.msg);
            // 登陆成功后的操作：
            console.log(res.data.msg)
            this.$store.commit("login")
            // window.location.href="/addnote"  // 跳转到note列表
            this.$store.getters.nameInfo
          })
      }
    }
  }
</script>
<style>
  
</style>