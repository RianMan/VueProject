<template>
  <div class="page">
      <info :list="picDet">
          <template slot="article">
            <vue-preview :slides="slide1" class="pum"></vue-preview>
          </template>
      </info>
      <comment :artid="$route.params.id"></comment>
  </div>
</template>

<script>
import info from "../common/article.vue";
import comment from "../common/comment.vue"
import axios from "axios"
export default {
    data(){
      return {
        picDet : [],
        slide1 :[]
      }
    },
    components :{
      info,
      comment
    },
    created(){
      axios({
        url: "http://www.escook.cn:3000/api/getimageInfo/" + this.$route.params.id
      }).then(res=>{
        console.log(res);
        this.picDet = res.data.message[0];
      });
      axios({
        url: "http://www.escook.cn:3000/api/getthumimages/" + this.$route.params.id
      }).then(res=>{
        console.log(res);
       
        this.slide1 = res.data.message.map((v)=>{
          return {src: v.src,
            msrc: v.src,
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400}
        })
        console.log(this.slide1);
        // this.picDet = res.data.message[0];
      });
    }
}
</script>

<style scoped>
.my-gallery img{
  /* width: 20%; */
  width: 100%;
  margin: 1%;
  box-shadow: 0 0 3px 0px;
}

figure{
    display: inline-block;
    margin: 5px;
    width: 20%;
}

</style>