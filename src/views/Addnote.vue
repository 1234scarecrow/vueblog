<template>
  <div>
    <Header></Header>
    <div class="main">
      <!-- Banner栏 -->
      <Banner bgclass="note_bg"></Banner>
      <!-- 文章区域 -->
      <div id="article" class="article">
        <input type="text" placeholder="请输入标题" v-model="title">
        <!-- <span>{{title}}</span><br><br>
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入内容" v-model="content"></textarea> -->
        <mavon-editor v-model="content"></mavon-editor>
        <button @click="addNote"><span>提交 </span></button>
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
        title: "",
        content: "",
        pubtime: new Date().toLocaleDateString()
      }
    },
    methods: {
      addNote() {
        let data = {
          title: this.title,
          content: this.content,
          pub_time:this.pubtime
        }
        console.log(data)
				//把需要提交给服务器的数据进行序列化，转换为 k=v&k=v&.. 形式
        data = this.$serialize(data)
        console.log(data)
        this.$http.post("/addnote",data).then(res=>{
          if(res.data.code==200){
            alert("提交成功")
            window.location.href="/note"  // 跳转到note列表
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
  /* .article>button span:after{
    content: '√';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  .article>button:hover span{
    padding-right: 25px;
  }
  .article>button:hover span:after {
    opacity: 1;
    right: 0;
  } */
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