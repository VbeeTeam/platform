/**
 * 函数的扩展
 * 1.参数默认值
 * 2.参数解构赋值
 * 3.rest函数
 * 4.扩展运算符
 * 5.箭头函数
 */
function test(params){
    let str = params || "hello";
   console.log(str);
}
test("hi");
//参数默认值
function test2(params = "haha"){
    console.log(params);
}
test2("hehe");
//参数的解构赋值
function test3({usernam="张三",age=20} = {}){
    console.log(usernam, age)
}
test3({usernam:"李思思",age:30});
//rest函数参数(剩余参数)
function test4(a,...e){
    console.log(a);
    console.log(e);
}
test4(1,2,3,4);
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

