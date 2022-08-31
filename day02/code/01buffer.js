/**
 * buffer的基本操作
 */
//实例化Buffer对象
let buf = Buffer.from("hello");
console.log("buf:", buf);
let buf2 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log("buf2:", buf2.toString());
let buf3 = Buffer.alloc(4);
console.log("buf3:", buf3);
//功能方法 静态方法
//判断是否支持该编码
console.log("isEncoding:", Buffer.isEncoding("utf-8")); //true
console.log("isEncoding:", Buffer.isEncoding("gbk"));   //false
//判断是否为buffer对象
let buf4 = Buffer.from("hello");
console.log("isBuffer:", Buffer.isBuffer(buf4)); //true
console.log("isBuffer:", Buffer.isBuffer({}));   //false
//返回字节长度
let buf5 = Buffer.from("中国");
let buf6 = Buffer.from("china");
console.log("byteLength:", Buffer.byteLength(buf5)); //6 一个中文字符就是三个字节
console.log("byteLength:", Buffer.byteLength(buf6)); //5 一个英文字符就是一个字节
//拼接buffer
let buf7 = Buffer.from("hello");
let buf8 = Buffer.from(" world");
let buf9 = Buffer.concat([buf7, buf8]);
console.log("buf9:", buf9.toString());
console.log("buf9:", Buffer.byteLength(buf9));
//实例化方法
// 向buffer对象中写入内容 write(要写入的字符串，写入之前跳过的字节数(从后往前跳)，写入的字节长度，encoding)
let buf10 = Buffer.alloc(5);
buf10.write("hello",1,5);
console.log("buf10:", buf10.toString());
//截取buffer对象
let buf11 = Buffer.from("hello");
// let buf12 = buf11.slice(1);
let buf12 = buf11.slice(1, 3);
console.log("buf12:", buf12.toString());
//使用JSON.stringify自动调用toJSON
const buf13 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf13);
console.log(json);



