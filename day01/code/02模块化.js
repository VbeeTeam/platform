/**
 * 传统的非模块化开发
 * 1.命名的冲突
 * 2.文件的依赖
 * 
 * 前端标准模块化开发：
 * 1.AMD - requirejs 国外
 * 2.CMD - seajs     国产（中国） 淘宝阿里巴巴团队
 * 
 * 服务端模块化规范
 * 1.commonjs - Nodejs
 * 
 * 模块化规则：
 * 1.一个js文件就是一个模块，模块内部的方法是相互独立的
 * 2.模块的成员的导出和引入
 * 
 */

//求和(匿名函数)
var sum = function (a, b) {
    return parseInt(a) + parseInt(b);
}
// console.log(sum(1, 2));
var result = function (a, b) {
    return parseInt(a) - parseInt(b);
}

//模块导出第一种方法
// exports.sum1 = sum;
// exports.result1 = result;
//模块导出的第二种方法
module.exports = sum;
// 多成员
// module.exports = {
//     a: a,
//     b: b
// }
