<template>
  <div>
    <Header></Header>
    <div class="main">
      <!-- banner广告区 -->
      <Banner bgclass="blog_bg"></Banner>
      <!-- <collect></collect>
      <note></note>
      <jotting></jotting> -->
      <!-- 内容区 -->
      <div class="content">
        <!-- 内容区左侧 -->
        <div class="left">
          <!-- 笔记 -->
          <!-- <div class="note">
            <h1 class="title">
              <router-link to="note">笔记</router-link>
              <router-link to="note" class="iconfont">&#xe6f5;</router-link>
            </h1>
            <div v-for="note in notes" :key="note.nid" class="artcell">
              <router-link :to="'/note/'+note.nid">{{note.title}}</router-link>
              <span>{{note.pub_time}}</span>
            </div>
          </div> -->
          <Noteitems icondisplay="true"></Noteitems>
          <!-- 随笔 -->
          <!-- <div class="jotting">
            <h1 class="title">
              <router-link to="jotting">随笔</router-link>
              <router-link to="jotting" class="iconfont">&#xe6f5;</router-link>
            </h1>
            <div v-for="jotting in jottings" :key="jotting.jid" class="artcell">
              <router-link to="#">{{jotting.title}}</router-link>
              <span>{{jotting.pub_time}}</span>
            </div>
          </div> -->
          <Jottingitems icondisplay="true"></Jottingitems>
          <!-- 收藏 -->
          <!-- <div class="collect">
            <h1 class="title">
              <router-link to="collect">收藏</router-link>
              <router-link to="collect" class="iconfont">&#xe6f5;</router-link>
            </h1>
            <div v-for="collect in collects" :key="collect.cid" class="artcell">
              <a :href="collect.curl" target="_blank">{{collect.title}}</a>
              <span>{{collect.pub_time}}</span>
            </div>
          </div> -->
          <Collectitems></Collectitems>
        </div>
        <div class="right">
          <div class="tags">
            <span class="iconfont">&#xe706;</span>
            <span>
              <a href="https://www.javascript.com/" target="_blank">JavaScript</a>
            </span>
            <span>
              <a href="https://www.runoob.com/css/css-tutorial.html" target="_blank">CSS 3</a>
            </span>
            <span>
              <a href="https://cn.vuejs.org/" target="_blank">Vue.js</a>
            </span>
            <span>
              <a href="https://www.w3school.com.cn/" target="_blank">前端</a>
            </span>
            <span>
              <a href="https://500px.me/" target="_blank">摄影</a>
            </span>
            <span>
              <a href="http://www.zfrontier.com/board/2" target="_blank">外设</a>
            </span>
  
            <span>
              <a href="http://www.zfrontier.com/board/3" target="_blank">桌面</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from "@/components/Header.vue"
  import Footer from "@/components/Footer.vue"
  import Banner from "@/components/Banner.vue"
  import Noteitems from "@/views/Noteitems.vue"
  import Jottingitems from "@/views/Jottingitems.vue"
  import Collectitems from "@/views/Collectitems.vue"
  export default {
    data: () => {
      return {
        collects: [
          { cid: 0, title: "", curl: "" }
        ]
        // notes: [
        //   { nid: 0, title: "", pub_time: "" }
        // ],
        // jottings: [
        //   { jid: 0, title: "", pub_time: "" }
        // ]
      }
    },
    methods: {

    },
    mounted() {
      console.log("主页加载完毕");
      this.$http.get("collect")
        .then(res => {
          console.log("收藏内容")
          console.log(res.data.data)
          this.collects = res.data.data
        })
        // this.$http.get("/note")
        //   .then(res => {
        //     console.log(res.data.data)
        //     this.notes = res.data.data
        //   }),
        // this.$http.get("/jotting")
        //   .then(res => {
        //     console.log(res.data.data)
        //     this.jottings = res.data.data
        //   })
    },
    components: {
      Header,
      Footer,
      Banner,
      Noteitems,
      Jottingitems,
      Collectitems
      /*collect: {
        template: `
          <div class="arts collect">
            <h1>收藏</h1>
            <p v-for="collect in collects" :key=collect.cid>
              <a :href="collect.curl">{{collect.title}}</a>
            </p>
          </div>
        `,
        data: () => {
          return {
            collects: [
              { cid: 0, title: "", curl: "" }
            ],
          }
        },
        mounted() {
          console.log("收藏组件加载完毕");
          this.$http.get("/collect")
            .then(res => {
              // console.log(res.data.data)
              this.collects = res.data.data
            })
        }
      },
      note: {
        template: `
        <div>
          <h1>笔记</h1>
          <p v-for="note in notes" :key=note.nid>
            <span>{{note.title}}</span>
            <span>{{note.pub_time}}</span>
          </p>
        </div>
        `,
        data: () => {
          return {
            notes: [
              { nid: 0, title: "", pub_time: "" }
            ]
          }
        },
        mounted() {
          console.log("笔记组件加载完毕")
          this.$http.get("/note")
            .then(res => {
              console.log(res.data.data)
              this.notes = res.data.data
            })
        }
      },
      jotting: {
        template: `
          <div>
            <h1>随笔</h1>
            <p v-for="jotting in jottings" :key=jotting.jid>
              <span>{{jotting.title}}</span>
              <span>{{jotting.pub_time}}</span>
            </p>
          </div>
        `,
        data: () => {
          return {
            jottings: [
              { jid: 0, title: "", pub_time: "" }]
          }
        },
        mounted() {
          console.log("随笔组件加载完毕")
          this.$http.get("/jotting")
            .then(res => {
              console.log(res.data.data)
              this.jottings = res.data.data
            })
        }
      }*/
    }
  }
</script>
<style>
  /* banner */
  .banner {
    width: 100%;
    height: 300px;
    margin-top: -80px;
    box-sizing: border-box;
    /* border: 10px solid #0f0;
    background-color: #00ff0022; */
    background-image: url("../assets/images/blog_bg.png");
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 0 3px #92b6d5;
  }

  /* 内容区布局 */
  .content {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
  }

  /* .content>.left,
  .content>.right {
    padding: 15px;
  } */

  .content>.left {
    width: 58%;
    /* background-color: rgba(0, 255, 0, 0.137); */
  }

  .content>.right {
    width: 42%;
    /* background-color: #00d; */
  }

  /* 左侧内容区样式 */
  /* 笔记 / 收藏 / 随笔 三个区域 */
  .left>div {
    padding: 12px;
    margin: 30px 0;
    border: 1px solid #15456e11;
    box-shadow: 5px 5px 10px #15456e33;
  }
  /* 标题 */
  .left .title {
    display: flex;
    justify-content: space-between;
  }
  /* 标题 */
  .left .title>a:first-child{
    display: block;
    width: 60px;
    border-bottom: 2px solid #92b6d5;
    padding: 5px;
    margin-bottom: 10px;
  }
  /* 更多 */
  .left .title>a:last-child{
    color: #92b6d5 !important;
    display: block;
    padding: 5px;
    margin-bottom: 10px;
    line-height: 21px;
  }
  
  .title a:-webkit-any-link,.title a {
    color: #92b6d5;
    font-size: 14px;
    font-weight: bold;
  }

  /* 文章格子 */
  .artcell{
    padding: 10px 0;
    border-bottom: 1px dotted #15456e11;
  }
  .artcell a:-webkit-any-link,.artcell span {
    color: #15456e;
    font-size: 18px;
  }
  .artcell span{
    float: right;
    opacity: 0.75;
  }

  /* 右侧内容区样式 */
  .right div{
    margin: 30px 0;
    padding: 12px 42px;
  }
  .right>.tags a:-webkit-any-link{
    color: #15456e;
  }
  .right>.tags span:first-child{
    margin: 5px 12px; 
    text-shadow: 2px 2px 3px #15456e33;
  } 
  .right>.tags span:not(:first-child){
    /* box-sizing: border-box; */
    display: inline-block;
    font-size: 12px;
    height: 24px;
    line-height: 24px;
    margin: 10px 12px 0; 
    padding: 0 8px;
    border: 1px solid #15456e33;
    border-radius: 13px;
    box-shadow: 2px 2px 3px #15456e33;
    vertical-align:text-bottom;
  }
</style>