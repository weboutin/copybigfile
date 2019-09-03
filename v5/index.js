
const fs = require('fs')
const path = require('path');

async function main(input, output) {
  return new Promise((resolve, reject) => {
    try {
      const startTime = new Date().getTime();
      const bigfile = path.join(__dirname, `../bigfiles/${input}`)
      const copyfile = path.join(__dirname, `../copyfiles/${output}`)
      console.log('v5 copy start ..')
      const readable = fs.createReadStream(bigfile);
      const writeable = fs.createWriteStream(copyfile)
      readable.on('data', (chunk) => {
        readable.pause();
        writeable.write(chunk)
        setTimeout(() => {
          readable.resume();
        }, 1);
      });
      readable.on('end', () => {
        writeable.end()
      })
      writeable.on('finish', () => {
        const endTime = new Date().getTime();
        const used = endTime - startTime
        resolve({
          used
        })
      });
    } catch (e) {
      console.log(e)
      reject({
        error: e
      })
    }
  })
}



module.exports = main
