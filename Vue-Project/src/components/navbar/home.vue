<template>
  <div class="page">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for='(v,i) in photo' :key='i'>
          <img :src="v.img" alt="">
        </mt-swipe-item>
      </mt-swipe>

      <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/news">
                    <img src="../../assets/icon/menu1.png" alt="">
                    <div class="mui-media-body">新闻</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/photo">
                    <img src="../../assets/icon/menu2.png" alt="">
                    <div class="mui-media-body">图片</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/product">
                    <img src="../../assets/icon/menu3.png" alt="">
                    <div class="mui-media-body">商品</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="#">
                    <img src="../../assets/icon/menu4.png" alt="">
                    <div class="mui-media-body">location</div>
                  </a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="#">
                    <img src="../../assets/icon/menu5.png" alt="">
                    <div class="mui-media-body">Search</div>
                  </a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <a href="#">
                    <img src="../../assets/icon/menu6.png" alt="">
                    <div class="mui-media-body">Phone</div>
                  </a>
                </li>  
		        </ul> 
		  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      photo: []
    };
  },
  created() {
    axios({
      url: "http://www.escook.cn:3000/api/getlunbo"
    }).then(res => {
      // console.log(res);
      this.photo = res.data.message;
    });
  }
};
</script>

<style scoped>
.mint-swipe {
  height: 160px;
}
.mint-swipe img {
  width: 100%;
}
.mui-content img{
  width: 50%;
}
</style>