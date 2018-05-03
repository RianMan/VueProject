<template>
  <div id="app">
    <mt-header fixed title="Vue-Project">
			<router-link to="/" slot="left" v-if="$route.path !== '/home'">
				<mt-button @click='$router.go(-1)' icon="back">返回</mt-button>
			</router-link>
		</mt-header>
  
    <router-view/>
    
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/vip">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">Vip</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-upload"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
	name: "App"
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.mint-header {
  background-color: chocolate;
}
.page {
  padding-top: 40px;
	padding-bottom: 50px;
}
</style>
