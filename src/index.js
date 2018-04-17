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
    .argv;

if (!execSome) {
    yargs.showHelp();
}
