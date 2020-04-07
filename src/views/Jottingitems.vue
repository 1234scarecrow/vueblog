<template>
  <div class="jotting">
    <h1 class="title crumbs">
      <router-link to="jotting">随笔</router-link>
      <router-link to="jotting" class="iconfont" :class="icondisplay">&#xe6f5;</router-link>
    </h1>
    <div v-for="jotting in jottings" :key="jotting.jid" class="artcell">
      <router-link :to="'/jotting/'+jotting.jid">{{jotting.title}}</router-link>
      <span>{{jotting.pub_time}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        jottings: [
          { jid: 0, title: "", pub_time: "" }
        ],
        icondisplay:false
      }
    },
    props:{
      icondisplay:{
        type:String,
        default:"true"
      }
    },
    mounted() {
      console.log("随笔组件加载完毕")
      this.$http.get("/jotting")
        .then(res => {
          console.log("随笔内容")
          console.log(res.data.data)
          this.jottings = res.data.data
        })
    }
  }
</script>

<style>
  .true{
    display: inline-block;
  }
  .false{
    display: none;
  }
</style>