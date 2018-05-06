<template>
  <div class="news_detail">
      <h4>{{list.title}}</h4>
      <p>
        <span>发表时间:{{ list.add_time | format('YY-MM-DD HH:mm')}}</span>
        <span class="mui-pull-right">点击:{{ list.click }}次</span>
      </p>
      <hr>
      <slot name="article"></slot>
      <p v-html='list.content'></p>
  </div>
</template>

<script>
import format from '../../filters/format'
export default {
    props : ["list"],
    filters :{
        format
    }
}
</script>

<style>
.news_detail{
  padding: 0 10px ; 
}
.news_detail img{
  width: 100%;
}
</style>
