<template>
  <div>
    <!-- 网页头 -->
    <Header></Header>
    <!-- 网页主体 -->
    <div class="main">
      <!-- Banner 栏 -->
      <Banner bgclass="jotting_bg"></Banner>
      <!-- 文章区域 -->
      <div id="article" class="article">
        <input type="text" placeholder="请输入标题" v-model="title">
        <mavon-editor v-model="content" boxShadowStyle="0 2px 12px 0 #15456e33"></mavon-editor>
        <button @click="addJotting">提交</button>
      </div>
    </div>
    <!-- 网页脚 -->
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
        title: "",
        content: "",
        pubtime: new Date().toLocaleDateString
      }
    },
    methods: {
      addJotting(){
        let data={
          title: this.title,
          content:this.content,
          pub_time:this.pubtime
        }
        console.log(data)
        data=this.$serialize(data)
        console.log(data)
        this.$http.post("/addjotting",data).then(res=>{
          if(res.data.code==200){
            alert("提交成功")
            window.location.href="/jotting"  // 跳转到随笔列表
          }else{
            alert("提交失败"+res.data.msg)
          }
        });
      }
    },
    components:{
      Header,
      Footer,
      Banner
    }
  }
</script>
<style>
  /* 标题 */
  .article>input{
    text-decoration: none;
    outline: 0 none;
    border: none;
    box-sizing: border-box;
    margin: 20px 0;
    padding: 8px 25px;
    width: 100%;
    box-shadow: #15456e33 0px 2px 12px 0px
  }
  /* 内容 */

  /* 提交按钮 */
  .article>button{
    width: 125px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #15456e11;
    outline: none;
    box-shadow: 5px 5px 10px #15456e33;
    background-color: #92b6d533;
    color: #15456e;
    margin: 20px 0;
    float: right;
    text-decoration: none;
    transition: 0.25s;
  }
  .article>button:hover{
    background-color: #92b6d577;
  }
  
  /* 清除浮动对页脚影响 */
  .article:after{
    content:"";
    display: block;
    clear:both;
  }
</style>