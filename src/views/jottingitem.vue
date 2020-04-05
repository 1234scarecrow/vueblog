<template>
  <div>
    <Header></Header>
    <div class="main">
      <Banner bgclass="jotting_bg"></Banner>
      
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