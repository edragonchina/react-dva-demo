## 特性

- 基于[react](https://github.com/facebook/react)，[ant-design](https://github.com/ant-design/ant-design)，[dva](https://github.com/dvajs/dva)，[Mock](https://github.com/nuysoft/Mock) 最佳实践
- 基于[Mock](https://github.com/nuysoft/Mock)实现脱离后端独立开发
- 基于Antd UI 设计语言，提供后台管理系统常见使用场景
- 基于[dva](https://github.com/dvajs/dva)动态加载 Model 和路由，按需加载
- 浅度响应式设计

## 开发及构建

### 目录结构

```bash
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /components/   # 项目组件
│ ├── /mock/         # mock 数据接口定义
│ ├── /routes/       # 路由组件
│ ├── /models/       # 数据模型
│ ├── /services/     # 数据接口
│ ├── /utils/        # 工具函数
│ ├── route.js       # 路由配置
│ ├── index.js       # 入口文件
│ └── index.html
├── package.json     # 项目信息
├── theme.config.js  # 风格主题配置
├── webpack.config.js   # 扩展的 webpack 配置
└── .roadhogrc.mock.js  # 数据 mock 配置

```

### 快速开始

进入目录安装依赖:

```
npm i 或者 yarn install
```

开发：

```bash
npm run start    # 使用mock拦截请求，数据存储在localStroge里

打开 http://localhost:8000
```


构建：

```bash
npm run build

将会生成dist目录
```

### 注意事项

- 生产环境中，已有数据接口，请去掉`.roadhogrc.mock.js`，并在`.roadhogrc.js`中增加proxy设置（参见dva相关设置）
- 如需重写异步请求函数，请修改`src/utils/request.js`
- 如需重写antd样式配置，请修改`src/themes`下文件
- 项目配置文件在`src/utils/config.js`
