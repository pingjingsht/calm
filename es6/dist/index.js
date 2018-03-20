'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _temp = require('./temp');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _JSPang = "JSPang",
    _JSPang2 = _slicedToArray(_JSPang, 6),
    a = _JSPang2[0],
    b = _JSPang2[1],
    c = _JSPang2[2],
    d = _JSPang2[3],
    e = _JSPang2[4],
    f = _JSPang2[5];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

function jspang() {
    console.log(arguments.length <= 0 ? undefined : arguments[0]);
    console.log(arguments.length <= 1 ? undefined : arguments[1]);
    console.log(arguments.length <= 2 ? undefined : arguments[2]);
    console.log(arguments.length <= 3 ? undefined : arguments[3]);
}
jspang(1, 2, 3);

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
var arr1 = ['www', 'jspang', 'com'];
//let arr2=arr1;//这里arr2和arr1指向同一个内存，arr2的改变也会使arr1改变
var arr2 = [].concat(arr1); //这里的...指的是arr1里的内容，后面arr2的改变不会影响到arr1
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr2);
console.log(arr1);

/**
 * rest运算符（rest意为剩余）
 */
function jspang(first) {
    for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
//jspang函数中第一个参数first是已知参数，那么...arg就是后7个参数 1,2,3,4,5,6,7
jspang(0, 1, 2, 3, 4, 5, 6, 7);

/**
 * 字符串模版
 */
var s = 'calm';
var blog = '<b>es6\u5B9E\u8DF5\u6587\u7AE0</b>\uFF0C\u6211\u662F' + s + '\u3002\u8FD9\u662F\u5B57\u7B26\u4E32\u6A21\u7248\u3002';
document.write(blog);
//对运算的支持
var sa = 1;
var sb = 2;
var result = '' + (sa + sb);
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
var binary = 21;
console.log(binary);
//八进制
var ba = 438;
console.log(ba);
//数字验证（是否为数字）
var shuzi = 11 / 4;
console.log(Number.isFinite(shuzi)); //true
var shuzis = 'calm';
console.log(Number.isFinite(shuzis)); //false
var shuzis2 = '123';
console.log(Number.isFinite(shuzis2)); //false
//判断是否为整数Number.isInteger(xx)
console.log('是否为整数' + Number.isInteger(3.33));
//整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
var shuzi2 = '9.18';
console.log(Number.parseInt(shuzi2));
console.log(Number.parseFloat(shuzi2));

//整数的取值范围
var maxi = Math.pow(2, 53) - 1; //最大的整数
console.log(maxi); //9007199254740991
//最大安全整数
console.log(Number.MAX_SAFE_INTEGER);
//最小安全整数
console.log(Number.MIN_SAFE_INTEGER);
//安全整数判断isSafeInteger( )
console.log(Number.isSafeInteger(maxi + 1)); //false

/**
 * 数组
 */
//json数组格式转为普通数组，冒号左侧的数字为数组的游标，从0开始
var json3 = {
    '0': 'ceshi1',
    '1': '测试2',
    '2': '测试3',
    length: 3
};
var arr3 = Array.from(json3);
console.log('数组测试:' + arr3);

//文本或者变量转换成数组
var arr4 = Array.of(3, 4, 5, '测试数组');
console.log(arr4);

//find()实例方法，从数字中查找
var arr5 = [1, 2, 3, 4, 5, 6, 7];
console.log(
//valeu当前查找的值，index数组的下标，arr5被查找的数组
arr5.find(function (value, index, arr5) {
    return value > 5;
}));

//fill()，把数组进行填充，它接收三个参数，第一个参数是填充的变量，
//第二个是开始填充的位置，第三个是填充到的位置(这里参数传的是5，其实是把第4位进行了填充)
var arr6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr6.fill('jspang', 2, 5);
console.log(arr6);

//for...of循环
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arr6[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var iterator = _step2.value;

        console.log(iterator);
    }
    //输出索引
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = arr6.keys()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var tindex = _step3.value;

        console.log(tindex);
    }
    //输出索引和内容
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = arr6.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _step4$value = _slicedToArray(_step4.value, 2),
            index = _step4$value[0],
            val = _step4$value[1];

        console.log(index + ':' + val);
    }
    //entries( )实例方法：next()手动跳转到下一个值
    //list.next().value返回的是一个数组，有两个元素，第一个元素是list的下标，第二个是list的值
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}

var list = arr6.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value[1]);

/**
 * 箭头函数及扩展
 */
//主动抛出错误
function add(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    if (a == 0) {
        throw new Error('a this error');
    }
}
//console.log(add(0));

//箭头函数,a+b在这里为返回值,箭头函数中不允许使用new
var add2 = function add2(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    return a + b;
};
console.log(add2(5));

//箭头函数，函数体为多行
var add3 = function add3(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    a = a + 10;
    return a + b;
};
console.log(add3(5));

/**
 * 函数
 */
//对象的函数解构，避免函数在调用的时候一个一个的传入参数
var json4 = {
    a: 'calm',
    b: '平静'
};
function fun(_ref) {
    var a = _ref.a,
        _ref$b = _ref.b,
        b = _ref$b === undefined ? 'pingjing' : _ref$b;

    console.log(a, b);
}
fun(json4);

//数组的函数结构
var arr7 = ['calm', 'pingjing', 'calm2'];
function fun2(a, b, c, d) {
    console.log(a, b, c, d);
}
fun2.apply(undefined, arr7);
//in的用法(对象),判断b这个属性是否存在
console.log('b' in json4);
//in的用法（数组），判断0这个下标对应的位置是否有值
var arr8 = [,,,,,,,,,];
console.log(0 in arr7);
console.log(0 in arr8);
//数组遍历forEach，自动过滤空元素
var arr9 = ['aaa', 'bbb',, 'ccc'];
arr9.forEach(function (val, index) {
    return console.log(index, val);
});
arr9.forEach(function (val) {
    return console.log(val);
});
//数组遍历filter
arr9.filter(function (val) {
    return console.log(val);
});
//数组遍历+替换map
console.log(arr9.map(function (val) {
    return 'web';
}));
//数组转字符串
console.log('数组转字符串:' + arr9.toString());
//数组转字符串，并把逗号替换为|
console.log(arr9.join('|'));

/**
 * 对象
 */
//对象赋值
var name = 'calm';
var skill = 'web';
var obj = { name: name, skill: skill };
console.log(obj);

//key值的构建
var key = 'skill';
var obj1 = _defineProperty({}, key, 'web');
console.log(obj1);

//自定义对象方法
var obj2 = {
    add: function add(a, b) {
        return a + b;
    }
};
console.log(obj2.add(4, 5));

//===同值相等，is严格相等
console.log(+0 === -0); //true 他们的值都为0
console.log(NaN === NaN); //false NaN为不确定对象，所以不相等
console.log(Object.is(+0, -0)); //false
console.log(Object.is(NaN, NaN)); //true

//Object.assign()合并对象
var oa = { a: 'calm' };
var ob = { b: '平静' };
var oc = { c: '123' };
var od = Object.assign(oa, ob, oc);
console.log(od);

/**
 * Set和WeakSet数据结构
 */
//set不是数组，而是数据结构，set中不允许有重复内容
var setArray = new Set(['calm', 'pingjingsht', 'calm']);
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
var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
    for (var _iterator5 = setArray[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var temp = _step5.value;

        console.log('for of:' + temp);
    }
} catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
        }
    } finally {
        if (_didIteratorError5) {
            throw _iteratorError5;
        }
    }
}

setArray.forEach(function (temp) {
    console.log('for each:' + temp);
});
//set的大小
console.log(setArray.size);
//WeakSet,new函数不允许直接在括号中赋值
var weakSet = new WeakSet();
var obj3 = { a: 'calm', b: 'pingjingsht' };
var obj4 = { a: 'asdf', b: 'pingjingsht' };
weakSet.add(obj3);
weakSet.add(obj4);
console.log(weakSet); //由于obj3,obj4是两个不同的对象，即便他们里面的属性值相等，在被放到weakset中后，也不会被去重


/**
 * Map
 */
var json = {
    name: 'jspang',
    skill: 'web'
};
console.log(json.name);

var map = new Map();
//增加值
map.set(json, 'iam');
map.set('password', '123456');
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
var obj5 = {
    add: function add(val) {
        return val + 10;
    },
    name: 'I am Jspang'

};

//声明Proxy
//第一个花括号就相当于我们方法的主体，后边的花括号就是Proxy代理处理区域，相当于我们写钩子函数的地方
var pro = new Proxy({
    add: function add(val) {
        return val + 10;
    },
    name: 'I am Jspang'
}, {
    //target就是name:'I am Jspang'，key就是name，如果没有return target[key]，后面的console则无法打印出来pro.name
    get: function get(target, key, property) {
        console.log('进入get的预处理');
        return target[key]; //由于key是参数，你并不知道key具体代表的是那个参数，所以需要用target[key]取代target.name这样的形式
    },
    //target:目标值,key：目标的Key值,value：要改变的值,receiver：改变前的原始值
    set: function set(target, key, value, receiver) {
        console.log('\u8FDB\u5165set\u7684\u9884\u5904\u7406 ' + key + ' = ' + value);
        return target[key] = value + 'test';
    }
});
console.log('get\u7684\u9884\u5904\u7406\uFF1A' + pro.name);
pro.name = 'calm';
console.log(pro.name);

//apply的使用，apply的作用是调用内部的方法，它使用在方法体是一个匿名函数时
//目标，对谁预处理
var target = function target(params) {
    return 'this is function';
};
//预处理部分
var handler = {
    apply: function apply(target, ctx, args) {
        console.log('拦截方法');
        return Reflect.apply.apply(Reflect, arguments);
    }
};
var pro2 = new Proxy(target, handler);
console.log(pro2());

/**
 * promise对象的使用
 */
var state = 1;
//resolve成功，reject失败
function step1(resolve, reject) {
    console.log('1.开始-洗菜做饭');
    if (state == 1) {
        resolve('洗菜做饭--完成');
    } else {
        reject('洗菜做饭--出错');
    }
}
function step2(resolve, reject) {
    console.log('2.开始-坐下来吃饭');
    if (state == 1) {
        resolve('坐下来吃饭--完成');
    } else {
        reject('坐下来吃饭--出错');
    }
}
function step3(resolve, reject) {
    console.log('3.开始-收拾桌子洗完');
    if (state == 1) {
        resolve('收拾桌子洗完--完成');
    } else {
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

var Coder = function () {
    _createClass(Coder, [{
        key: 'name',
        value: function name(val3) {
            console.log(val3);
            return val3; //这里如果不return，下面this.name则无法返回name方法的值
        }
    }, {
        key: 'skill',
        value: function skill(val3) {
            console.log(this.name('calm') + ':' + 'Skill:' + val3);
        }
        //通过constructor对类注入参数，注入的参数供整个类共享

    }]);

    function Coder(a, b) {
        _classCallCheck(this, Coder);

        this.a = a;
        this.b = b;
    }

    _createClass(Coder, [{
        key: 'add',
        value: function add() {
            return this.a + this.b;
        }
    }]);

    return Coder;
}();

var calm3 = new Coder();
calm3.name('这是类方法函数打印出来的');
calm3.skill('java');
//类传参，通过constructor接收
var calm4 = new Coder(4, 5);
console.log(calm4.add());
//类的继承

var htmler = function (_Coder) {
    _inherits(htmler, _Coder);

    function htmler() {
        _classCallCheck(this, htmler);

        return _possibleConstructorReturn(this, (htmler.__proto__ || Object.getPrototypeOf(htmler)).apply(this, arguments));
    }

    return htmler;
}(Coder);

var pjsht = new htmler();
pjsht.name('类的继承');

/**
 * 模块化操作11
 */

console.log(_temp.tempa);
console.log((0, _temp.square)(5));
