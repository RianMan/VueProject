<template>
  <div class="news_detail">
      <h4>{{newsDetail.title}}</h4>
      <p>
        <span>发表时间:{{newsDetail.add_time | format("YYYY年MM月DD日 HH:mm")}}</span>
        <span class="mui-pull-right">点击:{{newsDetail.click}}次</span>
      </p>
      <hr>
      <p v-html='newsDetail.content'></p>

      <comment :artid="id"></comment>
  </div>
</template>

<script>
import axios from "axios"
import format from "../../filters/format"
import comment from "../common/comment"

export default {
    data(){
      return {
        newsDetail : {},
        id:''
      }
    },
    created(){
      var id = this.$route.params.id;
      this.id = this.$route.params.id;
      axios({
        url:"http://www.escook.cn:3000/api/getnew/"+id
      }).then(res=>{
        this.newsDetail = res.data.message[0];
      })
    },
    filters:{
      format
    },
    components:{
      comment
    }
}
</script>

<style>
.news_detail{
  padding:40px 10px 50px 10px; 
}
.news_detail img{
  width: 100%;
}
</style>