/**
 * 字符串的扩展
 * includes(参数1，参数2)     判断字符串中是否包含指定的字符（有：true，无：false）
 * 参数1：要匹配查找的字符
 * 参数2：从第几个字符开始匹配
 * startsWith(参数)  判断字符串是否以特定的字符开始（有：true，无：false）
 * 参数：匹配的字符
 * endsWith(参数)   判断字符串是否以特定的字符结束（有：true，无：false）
 * 参数：匹配的字符
 * 
 * 模板字符串   ``反引号 表示模板，模板中的内容可以有格式，通过${}填充数据
 */
var str = "hello world";
console.log("includes:", str.includes('hello', 0));//用于做模糊查询
console.log("startsWith:", str.startsWith('h'));//用于路由地址的判断
console.log("endsWith:", str.endsWith("d"));
var obj = {
    username: "张三",
    age: 20,
    sex: "女"
}
//前端的字符串拼接渲染数据
let tag = "<div><span>" + obj.username + "</span><span>" + obj.age + "</span><span>" + obj.sex + "</span></div>";
console.log(tag);
//模板字符串，计算，函数调用
let fn = function(info){
    return info;
}
let tag2 = `
<div>
        <span>${obj.username}</span>
        <span>${obj.age}</span>
        <span>${obj.sex}</span>
        <span>${1+1}</span>
        <span>${obj.age+2}</span>
        <span>${fn("我是调用函数的")}</span>
</div>`;
console.log(tag2);

