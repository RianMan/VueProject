
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
function setStorage(val){
    window.localStorage.setItem("list",JSON.stringify(val))
}
function getStorage(){
    var str = window.localStorage.getItem("list");
    console.log(str);
    if(str != ""){
        return JSON.parse(str);        
    }else{
        return [];
    }
}
export default new Vuex.Store({
    state :{
        list: getStorage() 
    },
    getters : {
        change:function(state){
          return  function(id,num){
            if(state.list.length>0){
               var res = state.list.find((v)=>{
                   return v.id == id
               })
               if(res){
                   res.count += num;
               }else{
                state.list.push({id:id,count:num})                  
               }
            }else{
                state.list.push({id:id,count:num})                
            }           
            setStorage(state.list)
          }
        },
        total:function(state){
            var sum = 0;
            state.list.forEach((v)=>{
                sum += v.count
            })
            return sum;
        },
        cartIds:function(state){
            return state.list.map((v)=>{
                return v.id
            }).join(",")
        },
        getCount:function(state){
            return function(id){
                return state.list.find((v)=>{
                    return v.id == id
                  }).count
            }
        },
        update:function(state){
            return function(arr){
                arr.forEach((v)=>{
                    state.list.forEach((k)=>{
                        if(k.id==v.id){
                            k.count = v.count;
                        }
                    })
                })
                setStorage(state.list)
            }
        }
    }
  })
