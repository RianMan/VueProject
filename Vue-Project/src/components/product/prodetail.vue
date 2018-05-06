<template>
  <div class="page">
    <div class="mui-card">
        <div class="mui-card-content">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for='(v,i) in photoList' :key='i'>
              <img :src="v.src" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
    </div>
      
      <div class="mui-card">
          <!--页眉，放置标题-->
          <div class="mui-card-header">{{proInfo.title}}</div>
          <!--内容区-->
          <div class="mui-card-content-inner">
            <div class="price">
              <span>
                市场价：
                <del>￥7988</del>
              </span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>销售价：
                <span class="sale_price">￥7200</span>
              </span>
            </div> 
            <div class="count">
              <span class="mui-pull-left">购买数量：</span> 
              <numbox v-model='count' :max='20'></numbox>
            </div> 
            <div class="btns">
              <button class="mint-button mint-button--primary mint-button--normal">
                <label class="mint-button-text">立即购买</label>
              </button> 
              <button @click="addCart" class="mint-button mint-button--danger mint-button--normal"><!----> 
                <label class="mint-button-text" >加入购物车</label>
              </button>
            </div></div>
      </div>

      <div class="mui-card">
          <!--页眉，放置标题-->
          <div class="mui-card-header">商品参数</div>
          <!--内容区-->
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <p>商品货号：{{proInfo.goods_no}}</p> 
              <p>库存情况：{{proInfo.stock_quantity}}件</p> 
              <p>上架时间：{{proInfo.add_time | format("YY-MM-DD HH:mm")}}</p>
          </div>
          </div>
          <!--页脚，放置补充信息或支持的操作-->
          <div class="mui-card-footer">
            <button class="mint-button mint-button--primary mint-button--large is-plain"><!----> 
            <label class="mint-button-text">商品描述</label></button> <br> 
            <button class="mint-button mint-button--danger mint-button--large is-plain"><!---->
             <label class="mint-button-text">商品评论</label></button>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import format from "../../filters/format"
import numbox from "../common/numbox.vue"
export default {
  data(){
    return {
      photoList :[],
      proInfo : {},
      count : 10 
    }
  },
  methods:{
    addCart(){
   
      this.$store.getters.change(this.$route.params.id,this.count);
      
    }
  },
  filters:{
    format
  },
  created(){
    axios({
      url:"http://www.escook.cn:3000/api/getthumimages/"+ this.$route.params.id
    }).then(res=>{
      this.photoList = res.data.message;
    });
    axios({
      url:"http://www.escook.cn:3000/api/goods/getinfo/"+ this.$route.params.id
    }).then(res=>{
      this.proInfo = res.data.message[0]
      // console.log(this.proInfo);
    });
  },
  components : {
    numbox
  }
}
</script>

<style>
.mint-swipe{
  height: 300px;
}
.mint-swipe-item{
  text-align: center;
  line-height: 1;
}
.mint-swipe img{
  width: 60%;
  margin-top: 20px;
}
.mui-card-content-inner {
    position: relative;
    padding: 15px;
}
.mui-card-content-inner > div {
    margin: 10px 0;
}
.sale_price {
    color: red;
    font-size: 18px;
}
.count{
  overflow: hidden;
}
.count span{
  height: 35px;
  line-height: 35px;
}
.count .box{
  float: left;
  margin-left: 10px;
}
</style>