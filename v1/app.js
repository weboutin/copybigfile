
const fs = require('fs')
const path = require('path');
const bigfilename = path.join(__dirname, '../2gbigfile')
const copyfile = path.join(__dirname, './copyfile')

fs.writeFileSync(copyfile, fs.readFileSync(bigfilename));

