#!/usr/bin/env node
import 'shelljs/global';
import yargs from 'yargs';

let execSome = false;

let argv = yargs
    .usage('Usage: quick [command] [options]')
    .help('h')
    .alias('h', 'help')
    .command('push', '快速提交本地代码到github仓库', (yargs) => {
        execSome = true;
        if (!which('git')) {
            echo('Sorry, this script requires git');
            exit(1);
        }

        echo('1) 开始提交代码');
        if (exec(`git add . && git commit -m "update" && git push origin master`).code !== 0) {
            exit(1);
        }
        echo('2) 提交成功！！！');
    })
    .command('sub', '打开项目到sublime', (yargs) => {
        execSome = true;
        if (exec(`open -a "Sublime Text" .`).code !== 0) {
            exit(1);
        }
        echo('成功打开sublime！');
    })
    .command('vs', '打开项目到Visual Studio Code', (yargs) => {
        execSome = true;
        if (exec(`open -a "Visual Studio Code" .`).code !== 0) {
            exit(1);
        }
        echo('成功打开Visual Studio Code！');
    })
    .argv;

if (!execSome) {
    yargs.showHelp();
}
