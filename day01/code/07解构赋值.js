/**
 * 解构赋值
 */
//变量的赋值
// let a = 1;
// let b = 2;
// let c = 3;
//数组的解构赋值
// let [a,b,c] = [1,2,3];
// let [a,b,c] = [,123,];
// console.log("数组：",a,b,c);

//对象的解构赋值
var {user,age} = {user:"张三", age:18};
console.log(user, age);
//起别名（起小名),访问时原来的键名无效
let {name:name2,sex} = {name:"李四", sex:"男"};
console.log(name2,sex);
//字符串的解构赋值
var str ="hello";
var [a,b,c,d,e] = str;
console.log(a,b,c,d,e);
let {length} = "hello";
console.log(length);