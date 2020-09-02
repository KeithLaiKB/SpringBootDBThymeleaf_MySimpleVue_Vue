vue ui
创建

输入项目文件夹名

包管理器选择默认

然后预设 选择 手动(手动配置项目)

然后选择router

pick a linter 那里 选择ESlint +prettier

预设名不设置 直接创建

去项目下
npm run serve

--------------

我想要改端口所以
E:\testvue_workspace1\test1_name_vue 下
创建一个vue.config.js文件 内容网上找
然后改端口为8020
--------------
因为vue cli安装已经选了 router模块
所以写在src 是有 views文件夹 和router文件夹
--------------
我现在想多加一个view,
Heyhey.vue
--------------
然后我还需要给他配置路由
于是在router/router.js 进行操作

//我增加的
import Heyhey from "../views/Heyhey.vue";

然后在routes里面
  {
    path: "/heyheyp",
    name: "Heyheyn",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Heyhey
  }
--------------
并且在App.vue中
    <div id="nav">
	<router-link to="/heyheyp">Heyhey</router-link> |
	<router-link to="/home">Home</router-link> |
	<router-link to="/about">About</router-link>
    </div>
    <router-view />
--------------
A. 因为此时router.js 没有设置"/"对应的是谁

后面运行发现
http://localhost:8020/
直接先访问index.html

然后index.html 会把App.vue弄出来

注意:
所以 此时
那三个router 不在点击 的时候 谁都不显示！！！！！

+++++++
然而
B. 如果router.js 设置"/"对应的是Heyhey

后面运行发现
那么http://localhost:8020/
直接先访问index.html
然后index.html 会把App.vue弄出来

注意：
所以 此时
默认 显示 Heyhey.vue的画面！！！！！！

+++++++
--------------


--------------

在vuejs项目中遇到如下问题：

warning delete ·· (prettier/prettier)
解决
在vuejs项目中，运行如下命令解决：

npm run lint --fix

--------------------
history模式是指使用HTML5的historyAPI实现客户端路由的模式，
它的典型表现就是去除了hash模式中url路径中的#。