const fs = require('fs');
const path = require('path');

//单位1mb
const filesize = 1024;

const bigfilename = path.join(__dirname, 'bigfiles/bigfile');

//初始化大文件
fs.writeFileSync(bigfilename, "");

const startTime = new Date().getTime()

//生产1mb的字符串
let onemstr = "";
for (let i = 0; i < (1024 * 1024); i++) {
  onemstr += "1";
}

for (let i = 0; i < filesize; i++) {
  fs.appendFileSync(bigfilename, onemstr, () => { });
}

const endTime = new Date().getTime()

console.log('use : ' + (endTime - startTime))