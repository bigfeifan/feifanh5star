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
- [x] 场景布局 -- 完成
- [x] 场景渲染 -- 完成
- [x] 推箱子功能开发 -- 完成
- [ ] 双人对战功能开发 -- 未完成
- [ ] 双人合作功能开发 -- 未完成
- [ ] 接口配置 -- 未完成
- [ ] 项目打包输出 -- 未完成

# 项目布局
```
|-- dist                                             // 项目编译打包目录
|-- src                                              // 项目源文件		
|	|-- common                                   // 公共库
|		|-- js                           // 公共js文件
|           |-- backChanged.js          // 箱子移入移出样式切换
|           |-- bindEvent.js            // 封装事件绑定
|           |-- checkCode.js            // 检测按键对象
|           |-- detectCollision.js      // 检测物体移动后的碰撞情况    
|           |-- drawObject.js           // 可移动对象渲染                      
|			|-- init.js                 // JS初始化文件
|			|-- isEmpty                 // 判断对象是否为空
|			|-- keyJuge.js              // 检测按键是否是对应按键
|           |-- level.js                // 关卡设计
|           |-- move.js                 // 移动物体
|			|-- render.js               // 初始化场景渲染
|			|-- rerender.js             // 更改场景渲染
|			|-- scence.js               // 场景渲染        
| 			|-- update.js               // 触发事件后游戏的流程
|		|-- sass                        // 公共样式文件
|			|-- index.scss              // 公共样式入口文件
            |-- scence.scss             // 移动物体样式入口文件
|	|-- app.js                                   // 程序入口文件，加载各种公共组件
|-- static                                           // 静态文件目录
|-- webpack.config.js                                // webpack配置文件
|-- yarn.lock                                        // yarn版本控制
|-- index.html                                       // 入口html文件
|-- package.json                                     // 项目及工具的依赖配置文件
|-- README.md                                        // 说明

```

# 工作流程

项目结构设置	—By 张正弦    
webpack配置		—By 白航、张正弦  
移动机制流程图         -By李天惠 张棚贺  
关卡设计、人物箱子模型设计、render模块设计		—By 焦俊丽、李君怡  
render模块重构、rerender模块设计		—By 张鹏贺  
detectCollision模块、move模块设计		—By 李天惠  
双人键盘事件处理	—By 张正弦  
success逻辑设计	—By 白航  
界面设计、游戏细节样式处理		—By 李天惠、李君怡  
模块解耦、接口调整、文档更新	—By 张正弦   


# 总结
