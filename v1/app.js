const fs = require('fs')
const path = require('path');
const bigfilename = path.join(__dirname, '../bigfiles/2gfile')
const copyfile = path.join(__dirname, './copyfile')

fs.writeFileSync(copyfile, fs.readFileSync(bigfilename));

