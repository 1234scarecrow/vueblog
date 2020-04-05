<template>
  <div>
    <Header></Header>
    <div class="main">
      <!-- 输入标题 -->
      <input type="text" placeholder="收藏标题" v-model="title">
      <span>{{title}}</span>
      <!-- 输入链接 -->
      <input type="text" placeholder="收藏的链接" v-model="curl">
      <span>{{curl}}</span>
      <!-- 输入简介 -->
      <input type="text" placeholder="收藏的简介" v-model="intr">
      <span>{{intr}}</span>
      <button @click="addCollect">√</button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  export default {
    data:()=>{
      return{
        title:"",
        curl:"",
        intr:""
      }
    },
    methods:{
      addCollect(){
        console.log("添加收藏")
        let data={
          title:this.title,
          curl:this.curl,
          intr:this.intr
        }
        console.log(data);
        data=this.$serialize(data);
        console.log(data);
        this.$http.post("/addcollect",data).then(res=>{
          if(res.data.code==200){
            alert("提交成功")
          }else{
            alert("提交失败"+res.data.msg)
          }
        })
      }
    }
  }
</script>