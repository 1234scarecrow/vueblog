<template>
  <div class="collect">
    <h1 class="title crumbs">
      <router-link to="collect">收藏</router-link>
      <span>&nbsp;-&nbsp;</span>
      <router-link to="collect"></router-link>
    </h1>
    <div v-for="collect in collects" :key="collect.cid" class="artcell">
      <a :href="collect.curl" target="_blank">{{collect.title}}</a>
    </div>
  </div>
</template>

<script>
  export default{
    data:()=>{
      return{
        collects: [
          { cid: 0, title: "", curl: "" }
        ]
      }
    },
    mounted(){
      console.log("收藏组件加载完毕")
      this.$http.get("/collect")
      .then(res=>{
        console.log("收藏内容")
        console.log(res.data.data)
        this.collects=res.data.data
      })
    }
  }
</script>