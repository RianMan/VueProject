<template>
  <div class="comment">
      <h4>发表评论</h4>
      <textarea v-model="content" name="" id="" cols="30" rows="3"></textarea>
      <mt-button @click="pushCom" type="default" size="large">发表评论</mt-button>
      <ul>
          <li v-for='(v,i) in comlist' :key='i'>
            <p>{{v.content}}  </p>
            <span>评论时间:{{v.add_time | format("YYYY年MM月DD日 HH:mm:ss") }}</span>
            <b class="user">{{ v.user_name }}</b>
          </li>
      </ul>
      <mt-button type="danger" @click="moreInfo" v-show="isshow" size="large">显示更多</mt-button>
  </div>
</template>

<script>
import axios from "axios";
import format from "../../filters/format";
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      comlist: [],
      currentPage: 1,
      isshow: true,
      content:""
    };
  },
  props: ["artid"],
  created() {
      this.getData();
  },
  filters: {
    format
  },
  methods: {
    getData() {
      axios({
        url: `http://www.escook.cn:3000/api/getcomments/${
          this.artid
        }?pageindex=${this.currentPage}`
      }).then(res => {
         if(res.data.message.length == 0){
             this.isshow = false;
             Toast('没有更多信息了...');
         } 
         this.comlist.push(...res.data.message);
      });
    },
    moreInfo() {
        this.currentPage ++;
        this.getData();
    },
    pushCom(){
        console.log(this.content);
        axios({
            url:`http://www.escook.cn:3000/api/postcomment/${this.artid}`,
            method:"post",
            data : "content = ${this.content}"
        }).then(res=>{
            if(res.data.status == 0){
                this.comlist.unshift({
                    time : new Date() ,
                    content : this.content ,
                    user_name : "Jack-Zcm"
                })
                this.content = "";
            }
        })
    }
  }
};
</script>

<style>
.comment {
  margin-bottom: 10px;
}
.comment h4 {
  line-height: 50px;
  border-bottom: 1px solid #ccc;
}
.comment textarea {
  margin-bottom: 10px;
}
.comment .mint-button--default {
  background-color: goldenrod;
  color: #fff;
}
.comment ul {
  margin-bottom: 10px;
}
.comment li {
  border-bottom: 1px solid #999;
  overflow: hidden;
  position: relative;
}
.comment li p {
  color: #333;
  margin: 0;
  line-height: 40px;
}
.comment li span {
  font-size: 10px;
  color: #aaa;
}
.comment li b {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 12px;
}
.comment .mint-button--danger {
  background-color: peru;
  color: whitesmoke;
}
</style>
