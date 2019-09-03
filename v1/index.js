const fs = require('fs')
const path = require('path');

async function main(input, output) {
  return new Promise((resolve, reject) => {
    try {
      const startTime = new Date().getTime();
      const bigfile = path.join(__dirname, `../bigfiles/${input}`)
      const copyfile = path.join(__dirname, `../copyfiles/${output}`)
      console.log('v1 copy start ..')
      fs.writeFileSync(copyfile, fs.readFileSync(bigfile));
      const endTime = new Date().getTime();
      const used = endTime - startTime;
      resolve({
        used: used
      })
    } catch (e) {
      console.log(e)
      resolve({
        error: e
      })
    }
  })
}

module.exports = main
