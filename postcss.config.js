// postcss的配置文件 基于nodejs 运行的一个处理css的工具
// 所以他的配置文件也是运行在node.js中
module.exports = {
  // 配置要使用的相关插件
  plugins: {
    // 自动添加浏览器厂商声明前缀,兼容不同的浏览器
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    // 把px转为rem
    'postcss-pxtorem': {
      // 转换的根元素基准值
      // 正常情况下按照设计稿来
      // 750 宽的设计稿 750/10=75
      // 375 宽的设计稿 375/10=37.5
      // vant 组件库是基于375宽写的
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
