## Build Setup

``` bash
# 第一次开发请运行
npm install

# 本地开发
npm start / npm run dev

# build
npm run build

# run unit tests (目前暂时不适用)
npm run unit

# run all tests (目前暂时不适用)
npm test
```

## 开发过程严格遵循代码规范

[spec](https://github.com/huarxia/spec)

## 目录结构

```
├─ build/               # Webpack构建目录
├─ dist/                # build 生成的生产环境下的项目
├─ src/                 # 源码目录
│   ├─ assets/          # images等静态资源
│   ├─ components/      # 组件（COMPONENT）
│   ├─ pages/           # 页面
│   ├─ routers/         # 路由
│   ├─ common/          # 公用方法、lib存放
│   └─ main             # 主入口文件
├── static/             # 放置无需经由 Webpack 处理的静态文件
├── test/               # 暂时没有处理，待更
├── index.html          # 静态模板页面，开发和build产出，都依赖它
├── .babelrc            # Babel 转码配置
├── .editorconfig       # 编辑器常规配置方便统一代码规范
├── .eslintignore       # ESLint 检查中需忽略的文件（夹）
├── .eslintrc           # ESLint 配置
├── .gitignore          # git忽略提交
├── .postcssrc.js       # postcss配置项
├── build.sh            # 线上打包脚本
└── package.json        # 很重要的东西了
```

## to do ...
