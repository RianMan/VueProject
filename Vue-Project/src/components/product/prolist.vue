<template>
  <div class="page">
    <div  class="container goods-list">
      <div @click="$router.push('/product/detail/'+v.id)" v-for='(v,i) in list' :key='i' class="goods-item">
          <img :src="v.img_url" alt="">
          <h4>{{v.title}}</h4>
        <div class="info">
          <p class="price">
            <span class="nowPrice">￥{{ v.sell_price }}</span> 
            <span><del>￥{{ v.market_price }}</del></span>
          </p>
          <p class="sale">
            <span>热卖中</span> 
            <span>剩{{ v.stock_quantity }}件</span>
          </p>
        </div>
      </div>
      </div>
      <mt-button size="large" v-show="isshow" type="primary" @click='add'>加载更多</mt-button>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from 'mint-ui'
export default {
    data(){
      return {
        currentPage: 1,
        list:[],
        isshow : true
      }
    },
    methods :{
      getData(){
          axios({
              url:"http://www.escook.cn:3000/api/getgoods?pageindex="+this.currentPage
            }).then(res=>{
              if(res.data.message.length == 0){
                  this.isshow = false;
                  Toast('没有更多商品了');      
              }
              this.list.push(...res.data.message)
              
          })
      },
      add(){
        this.currentPage++;
        this.getData();
      }
    },
    created(){
      this.getData();
    }
}
</script>

<style scoped >
.goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 3px;
}
.goods-list .goods-item {
    width: 48%;
    border: 1px solid #ccc;
    margin: 1%;
    box-shadow: 0 0 7px #aaa;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.goods-list .goods-item img {
    width: 100%;
}
.goods-list .goods-item .info {
    background-color: #eee;
}

.info {
    display: flex;
    justify-content: space-between;
    color: #26a2ff;
}
.goods-list .goods-item .info p {
    margin: 0;
    margin-top: 10px;
    font-size: 13px;
}
.goods-list .goods-item .info p:nth-child(1) .nowPrice {
    color: red;
    font-size: 15px;
    margin-right: 8px;
}
</style>