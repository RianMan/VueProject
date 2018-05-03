<template>
  <div class="page">
      <ul class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell mui-media" v-for='(v,i) in newsList' :key="i">
					<router-link :to="'/news/detail/'+v.id " class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" :src="v.img_url">
						<div class="mui-media-body">
							<h4 class="mui-ellipsis">{{ v.title }}</h4>
							<p class="mui-ellipsis" v-text='v.zhaiyao'></p>
						</div>
					</router-link>
				</li>
				
			</ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return {
      newsList : []
    }
  },
  created(){
    axios({
      url:"http://www.escook.cn:3000/api/getnewslist"
    }).then(res=>{
      this.newsList = res.data.message;
      // console.log(res);
    })
  }
}
</script>

<style>

</style>