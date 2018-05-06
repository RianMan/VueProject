<template>
  <div class="page">
      <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
            <router-link to="/photo/0" class="mui-control-item-my">
                全部
            </router-link>
            <router-link :to="'/photo/'+v.id" v-for='(v,i) in navlist' :key="i"   class="mui-control-item-my">
                {{ v.title }}
            </router-link>
        </div>
        <div class="img-area">
            <div @click="$router.push('/photodetail/'+v.id)" class="img-box" v-for='(v,i) in piclist' :key="i" >
                <img v-lazy="v.img_url" >
                <p>
                  <b>{{v.title}}</b>
                  <br>
                  {{v.zhaiyao}}
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import mui from "../../assets/js/mui";
import axios from "axios";
export default {
  data() {
    return {
      navlist: [],
      piclist: [],
      
    };
  },
  watch: {
    '$route.params.id':function(){
        axios({
      url: "http://www.escook.cn:3000/api/getimages/" + this.$route.params.id
    }).then(res => {
      
      if (res.data.status == 0) {
        this.piclist = res.data.message;
      }
    })
    }
  },
  created() {
    axios({
      url: "http://www.escook.cn:3000/api/getimgcategory"
    }).then(res => {
      if (res.data.status == 0) {
        this.navlist = res.data.message;
      }
    });
    axios({
      url: "http://www.escook.cn:3000/api/getimages/" + this.$route.params.id
    }).then(res => {
      
      if (res.data.status == 0) {
        this.piclist = res.data.message;
      }
    });
  }
};
</script>

<style scoped>
.mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item-my.mui-active {
  color: #007aff;
}

.mui-segmented-control.mui-segmented-control-inverted .mui-control-item-my {
  color: inherit;
  border: 0;
}
.mui-segmented-control .mui-control-item-my:first-child {
  border-left-width: 0;
}
.mui-segmented-control.mui-scroll-wrapper .mui-control-item-my {
  display: inline-block;
  width: auto;
  padding: 0 20px;
  border: 0;
}

.mui-segmented-control .mui-control-item-my {
  line-height: 38px;
  display: table-cell;
  overflow: hidden;
  width: 1%;
  -webkit-transition: background-color 0.1s linear;
  transition: background-color 0.1s linear;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #007aff;
  border-color: #007aff;
  border-left: 1px solid #007aff;
}
.img-area{
  margin-top: 45px; 
  padding: 0 8px;
}
.img-area img{
  width: 100%;
}
.img-area .img-box{
  position: relative;
  margin: 5px 0;
}
.img-area .img-box p{
  position: absolute;
  bottom: 0;
  color: #eee;
  background-color: rgba(0, 0, 0, .5);
  text-align: left;
  line-height: 24px;
  padding:5px;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>