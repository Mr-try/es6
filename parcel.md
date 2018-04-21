> parcel 号称零配置的打包工具

- 不使用es6真的可以是零配置

以react为例
- 安装相关依赖
```
npm install --save react
npm install --save react-dom
npm install --save-dev parcel-bundler
npm install --save-dev babel-preset-env
npm install --save-dev babel-preset-react
```

- .babelrc
```
{
    "presets": ["env", "react","stage-2" ],
    "plugins": [
        [
            "transform-runtime",
            {
            "helpers": false,
            "polyfill": false,
            "regenerator": true,
            "moduleName": "babel-runtime"
            }
        ]
    ]

}
```
- 命令行
```
# 开发命令 请在index.html引入js文件
parcel -p 2222 public/index.html 
# 构建命令
parcel build public/index.html --no-minify
```
- 工作
    - 构建资源树
    - 打包资源树
    - 打包
- 坑
    -  background:url("") 里面必须带引号，否则资源也是找不到的
    - 构建命令需加--no-minify 原因可能是uglify-js不能直接压缩es6