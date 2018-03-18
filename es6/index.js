const [a,b,c,d,e,f]="JSPang";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);


function jspang(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
}
jspang(1,2,3);

/**
let arr1=['www','jspang','com'];
let arr2=arr1;
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr1);
 */


/**
 * 对象扩展运算符（...）
 * */
let arr1=['www','jspang','com'];
//let arr2=arr1;//这里arr2和arr1指向同一个内存，arr2的改变也会使arr1改变
let arr2=[...arr1];//这里的...指的是arr1里的内容，后面arr2的改变不会影响到arr1
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr2);
console.log(arr1);

/**
 * rest运算符（rest意为剩余）
 */
function jspang(first,...arg){
    for(let val of arg){
        console.log(val);
    }
}
//jspang函数中第一个参数first是已知参数，那么...arg就是后7个参数 1,2,3,4,5,6,7
jspang(0,1,2,3,4,5,6,7);

/**
 * 字符串模版
 */
let s='技术胖';
let blog = `<b>非常高兴你能看到这篇文章</b>，我是你的老朋友${s}。这节课我们学习字符串模版。`;
document.write(blog);
//对运算的支持
let sa=1;
let sb=2;
let result=`${sa+sb}`;
document.write(result);
//搜索
document.write(blog.includes(s));
document.write(blog.startsWith(s));
document.write(blog.endsWith(s));
document.write('calm|'.repeat(3));


/**
 * 数字操作
 */
//二进制
let binary = 0b010101;
console.log(binary);
//八进制
let ba=0o666;
console.log(ba);
//数字验证（是否为数字）
let shuzi= 11/4;
console.log(Number.isFinite(shuzi));//true
let shuzis = 'calm';
console.log(Number.isFinite(shuzis));//false
let shuzis2 = '123';
console.log(Number.isFinite(shuzis2));//false
//判断是否为整数Number.isInteger(xx)
console.log('是否为整数'+Number.isInteger(3.33));
//整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
let shuzi2='9.18';
console.log(Number.parseInt(shuzi2)); 
console.log(Number.parseFloat(shuzi2));

//整数的取值范围
let maxi = Math.pow(2,53)-1;//最大的整数
console.log(maxi); //9007199254740991
//最大安全整数
console.log(Number.MAX_SAFE_INTEGER);
//最小安全整数
console.log(Number.MIN_SAFE_INTEGER);
//安全整数判断isSafeInteger( )
console.log(Number.isSafeInteger(maxi+1));//false

/**
 * 数组
 */
//json数组格式转为普通数组，冒号左侧的数字为数组的游标，从0开始
let json3 = {
    '0' : 'ceshi1',
    '1' : '测试2',
    '2' : '测试3',
    length : 3
}
let arr3 = Array.from(json3);
console.log('数组测试:'+arr3);

//文本或者变量转换成数组
let arr4 = Array.of(3,4,5,'测试数组');
console.log(arr4);

//find()实例方法，从数字中查找
let arr5 = [1,2,3,4,5,6,7];
console.log(
    //valeu当前查找的值，index数组的下标，arr5被查找的数组
    arr5.find(function(value,index,arr5){
        return value>5;
    })
);

//fill()，把数组进行填充，它接收三个参数，第一个参数是填充的变量，
//第二个是开始填充的位置，第三个是填充到的位置(这里参数传的是5，其实是把第4位进行了填充)
let arr6=[0,1,2,3,4,5,6,7,8,9];
arr6.fill('jspang',2,5);
console.log(arr6);

//for...of循环
for (let iterator of arr6) {
    console.log(iterator);
}
//输出索引
for (let tindex of arr6.keys()) {
    console.log(tindex);
}
//输出索引和内容
for (let [index,val] of arr6.entries()) {
    console.log(index+':'+val);
}
//entries( )实例方法：next()手动跳转到下一个值
//list.next().value返回的是一个数组，有两个元素，第一个元素是list的下标，第二个是list的值
let list=arr6.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value[1]);

/**
 * 箭头函数及扩展
 */
//主动抛出错误
function add(a,b=1){
    if (a == 0) {
        throw new Error('a this error');
    }
}
//console.log(add(0));

//箭头函数,a+b在这里为返回值,箭头函数中不允许使用new
var add2 = (a,b=10)=>a+b;
console.log(add2(5));

//箭头函数，函数体为多行
var add3 = (a,b=10)=>{
    a = a+10;
    return a+b;
}
console.log(add3(5));


/**
 * 函数
 */
//对象的函数解构，避免函数在调用的时候一个一个的传入参数
let json4 = {
    a:'calm',
    b:'平静'
}
function fun({a,b='pingjing'}) {
    console.log(a,b);
}
fun(json4);

//数组的函数结构
let arr7 = ['calm','pingjing','calm2'];
function fun2(a,b,c,d) {
    console.log(a,b,c,d);
}
fun2(...arr7);
//in的用法(对象),判断b这个属性是否存在
console.log('b' in json4);
//in的用法（数组），判断0这个下标对应的位置是否有值
let arr8 = [,,,,,,,,,];
console.log(0 in arr7);
console.log(0 in arr8);
//数组遍历forEach，自动过滤空元素
let arr9 = ['aaa','bbb',,'ccc'];
arr9.forEach((val,index) => console.log(index,val));
arr9.forEach(val=>console.log(val));
//数组遍历filter
arr9.filter(val=>console.log(val));
//数组遍历+替换map
console.log(arr9.map(val=>'web'));
//数组转字符串
console.log('数组转字符串:'+arr9.toString());
//数组转字符串，并把逗号替换为|
console.log(arr9.join('|'));