<template>
  <div>
    <Header></Header>
    <div class="main">
      <Banner bgclass="note_bg"></Banner>
      <!-- <div class="note">
        <h1 class="title crumbs"> -->
          <!-- 面包屑导航 -->
          <!-- <router-link to="/">首页 -</router-link>
          <router-link to="/note">笔记</router-link>
        </h1>
        <div v-for="note in notes" :key="note.nid" class="artcell">
          <router-link to="#">{{note.title}}</router-link>
          <span>{{note.pub_time}}</span>
        </div>
      </div> -->
      <Noteitems icondisplay="false"></Noteitems>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from "@/components/Header.vue"
  import Footer from "@/components/Footer.vue"
  import Banner from "@/components/Banner.vue"
  import Noteitems from "@/views/Noteitems.vue"
  export default {
    data: () => {
      return {
        notes:[
          {nid:0,title:"",pub_time:""}
        ]
      }
    },
    mounted() {
      // console.log("Note页面加载完毕")
      // this.$http.get("/note")
      // .then(res=>{
      //   console.log(res.data.data)
      //   this.notes=res.data.data
      // })
    },
    components: {
      Header,
      Footer,
      Banner,
      Noteitems
    }
  }
</script>
<style>
  /* .note{
    width: 80%;
    margin: 0 auto;
  } */
  
</style>