<template>
  <div id="app">
    <mt-header fixed title="Vue-Project">
			<router-link to="/" slot="left" v-if="$route.path !== '/home'">
				<mt-button @click='$router.go(-1)' icon="back">返回</mt-button>
			</router-link>
		</mt-header>
  
    <router-view/>
    
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-my" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-my" to="/vip">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">Vip</span>
			</router-link>
			<router-link class="mui-tab-item-my" to="/cart">
				<span class="mui-icon mui-icon-upload"><span class="mui-badge">{{$store.getters.total}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-my" to="/search">
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
.mint-header.is-fixed{
  z-index: 888;
  width: 100%;
}
.page {
  width: 100%; 
  padding-top: 40px;
	padding-bottom: 50px;
}
.mui-bar-tab .mui-tab-item-my {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-my .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-my .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}		
</style>
