<template>
  <div>
    <Header></Header>
    <div class="main">
      <Banner bgclass="jotting_bg"></Banner>
      <!-- <div class="jotting">
        <h1 class="title crumbs">
          <router-link to="/">首页 -</router-link>
          <router-link to="/note">随笔</router-link>
        </h1>
        <div v-for="jotting in jottings" :key="jotting.jid" class="artcell">
          <router-link to="#">{{jotting.title}}</router-link>
          <span>{{jotting.pub_time}}</span>
        </div>
      </div> -->
      <Jottingitems icondisplay="false"></Jottingitems>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from "@/components/Header.vue"
  import Footer from "@/components/Footer.vue"
  import Banner from "@/components/Banner.vue"
  import Jottingitems from "@/views/Jottingitems.vue"
  export default{
    data:()=>{
      return{
        jottings: [
          { jid: 0, title: "", pub_time: "" }
        ]
      }
    },
    mounted() {
      // console.log("jotting页面加载完毕")
      // this.$http.get("/jotting")
      // .then(res=>{
      //   console.log(res.data.data)
      //   this.jottings=res.data.data
      // })
    },
    components:{
      Header,
      Footer,
      Banner,
      Jottingitems
    }
  }
</script>