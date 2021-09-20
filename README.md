# resume
# 我的的静态简历

## 以一种吹牛逼的方式表达技术
## 简历中工作项目描述
  + 分点描述
    + 负责什么
    + 用xxx技术解决了xx问题
    + 达到了xxx样的效果

# 小谷同学
  + 301、302、304
  + 

# 每刻科技
  eventloop!! 、http1.0/1.1区别，和https的区别,TCP和UDP的区别，迭代器，Map和{}区别，for in和forof区别
  + let,const提升了只是不允许访问，作用域/作用域链，promise，async/await
  + hr:
    - 四级过了吗
    - 用几个词来概括一下你的性格/你觉得你是一个怎么样的人(或者在同学眼中你是个怎么样的人)
    - 说一说你的三个缺点、三个有点
    - 人生中遇到过最有成就感的事情、和最黑暗的事情
    - 在你的实习过程中学到了什么
    - 在之前的面试环节中对我们公司有什么印象
# 开课吧
  event-loop、!doctype、redux思想、redux中componse函数(作用/怎么实现)、函数式编程、用过哪些设计模式、原型链/原型对象、react性能优化手段、重绘/回流、怎么减少重绘回流、DOM哪些api会导致强制回流、vue源码批处理/设计思想、promise相对callback的优点、webpack原理、怎么用其他手段实现await的同步形式


# 滴滴电话面
## CSS
  + 盒模型，居中方式，flex
  + position 有哪些属性***（absolute,relative/fixed/stiky/inherit）**
  + position: relative/absolute 区别*
  + BFC 触发方式有哪些，解决了什么问题(**外边距重叠，可包含浮动元素，可阻止元素被浮动元素覆盖**)
    - **float: 不为none**
    - **overflow: 不为visible**
    - **position: 不为relative/static**
    - **zoom: 1**
## Js
  + 垃圾回收机制
   - **第一种：标记清除，先给全部加上标记，在给正在使用的去掉标记，剩下的就是需要回收的内存**
   - **第二种：引用计数，引用一次计数+1，取消引用计数-1，计数0则需要回收**
  + 深克隆怎么实现说一下，怎么解决循环引用 **（利用WeakMap）**
  + function实现继承说一说
  + new实现经历了哪些步骤，！！重点！！
    - **新建空对象 `var obj = {}`**
    - **将新对象的原型链对象指向构造函数 `obj.__proto__ = fn.prototype`**
    - **执行构造函数并绑定this `ret = fn.apply(obj,args)`**
    - **返回这个结果 `return ret instanceof Object ? ret : obj;`**
  + 说一说原型链 
  + 异步处理的方式 (callback/promise)说出promise的优点3-4点
  + class和function对比，class实现方式
    - **属性定义、方法定义(实例方法和原型方法)、静态属性、静态方法**
  + Promise/async await 区别（async,await的原理）
  + Proxy（主要做了些什么）
  + 说说ES6
  + 防抖（说代码）
  + 简述事件委托机制（事件捕获、冒泡，父元素监听）（主要利用事件冒泡）
  + Axios底层怎么实现了解过吗

## React 
  + 生命周期说一下（说了class的）
  + 说一说fiber架构（xx）
  + fiber之前什么架构有什么不同，做了哪些优化(xx)
  + hooks说一下、和class的区别，声明周期对应(说了useEffect)
  + class怎么逻辑复用
  + 用过hooks哪些API(balabala)
  + diff算法过程有了解过吗(xx)
  + setState后组件经历了哪些过程（xx）
  + setState同步还是异步（合成事件异步，原生事件同步）
  + setState批处理是怎么进行的（合成事件中会进行）
  + React原理有去了解过吗（没有）
  + React组件错误处理了解过吗
## Webpack
  + 用过哪些插件（xx慌了）
  + 和vite的区别（说了vite更快）
  + vite相对于webpack有哪些优势/劣势（xx）
  + vite为什么会比webpack快（只说了esbuild，xx）
  + 看我没回答上来就没问了，接下来应该还有
## 项目
  + 说一说之前实习的项目（负责哪些模块）（balabala）
  + 协作方式（怎么协作）(xx,面试官很不满意)
  + 项目部署工作流（生产环境，开发环境）（你们是怎么做的？）（xx,同上）

## 能动性、把控
## 我的问题
业务、产品形态、人员、技术栈

## 项目问题
并发请求Token过期
## 项目中做了什么
+ 简化了老项目的代码量
+ 后台完整菜单权限，按钮权限，point-event:none; 忽略事件
  - 不同角色、不同权限，给用户分配角色

## 业务描述
+ 区块链众筹，众筹金额上链，众筹完成后，去做对应的项目

## v2/3区别
+ 响应式方式API proxy对整个对象进行响应  Object.defindProperty 递归遍历响应式
+ sfc-CompsitionApi
+ diff 先计算最长稳定子序列， 先从头比，在从尾比，

## 跨域
+ websocket 请求交给服务端来判断



## 水平垂直方案
+ Flex / Grid
+ Absolute top left 50% / 四面0，margin:auto
+ 行内 text-align + lineHeight


# flex-shrink 计算方式 系数：flex-shrink * flex-base  该缩小的：系数*多出来的
# 移动适配　当屏幕尺寸为 750px时，该元素的宽为：

　　10rem = 10 * 100vw /18.75

　　=>10rem = 10 * 750px / 18.75

　　=>10rem = 10 * 750px / (750 / 40)

　　=>10rem = 400px

## H5 新特性
  + 语义化标签
  + 新的表单类型 <input type="number/date/color/email/range" />
  + 视频音频 audio/video
  + svg/canvas
    + canvas 一个画布容器，用Js来描述画布内容
    + SVG 可伸缩的矢量图，用xml来描述，每个元素节点可和javascript交互
  + 拖拽api
  + web worker
## CSS3
  + 过渡、动画
  + 伪类、伪元素
  + 选择器 nth-child()
  + 阴影、边框
  + rgba颜色、渐变、滤镜、
  + grid布局

## ES6(ECMAScript 2015)泛指下一代ECMAScript标准（因为每年六月发布一次标准）
  + let 关键字
    - 块级作用域、平行块中不能互相访问
    - 没有变量提升、暂时性死区（存在let即为块级，使用变量前必须先声明）
    - ES2020 globalThis 可获取全局对象 (self,window,global：node中)
  + 解构赋值
  + **字符串** 可迭代，模板字符串，字符串新增方法
  + **数值** 扩展 Number.isFinite()//是否有限  Number.isNaN()//是否NaN
  + **函数** 参数默认值、箭头函数、尾调用/尾递归优化(在计算斐波那契时差异巨大)
    ```js
    // 非尾递归的 Fibonacci 数列实现如下。
    function Fibonacci (n) {
      if ( n <= 1 ) {return 1};
      return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
    Fibonacci(10) // 89
    Fibonacci(100) // 超时
    Fibonacci(500) // 超时
    // 尾递归优化过的 Fibonacci 数列实现如下。

    function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
      if( n <= 1 ) {return ac2};
      return Fibonacci2 (n - 1, ac2, ac1 + ac2);
    } 1 1 2 3 5 8 13 21
    Fibonacci2(100) // 573147844013817200000
    Fibonacci2(1000) // 7.0330367711422765e+208
    Fibonacci2(10000) // Infinity
    ```
  + **数组** 扩展 
    - `Array.from()`转换类数组为数组 /
    - `Array.of()`给定参数转换为数组 / 
    - `[].fill(填充元素,startPos,endPos)`
    - `[].keys() / [].values() / [].entries()` 都返回可迭代对象
  + **对象** 扩展
   - Object.assign(o1,o2);
   - super关键字指向原型链对象  
  + **运算符**扩展 
   - 指数运算 `2 ** 2 = 4`， `2 ** 3 = 8`
   - 对象可选链调用 `?.`
  + Symbol
  + Set/Map
  + Proxy
  + Reflect
  + Promise
  + Generate / async / await 
  + Class
  + 