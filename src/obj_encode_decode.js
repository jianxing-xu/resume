import { ID } from './language/lang.js'

// 还原obj对象
export function decodeObj(obj) {
  Object.keys(obj).map((k) => {
    getNested(k);
  });
  console.log(obj);
  return obj;

  function getNested(key) {
    const idx = key.lastIndexOf(".");
    const value = obj[key];
    if (~idx) {
      // 先删除当前value值，后面做undefined判断
      delete obj[key];
      const mainKey = key.slice(0, idx);
      const subKey = key.slice(idx + 1);
      // 不是的话，代表这个对象中还有其他属性所以只要赋值其中一个就可以
      if (obj[mainKey] != undefined) {
        obj[mainKey][subKey] = value;
      } else {
        // 判断是否是undefined,是的话代表这个对象中没有其他属性了只有一个属性
        obj[mainKey] = { [subKey]: value };
      }

      if (/\./.test(mainKey)) {
        getNested(mainKey);
      }
    }
  }
}
export function expandObj(obj) {
  let tempObj = obj;
  for (let k in obj) {
    const keys = k.split('.');
    const value = obj[k];
    while (keys.length) {
      const key = keys.shift();
      // 当是最后一个key的时候直接赋值 
      if (keys.length === 0) {
        tempObj[key] = value;
      } else {
        // 不是最后一个key，先创建新对象将新对象赋值给tempObj,tempObj拿着新对象的引用进行下一步操作
        tempObj[key] = { ...tempObj[key] };
        tempObj = tempObj[key];
      }
    }
    // 删除obj中带.的属性
    if (~k.indexOf('.')) delete obj[k];
    tempObj = obj;
    console.log(tempObj)
  }
  return tempObj;
}

// 拉平obj对象为一层，key为以 . 分割的组合 { 'a.b.c': 999 }
function flatObj(obj, result = {}, preKey = '') {
  for (let k in obj) {
    const item = obj[k];
    const key = preKey === '' ? k : `${preKey}.${k}`;
    if (typeof item === "object") {
      flatObj(item, result, key);
    } else {
      result[key] = item;
    }
  }
  return result;
}
function encodeObj(obj) {
  const keyArr = [];
  const newObj = {};
  const _c = function (o) {
    for (let key in o) {
      let value = o[key];
      keyArr.push(key);
      if (typeof value == 'object') {
        _c(value);
      } else {
        newObj[keyArr.join(".")] = value;
      }
      keyArr.pop();
    }
  }
  _c(obj);
  return newObj;
}


const obj = {
  "a.b.c.dd": "abcdd",
  "a.d.xx": "adxx",
  "a.e": "ae"
}
const normalObj = {
  a: {
    b: {
      c: {
        dd: 'abcd'
      }
    }, d: { xx: 'adxx' }, e: 'ae'
  }
}


// console.time('TEST_DECODE ME');
// flatObj(ID);
// console.timeEnd('TEST_DECODE ME')


// console.time('TEST_DECODE');
// encodeObj(ID);
// console.timeEnd('TEST_DECODE')

console.log(expandObj(obj))



