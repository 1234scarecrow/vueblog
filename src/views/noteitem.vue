<template>
  <div>
    <Header></Header>
    <div class="main">
      <Banner bgclass="note_bg"></Banner>
      <!-- 面包屑导航 -->
      <h1 class="title crumbs">
        <!-- 面包屑导航 -->
        <router-link to="/">首页 -</router-link>
        <router-link to="/note"> 笔记</router-link>
      </h1>
      <!-- 内容 -->
      <p>{{note.title}}</p>
      <div id="article">
        <mavon-editor v-model="note.content"/>
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
        note: {
          nid: 0,
          title: "",
          content: "",
          pubtime: ""
        },
        editor: null
      }
    },
    mounted() {
      // 发送get请求, 取到笔记文章详情, title / content / pubtime
      let id = this.$route.params.id
      console.log("Note详情页面")
      console.log(id)
      // this.$http.get("/note/id")
      this.$http.get(`/note/${id}`)
        .then(res => {
          console.log(res)
          this.note = res.data.data
          console.log(this.note)
        })


    },

    components: {
      Header,
      Footer,
      Banner
    }
  }
</script>