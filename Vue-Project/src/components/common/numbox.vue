<template>
  <div class="box">
    <button @click=" minus ">-</button>
    <input type="text" v-model='num'>
    <button @click="add">+</button>

  </div>
</template>

<script>
export default {
    data(){
        return{
            num : ''
        }
    },
    props :['value',"max"],
    // updated(){
    //     this.$emit("input",this.value);
    // },
    watch:{
        value:{
            handler(nv,ov){
                this.num = nv               
            },
            immediate: true
        }
    },
    methods:{
        minus(){
            if(this.num>0){
                this.num--
            }else{
                this.num = 0;
            }
            this.$emit("input",this.num);
        },
        add(){
            if(this.num == this.max){
                this.num = this.max
            }else{
                this.num++;
            }
            this.$emit("input",this.num);
        }
    }
}
</script>

<style scoped>
.box{
    overflow: hidden;
}
input{
    width: 60px;
    outline: none;
    text-align: center;
    line-height: 1;
}
button{
    width: 40px;
}
input,button{
    height: 35px;
    float: left;
}
</style>
