const fs = require('fs-extra')
const path = require('path');

const input = process.env.input
const output = process.env.output || 'defaultoutputfile'

function main() {
  if (!input) {
    throw new Error("Please enter input and output filename");
  }
  const startTime = new Date().getTime();
  const bigfile = path.join(__dirname, `../bigfiles/${input}`)
  const copyfile = path.join(__dirname, `../copyfiles/${output}`)
  console.log('copy start ..')
  fs.copySync(bigfile, copyfile);
  const endTime = new Date().getTime();
  console.log('used : ' + (endTime - startTime))
}

main();


