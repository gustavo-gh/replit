const { path, fs } = require('./podeser.cjs');

console.log(path.join(__dirname, 'podeser.cjs'));
console.log(fs.readFileSync('podeser.cjs', 'utf-8'));