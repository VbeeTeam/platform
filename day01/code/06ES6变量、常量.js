/**
 * var 声明变量: 1.可以预解析2.可以重复定义3.全局变量，块内块外都可以访问
 * let 块级作用域：1.不可以预解析2.不可以重复定义
 * 3.块内定义的变量，在外部不可以访问，不会造成环境变量污染
 * const 常量不允许重新赋值，用于解构赋值、不会改变的数据
 * 
 */
// var 声明变量
console.log("var:",count); //undefined 未赋值
var count = 123;
var count = 132;
console.log("var:",count);  //123 132 

// let 块级作用域
//console.log("let:", count2); //报错
let count2 = 456;
// let count2 = 465;
count2 = 4567
console.log("let:", count2); //456

{
    var flag = 111;
    let flag2 = 222;
    console.log("{}var:", flag);
    console.log("{}let:", flag2);
}
console.log("{}2var:", flag);
//console.log("{}2let:", flag2); //报错is not defined 未定义
for(let i=0; i<5; i++){
    console.log(i)
}
//console.log(i)//报错is not defined 未定义

const abc = 666;
abc = 777; //不可以重新赋值
console.log("const:", abc);