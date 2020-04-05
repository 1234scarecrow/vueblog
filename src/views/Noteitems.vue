<template>
  <div class="note">
    <h1 class="title crumbs">
      <router-link to="note">笔记 </router-link>
      <router-link to="note" class="iconfont">&#xe6f5;</router-link>
    </h1>
    <div v-for="note in notes" :key="note.nid" class="artcell">
      <router-link :to="'/note/'+note.nid">{{note.title}}</router-link>
      <span>{{note.pub_time}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        notes: [
          { nid: 0, title: "", pub_time: "" }
        ]
      }
    },
    mounted() {
      console.log("笔记组件加载");
      this.$http.get("/note")
        .then(res => {
          console.log("笔记内容")
          console.log(res.data.data)
          this.notes = res.data.data
        })
    }
  }
</script>