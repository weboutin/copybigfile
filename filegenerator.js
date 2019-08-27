const fs = require('fs');
const path = require('path');

//默认1024mb
const filesize = process.env.filesize || 1024
const outputname = process.env.outputname || 'defaultbigfile'

console.log("filesize : " + filesize);
console.log("outputname : " + outputname);

//文件路径
const bigfilename = path.join(__dirname, `bigfiles/${outputname}`);

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