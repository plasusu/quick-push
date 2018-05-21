# quick-push
提高效率的命令行工具

**此工具有一定局限性，仅限于特定地使用场景**

- 新增快速地在Visual Studio Code中打开项目 2018-05-21
- 新增快速地在Sublime Text中打开项目 2018-05-09
- 新增快速提交代码到github master分支

## 安装
```
$ npm install quick-github -g
```

## quick push
快速提交代码到github master分支
### 正常提交
```bash
git add .
git commit -m "update"
git push origin master
```
### quick提交
```bash
quick push // 一步完成上面三步
```

## quick sub
快速地在Sublime Text中打开项目

1. 命令行进入到项目根路径(作为前端工程师，经常要命令行进入到项目，然后npm install，npm run dev等等，顺便加一个打开项目代码的功能非常实用)
2. `quick sub`打开项目

## quick vs
快速地在Visual Studio Code中打开项目

-  `quick vs`打开项目



## LICENSE
MIT
