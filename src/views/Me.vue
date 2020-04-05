<template>
  <div>
    <Header></Header>
    <div class="main">
      <Banner bgclass="me_bg"></Banner>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from "@/components/Header.vue"
  import Footer from "@/components/Footer.vue"
  import Banner from "@/components/Banner.vue"
  export default{
    data:()=>{
      return{

      }
    },
    components:{
      Header,
      Footer,
      Banner
    }
  }
</script>