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
let s='calm';
let blog = `<b>es6实践文章</b>，我是${s}。这是字符串模版。`;
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

/**
 * 对象
 */
//对象赋值
let name='calm';
let skill='web';
let obj = {name,skill};
console.log(obj);

//key值的构建
let key='skill';
let obj1 = {
    [key] : 'web'
};
console.log(obj1);

//自定义对象方法
let obj2 = {
    add:function (a,b) {
        return a+b;
    }
}
console.log(obj2.add(4,5));

//===同值相等，is严格相等
console.log(+0 === -0);  //true 他们的值都为0
console.log(NaN === NaN ); //false NaN为不确定对象，所以不相等
console.log(Object.is(+0,-0)); //false
console.log(Object.is(NaN,NaN)); //true

//Object.assign()合并对象
let oa = {a:'calm'};
let ob = {b:'平静'};
let oc = {c:'123'}
let od = Object.assign(oa,ob,oc);
console.log(od);

/**
 * Set和WeakSet数据结构
 */
//set不是数组，而是数据结构，set中不允许有重复内容
let setArray = new Set(['calm','pingjingsht','calm']);
console.log(setArray);
//追加add
setArray.add('测试追加');
//删除delete
setArray.delete('pingjingsht');
console.log(setArray);
//查找has
console.log(setArray.has('calm'));
//清空所有元素
//setArray.clear()
console.log(setArray);
//循环
for (let temp of setArray) {
    console.log('for of:'+temp);
}
setArray.forEach((temp) => {
    console.log('for each:'+temp);
});
//set的大小
console.log(setArray.size);
//WeakSet,new函数不允许直接在括号中赋值
let weakSet = new WeakSet();
let obj3 = {a:'calm',b:'pingjingsht'};
let obj4 = {a:'asdf',b:'pingjingsht'};
weakSet.add(obj3);
weakSet.add(obj4);
console.log(weakSet);//由于obj3,obj4是两个不同的对象，即便他们里面的属性值相等，在被放到weakset中后，也不会被去重


/**
 * Map
 */
let json = {
    name:'jspang',
    skill:'web'
}
console.log(json.name);
 
var map=new Map();
//增加值
map.set(json,'iam');
map.set('password','123456');
console.log(map);
//取值get(通过key取值)
console.log(map.get(json));
//size属性
console.log(map.size);
//查找是否存在has(通过key查找)
console.log(map.has(json));
//删除delete
map.delete(json);
console.log(map);
//清楚所有元素clear
map.clear();
console.log(map);

/**
 * Proxy预处理
 */
var obj5={
    add:function(val){
        return val+10;
    },
    name:'I am Jspang'
    
};

//声明Proxy
//第一个花括号就相当于我们方法的主体，后边的花括号就是Proxy代理处理区域，相当于我们写钩子函数的地方
let pro = new Proxy({
    add:function(val){
        return val+10;
    },
    name:'I am Jspang'
},{
    //target就是name:'I am Jspang'，key就是name，如果没有return target[key]，后面的console则无法打印出来pro.name
    get:function (target,key,property) {
        console.log('进入get的预处理');
        return target[key];//由于key是参数，你并不知道key具体代表的是那个参数，所以需要用target[key]取代target.name这样的形式
    },
    //target:目标值,key：目标的Key值,value：要改变的值,receiver：改变前的原始值
    set:function (target,key,value,receiver) {
        console.log(`进入set的预处理 ${key} = ${value}`);
        return target[key] = value+'test';
    }
});
console.log(`get的预处理：${pro.name}`);
pro.name='calm';
console.log(pro.name);

//apply的使用，apply的作用是调用内部的方法，它使用在方法体是一个匿名函数时
//目标，对谁预处理
let target = function (params) {
        return 'this is function';
};
//预处理部分
let handler = {
    apply(target,ctx,args){
        console.log('拦截方法');
        return Reflect.apply(...arguments);
    }
};
let pro2 = new Proxy(target,handler);
console.log(pro2());


/**
 * promise对象的使用
 */
let state = 1;
//resolve成功，reject失败
function step1(resolve,reject){
    console.log('1.开始-洗菜做饭');
    if(state==1){
        resolve('洗菜做饭--完成');
    }else{
        reject('洗菜做饭--出错');
    }
}
function step2(resolve,reject){
    console.log('2.开始-坐下来吃饭');
    if(state==1){
        resolve('坐下来吃饭--完成');
    }else{
        reject('坐下来吃饭--出错');
    }
}
function step3(resolve,reject){
    console.log('3.开始-收拾桌子洗完');
     if(state==1){
        resolve('收拾桌子洗完--完成');
    }else{
        reject('收拾桌子洗完--出错');
    }
}

new Promise(step1).then(function (val) {
    console.log(val);
    return new Promise(step2);
}).then(function (val) {
    console.log(val);
    return new Promise(step3);
}).then(function (val) {
    console.log(val);
});


/**
 * class
 */
class Coder{
    name(val3){
        console.log(val3);
        return val3;//这里如果不return，下面this.name则无法返回name方法的值
    }
    skill(val3){
        console.log(this.name('calm')+':'+'Skill:'+val3);
    }
    //通过constructor对类注入参数，注入的参数供整个类共享
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
 
    add(){
        return this.a+this.b;
    }
}
let calm3 = new Coder;
calm3.name('这是类方法函数打印出来的');
calm3.skill('java');
//类传参，通过constructor接收
let calm4 = new Coder(4,5);
console.log(calm4.add());
//类的继承
class htmler extends Coder{}
let pjsht = new htmler;
pjsht.name('类的继承');

/**
 * 模块化操作11
 */
import {tempa,square} from './temp';
console.log(tempa);
console.log(square(5));