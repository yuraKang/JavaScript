// 1. Use strict
// added in ES 5
// use this fir Valina Javascript
'use strict';

// 2. Variable, rw(Read and Write)
// let (added in ES6)]
let globalName = 'global name';

{
let name ='yura';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top) => 어디에 선언했냐에 상관없이 선언부를 제일 상위로 끌어올려주는 것
// has no block scope
{
    var age;
    age = 4;
}
console.log(age);

// 3. Constant, r(Read only)
// Immutable data types (변경 불가): premitive types, frozen objects(i.e object.freeze())
// Mutable data types (변경 가능): all obkects by default are mutable in JS
// favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive(값 자체가 저장 됨), single item : number, string, boolean, null, undefiend, symbol
// object(참조가 저장 됨), box container
// function, first-class function : function 도 변수에 할당가능 , 함수에 인자로도 전달 가능, 함수의 리턴 타입으로도 가능

const count = 17; //integer
const size = 17.1;//decinal number

console.log('value : '+ count +', type : ' + typeof count);
console.log('value : '+ size +', type : ' + typeof size);

// Number - speicla numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt(fairly new, don't use it)
//const bigInt = 123323432222222222222222222222222222222n;

// String
const char ='c';
const brendan ='brendan';
const greeting ='hello' + brendan;
console.log('value : '+ greeting +', type : ' + typeof greeting);
const helloBob = `hi ${brendan}`;// template literals (strnig)
console.log('value : '+ helloBob +', type : ' + typeof helloBob);

// Boolean 
// false: 0 , null, undefiened, Nan, ''
// true : aby other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

//null
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

// undefiend
let x;
console.log(`value : ${x}, type : ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);

//console.log(`value : ${symbol1}, type : ${typeof symbol1}`);//에러발생
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);

// object , real-life object, data structure
const yura  = 
{
    name : 'yura',
    age : 32
};

console.log(`name : ${yura.name} , age : ${yura.age}`);

yura.age = 31;
console.log(`name : ${yura.name} , age : ${yura.age}`);

// 5. Dynamic typing : dynamically typed language
let text ='hello';
console.log(text.charAt(0));//h
console.log(`value : ${text}, type : ${typeof text}`);
text =1;
console.log(`value : ${text}, type : ${typeof text}`);
text ='7' + 5;
console.log(`value : ${text}, type : ${typeof text}`);
text ='8' / '2';
console.log(`value : ${text}, type : ${typeof text}`);
//console.log(text.charAt(0));//number 인덱스 에러