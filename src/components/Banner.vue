<template>
  <div class="banner" :class="bgclass">
  </div>
</template>
<script>
  export default {
    data: () => {
      return {

      }
    },
    props:{
      bgclass:{
        type:String,
        default:"blog_bg"
      }
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
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 0 3px #92b6d5;
  }
  .blog_bg{
    background-image: url("../assets/images/blog_bg.png");
  }
  .note_bg{
    background-image: url("../assets/images/note_bg.png") !important;
  }
  .collect_bg{
    background-image: url("../assets/images/collect_bg.png") !important;
  }
  .jotting_bg{
    background-image: url("../assets/images/jotting_bg.png") !important;
  }
  .me_bg{
    background-image: url("../assets/images/me_bg.png") !important;
  }
</style>