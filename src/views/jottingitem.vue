<template>
  <div>
    <Header></Header>
    <div class="main">
      <Banner bgclass="jotting_bg"></Banner>
      <!-- 面包屑导航 -->
      <h1 class="title crumbs">
        <router-link to="/">首页 -</router-link>
        <router-link to="/jotting"> 随笔</router-link>
      </h1>
      <!-- 内容 -->
      <p class="articletitle">{{jotting.title}}</p>
      <div id="article">
        <mavon-editor 
          v-model="jotting.content"
          :subfield="false" 
          :toolbars="toolbars" 
          defaultOpen="preview" 
          :toolbarsFlag="false"
          boxShadowStyle="0 2px 12px 0 #15456e33"
        ></mavon-editor>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue"
  import Footer from "@/components/Footer.vue"
  import Banner from "@/components/Banner.vue"
  export default {
    data: () => {
      return {
        jotting: {
          jid: 0,
          title: "",
          content: "",
          pubtime: ""
        }
      }
    },
    mounted() {
      // 发送get请求, 取到随笔文章详情, title / content / pubtime
      let id = this.$route.params.id
      console.log(id);
      console.log("Jotting详情页面")
      console.log(id)
      this.$http.get(`/jotting/${id}`)
        .then(res => {
          console.log("随笔内容")
          console.log(res.data.data)
          this.jotting = res.data.data
        })
    },
    components: {
      Header,
      Footer,
      Banner
    }
  }
</script>
<style>
  .articletitle{
    font-size: 24px;
    margin: 10px 0;
    color: #15456e;
  }
</style>