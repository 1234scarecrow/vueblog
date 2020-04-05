<template>
  <div>
    <Header></Header>
    <div class="main">
      <Banner bgclass="collect_bg"></Banner>
      <!-- <div class="collect">
        <h1 class="title crumbs">
          <router-link to="/">首页&nbsp;-&nbsp;</router-link>
          <router-link to="/collect">收藏</router-link>
        </h1>
        <div v-for="collect in collects" :key="collect.cid" class="artcell">
          <a :href="collect.curl" target="_blank">{{collect.title}}</a>
          <span>{{collect.pub_time}}</span>
        </div>
      </div> -->
      <Collectitems></Collectitems>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from "@/components/Header.vue"
  import Footer from "@/components/Footer.vue"
  import Banner from "@/components/Banner.vue"
  import Collectitems from "@/views/Collectitems.vue"
  export default{
    data:()=>{
      return{
        collects: [
          { cid: 0, title: "", curl: "" }
        ]
      }
    },
    mounted() {
      console.log("collect页面加载完毕")
      this.$http.get("/collect")
      .then(res=>{
        console.log(res.data.data)
        this.collects=res.data.data
      })
    },
    components:{
      Header,
      Footer,
      Banner,
      Collectitems
    }
  }
</script>
<style>
  .crumbs{
    margin: 20px 0 10px;
  }
</style>