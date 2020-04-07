<template>
  <div class="header">
    <div class="main headerContent">
      <router-link to="/">
        <img src="../assets/images/logo2.png" alt="logo">
      </router-link>
      <ul>
        <li>
          <router-link to="/note">
            笔记
          </router-link>
        </li>
        <li>
          <router-link to="/collect">
            收藏
          </router-link>
        </li>
        <li>
          <router-link to="/jotting">
            随笔
          </router-link>
        </li>
        <li>
          <router-link to="/me">
            我
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .header{
    width: 100%;
    height: 75px;
    /* background-color: rgba(255, 153, 255, 0.411); */
    line-height: 75px;
  }
  .headerContent{
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  .headerContent ul{
    display: flex;
  }
  .headerContent ul li{
    width: 80px;
    text-align: center;
  }
  .headerContent a{
    color: #15456e;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
  }
  .headerContent img{
    height: 50px;
    margin: 15px 15px 0;
  }
</style>