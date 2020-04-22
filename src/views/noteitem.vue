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
      <p class="articletitle">{{note.title}}</p>
      <div id="article">
        <mavon-editor 
          v-model="note.content" 
          :subfield="false" 
          :toolbars="toolbars" 
          defaultOpen="preview" 
          :toolbarsFlag="false"
          boxShadowStyle="0 2px 12px 0 #15456e33"
          :ishljs="true"
          />
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
        props: {
          defaultOpen: {
            type: String,
            default: "edit"
          }
        },
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: false, // 标记
          superscript: false, // 上角标
          subscript: false, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: false, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: false, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: false, // 下一步
          trash: false, // 清空
          save: false, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: false, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true, // 预览
          boxShadow: false
        },
      }
    },
    // props:{
    //   defaultOpen:{
    //     type: String,
    //     default: preview
    //   }
    // },
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
<style>
  .articletitle {
    font-size: 24px;
    margin: 10px 0;
    color: #15456e;
  }
</style>