<template>
  <div>
    <Header></Header>
    <div class="main">
      <input type="text" placeholder="请输入标题" v-model="title">
      <span>{{title}}</span><br><br>
      <textarea name="" id="" cols="30" rows="10" placeholder="请输入内容" v-model="content"></textarea>
      <span>{{content}}</span><br><br>
      <button @click="addNote">提交</button>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from "@/components/Header.vue"
  import Footer from "@/components/Footer.vue"
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
            // this.router.push("/note")  // 跳转到note列表
          }else{
            alert("提交失败"+res.data.msg)
          }
        })
      }
    },
    components:{
      Header,
      Footer
    }
  }
</script>
<style>
  
</style>