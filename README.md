# VueProject#

一个vue实现的小网站
##关于vue中组件传值的一些小总结

1.**父传子**:
	在父传子这种情况下,一般我们会利用子组件的自定义属性来传递,然后再子组件中通过props来接受传递过来的属性名;

ex: <com :value="msg"></com>
然后我们在子组件中通过 props :［'value'］就可以拿到这个值,然后我们就像访问自己data中的值一样去访问这个值.

使用场景:在项目中评论组件作为一个子组件,需要相应的商品id才可以发送ajax请求,然后获取相应的数据,所以依赖父祖件中的id值.

- - -

2.**子传父**:	
子传父依靠子组件来触发$emit事件,然后靠形参的方式去传递值给父祖件(语言很难描述清楚,用代码展示)

```
ex:<com @send="getmsg"></com>
子组件中传递: 我们可以通过钩子函数来触发这个$emit事件,如:
created(){
	this.$emit("send",val)
	//很明显,第一个参数就是自定义的事件名,第二个参数可以是多个,来自子组件的值
}
//父祖件中获取: 我们将子组件中自定义名作为一个方法,然后子组件的值即为参数,
methods:{
	getmsg(val){
		console.log(val)
		//这个val即为子组件传递过来的值
	}
}
```

由于这个项目中没有用到子传父,但是有另一种方式实现了一个子父组件的数据共享,且同时改动,但是这个在第四个地方在细解.
​	
- - -

3.**平行组件的传值**

A,B两个组件之间传值可以依靠于EventBus(类似于邮局的作用).
假如A组件中需要传递一个值给B组件,那么我们可以这样实现:
```
//首先我们需要在全局注册这么一个EventBus
const bus = new Vue();

//然后在A组件中我们需要触发$emit事件,即
bus.$emit("sendmsg",data)
//B组件中也需要出发一个事件来接受这个传来的参数
bus.$on("sendmsg",callback)
//通过上面的代码我们很清晰的知道如何去做,
//在B组件中通过callback来接受一个形参(data),来接受传递来的参数data;
```

- - -

4.**平行间组件的传值之Vuex**

当然这个是很强大一个数据管理系统(个人理解),
我的理解是,这是一个本地的数据库,我们可以对其CRUD.
假如有ABC三个组件,同时需要共享同一份数据,如何做到你们其中一个组件里改变数据,另外两个组件也跟着修改,那么一定会用上Vuex.
例如在project中的购物车页面,就需要利用Vuex来集中管理数据.
