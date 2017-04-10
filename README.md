# feifanh5star
前端星计划非凡组项目


一个有趣的推箱子游戏，支持多人对战和多人合作。


__注：此项目纯属学习与娱乐，并非商业上线项目，可能存在一些BUG。__

# 技术栈
原生JS + webpack + ES6/7 + sass 

# 项目运行
```
npm install(较慢推荐改用cnpm或者yarn) 安装依赖
npm start 启动服务器

```
# 工作安排
- [x] webpack配置 -- 完成
- [ ] 场景布局 -- 未完成
- [ ] 场景渲染 -- 未完成
- [ ] 推箱子功能开发 -- 未完成
- [ ] 双人对战功能开发 -- 未完成
- [ ] 双人合作功能开发 -- 未完成
- [ ] 接口配置 -- 未完成
- [ ] 项目打包输出 -- 未完成

# 项目布局
```
|-- dist                                             // 项目编译打包目录
|-- src                                              // 项目源文件		
|	|-- common                                   // 公共库
|		|-- js                               // 公共js文件
|			|-- init.js                  // JS初始化文件
|			|-- render.js                // 场景渲染
|		|-- sass                             // 公共样式文件
|			|-- index.scss               // 公共样式入口文件
| |-- app.js                                       // 程序入口文件，加载各种公共组件
|-- static                                           // 静态文件目录
|-- webpack.config.js                                // webpack配置文件
|-- yarn.lock                                        // yarn版本控制
|-- index.html                                       // 入口html文件
|-- package.json                                     // 项目及工具的依赖配置文件
|-- README.md                                        // 说明

```

# 工作流程

## 2017.4.10
搭建README.md文档基本结构		—By 张正弦  
webpack配置		—By 白航  
render模块		—By 焦俊丽、李君怡  
README.md修改，webpack配置修改、项目结构调整		—By 张正弦

# 总结
