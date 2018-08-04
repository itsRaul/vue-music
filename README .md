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
        
