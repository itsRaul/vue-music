# music

> 音乐播放器

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### fastclick(处理移动端click事件300毫秒延迟)
    使用方法：import fastclick from 'fastclick'
    fastclick.attach(document.body)

### router
    1.tab="div" 渲染成div元素
        <router-link tag="div" class="tab-item" to="/">
    2.router-link-active
        router选中时class状态(.router-link-active)
        
### build/webpack.base.conf
    1.resolve/alias
        可以配置项目的相对路径

### router-view加<keep-alive>将DOM缓存到内存(优化之一)

### vue-lazyload(图片的懒加载，节省流量资源)
    使用方法：import VueLazyload from 'vue-lazyload'
            Vue.use(VueLazyload, {
                loading: require('common/image/default.png')（懒加载的默认图片）
            })

### vuex
    1.store存储状态
    
    2.mutations修改状态，先声明一个mutations

    3.getters取state数据，简单包装

    4.action是进行异步操作，提交mutations

    5.vuex提供mapMutations，对mutations进行封装,进行映射
        ...mapMutations({
            
        })
    
    6.mapGetters是一个数组,在computed使用,取数据
        ...mapGetters([

        ])

### 移动端事件
    touchstart事件：
        当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。

    touchmove事件：
        当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。

    touchend事件：
        当手指从屏幕上离开的时候触发。
    touchcancel事件：
        当系统停止跟踪触摸的时候触发。关于这个事件的确切出发时间，文档中并没有具体说明，咱们只能去猜测了。
    
    以上事件都会冒泡 
    @touchstart.prevent(阻止冒泡)

    ### findIndex(function(currentValue, index, arr){})
            返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
            符合条件元素的第一个位置
