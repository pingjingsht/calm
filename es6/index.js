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