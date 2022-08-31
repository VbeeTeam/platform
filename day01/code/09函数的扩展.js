/**
 * 函数的扩展
 * 1.扩展运算符
 * 2.箭头函数
 */
//扩展运算符 ...
function test5(a,b,c,d,e){
    console.log(a,b,c,d,e)
}
// test5(1,2,3,4,5);
let arr = [1,2,3,4,5];
test5(...arr);
//扩展
// 合并数组
var arr1 = [1,2,3];
var arr2 = [4,5,6];
// for(let i = 0; i < arr2.length; i++){
//     arr1.push(arr2[i]);
// }
// console.log(arr1);
// var newArr = arr1.concat(arr2);
let newArr = [...arr1,...arr2];
console.log(newArr);

