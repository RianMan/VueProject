<template>
  <div id="app">
    <mt-header fixed title="Vue-Project"></mt-header>
    <div class="page">
      <router-view/>
    </div>
    <h1>底部</h1>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{padding:0;margin:0;list-style:none;}
.mint-header{
  background-color: chocolate;
}
.page{
  padding-top: 40px;
}
</style>
