const fs = require('fs-extra')
const path = require('path');

async function main(input, output) {
  return new Promise((resolve, reject) => {
    try {
      const startTime = new Date().getTime();
      const bigfile = path.join(__dirname, `../bigfiles/${input}`)
      const copyfile = path.join(__dirname, `../copyfiles/${output}`)
      console.log('v4 copy start ..')
      fs.copySync(bigfile, copyfile);
      const endTime = new Date().getTime();
      const used = endTime - startTime
      resolve({ used })
    } catch (e) {
      console.log(e)
      reject({ error: e })
    }
  })
}


module.exports = main;

