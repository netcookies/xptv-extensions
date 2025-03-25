require('./jspatch-env'); // 加载 TVBox 环境
const fs = require('fs');
const path = require('path');

// 加载 alist_tvbox.js
const scriptPath = path.join(__dirname, 'alist_tvbox.js');
const alistScript = fs.readFileSync(scriptPath, 'utf8');
eval(alistScript); // 执行你的 JS 文件

async function main() {
    // 设置你的 Alist 地址
    $cache.set('alist_tvbox_host', 'https://tv.nznd.org:8686');
    $cache.set('alist_tvbox_token', 'fdYiVMgcQmDAmrahpB');

    console.log('开始调试 getConfig()...');
    const config = await getConfig();
    console.log('Config:', config);

    console.log('开始调试 getCards()...');
    const cards = await getCards({ url: 'https://tv.nznd.org:8686/vod1/fdYiVMgcQmDAmrahpB?t=1$/综艺$0' });
    console.log('Cards:', cards);
}

main();
