/**
 * 箭头函数
 * 优点：1.优化代码长度，增加可读性
 * 2.不会改变this的指向
 */
//原来的函数
function test(){
    console.log("hello world!");
}
test();
//单个语句箭头函数
let test2 = () => console.log("===>函数!"); console.log("===>2");
test2();
//多个语句的箭头函数  
let test3 = () => {
    console.log("666");
    console.log("777");
}
test3();
var obj = {
    a: 1,
    func: function(){ console.log("a:", this.a) },
    test4: function(){
        var that = this;
        setTimeout(function(){
            //this > setTimeout
            console.log("a::", that.a);
        },100)
    }
}
obj.func();
obj.test4();

var obj2 = {
    a2: 2,
    func2: function(){ console.log("a2:", this.a2) },
    test5: function(){
        setTimeout(() => {
            // this > obj2对象
            console.log("a2::", this.a2);
        },100)
    }
}
obj2.func2();
obj2.test5();
//构造函数
function test6(){
    this.num = 123123;
}
let a = new test6();
console.log("test6：", a.num);
//箭头函数不能做构造函数
let test7 = () => this.num2 = 45464546;
let b = new test7();
console.log("test7:", b.num2);