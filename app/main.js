var [a,b,c]=[1,2,3]
var aa = require('./aa.js')

console.log(a)
console.log('引入外部文件变量' + aa.m) //module.exports.m = 10;
console.log('es2015解析完成！')
