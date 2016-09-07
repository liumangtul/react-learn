http://www.jianshu.com/p/tY6UPN
根据上文地址学习所得

踩坑-commonJs模式的require(... 混入es6模式的export中,导致 gulp打包没有报错,但是,在运行react时报错 xxx.createElement.xxx not function...
现已爬出坑。

资料：
http://zhidao.baidu.com/link?url=0acXs_zd-v33wZGsF-1KmSmv9KornVFPosGKMprYYb7QJAzS2FbbpWEIQDveVtJ8RdvOg7LN8EDyBI9o7NuA9xGBGBAw4iIEzTsrW3ujC6a

所以如果你的机器上的 babel 是全局安装的，是时候卸载它了，因为它的版本不是 5 就是 6 ，会导致一些不可预见的问题。
npm uninstall babel-cli --global

正确的安装方式是把 babel-cli 作为 develeopment 的依赖
npm install babel-cli --save-dev

编译过程中还隐含了一个步骤就是加载 .babelrc 文件里的配置，该文件内容如下
{
  "presets": [
    "es2015",
    //"stage-0",
    "react"
  ]
}

这是因为 Babel6 采用了插件化的设计，做到了灵活配置：如果要转换 JSX 语法文件，就加上 react 的 preset，同时项目依赖里要添加
babel-preset-react

npm install babel-preset-react --save-dev


参考：

http://www.jianshu.com/p/tY6UPN
http://zhidao.baidu.com/link?url=0acXs_zd-v33wZGsF-1KmSmv9KornVFPosGKMprYYb7QJAzS2FbbpWEIQDveVtJ8RdvOg7LN8EDyBI9o7NuA9xGBGBAw4iIEzTsrW3ujC6a
http://zhidao.baidu.com/link?url=lwdu1riWi2S8BGsnyhQap8JgzjTHPw5948HEaZkxCld-bvtTX5jd2YYHU6BKk2Ncde060wouqTnC3nMgNj6APzCcQQoby__KqJ5V_AZE-XG

npm init
npm install --save-dev gulp browserify vinyl-source-stream babelify babel-cli babel-preset-react babel-preset-es2015 babel-preset-stage-0 react react-dom redux react-redux
gulp jsx

相关学习资料
React+Redux系列教程
https://github.com/lewis617/react-redux-tutorial
