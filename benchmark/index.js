
const co = require('co')
//代拷贝文件目录绝对路径
const input = process.env.input
//成功拷贝文件目录绝对路径
const output = process.env.output || 'defaultoutputfile'
//代测试版本
const v = process.env.v
//测试次数
const t = parseInt(process.env.t) || 1;

//readFileSync
const v1 = require('../v1');
//stream
const v2 = require('../v2');
//copyfile
const v3 = require('../v3');
//fs-extra
const v4 = require('../v4');
//pause & resume
const v5 = require('../v5');
//graceful-fs
const v6 = require('../v6');

async function excuteManyTimes(v) {
  for (let i = 0; i < t; i++) {
    let { used } = await exec(v)
    console.log(`times-${i} => ` + used)
  }
}

co(async () => {
  await excuteManyTimes(v);
})


async function exec(v) {
  switch (v) {
    case 'v1':
      return await v1(input, output);
      break;
    case 'v2':
      return await v2(input, output);
      break;
    case 'v3':
      return await v3(input, output);
      break;
    case 'v4':
      return await v4(input, output);
      break;
    case 'v5':
      return await v5(input, output);
      break;
    case 'v6':
      return await v6(input, output);
      break;
    default:
      throw Error('unknow v')
  }

}

