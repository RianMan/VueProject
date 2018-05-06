<template>
  <div class="page">
      <ul>
        <li v-for='(v,i) in list' :key="i">
          <mt-switch v-model="value"></mt-switch>
          <div class="show">
              <img :src="v.thumb_path" alt="">
              <div class="title">
                <h1>{{v.title}}</h1>
                <p>
                  <span class="price mui-pull-left">{{v.sell_price}}</span>
                  <numbox v-model='v.count'  class="mui-pull-left"></numbox>
                  <span class="del mui-pull-left">删除</span>
                </p>
              </div>
          </div>
        </li>
      </ul>

  </div>
</template>

<script>
import axios from 'axios'
import numbox from '../common/numbox.vue'
export default {
  data(){
    return {
      list :[],
      value:true
    }
  },
  components:{
    numbox
  },
  watch:{
      list:{
        handler(nv,ov){
          // console.log(nv);
          this.$store.getters.update(nv)
        },
        deep:true
      }
  },
  created(){
    axios({
      url:"http://www.escook.cn:3000/api/goods/getshopcarlist/"+this.$store.getters.cartIds
    }).then(res=>{
      res.data.message.forEach((v)=>{
          v.count = this.$store.getters.getCount(v.id);
      })
      this.list = res.data.message;
      // console.log(this.list);
    })
  }
}
</script>

<style scoped>
.page label.mint-switch{
  width: 60px;
  float: left;
  height: 100%;
}
.page ul{
  width: 100%;
}
.page li{
  height: 120px;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #aaa;
  margin:  2px;
  width: 100%;
}
.page  .show{
  
  margin-left: 60px;

  height: 100%;
}
.page .title{
  overflow: hidden;
  padding:  5px;
}
.page .title h1{
  font-size: 14px;
  padding: 5px;

}
.page .title .price{
  color: red;
}
.page .title .box{
  margin: 0 10px;
}
.page  .show img{
  width: 60px;
  height: 60px;
  float: left;
}
</style>
