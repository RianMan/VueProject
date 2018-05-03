<template>
  <div class="page">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for='(v,i) in photo' :key='i'>
          <img :src="v.img" alt="">
        </mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return {
      photo : []
    }
  },
  created(){
    axios({
      url : 'http://www.escook.cn:3000/api/getlunbo'
    }).then(res=>{
      console.log(res);
      this.photo = res.data.message;
    })
  }
}
</script>

<style scoped>
.mint-swipe{
  height: 200px;
}
.mint-swipe img{
  width: 100%;
}
</style>