'use strict';
// 1.String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2 = ${1 + 2}`);

// 2.Numberic operator
console.log( 1 + 1); // add
console.log( 1 - 1); // substaract
console.log( 1 / 1); // divide
console.log( 1 * 1); // multiply
console.log( 5 % 2); // remainder
console.log( 2 ** 3); // exponentiaion

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);

// 4. Assignment opeators
let x = 3;
let y = 6;
x += y; // x = x + y = 9
console.log(x);
x -= y; // x = x - y = 3
console.log(x);
x *= y; // x = x * y = 18
console.log(x);
x /= y; // x = x / y = 3
console.log(x);

// 5, Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Lofical operators : ||, &&, !
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// 처음 true 만나면 그 뒤 연산 하지 않기 때문에
// 뒤로 갈수록 복잡한 연산으로 얻을 수 있는 조건을 넣는다
console.log(`or : ${value1 || value2 || check()}`);

// $$ (and), finds the first falsy value
// 처음 false 만나면 그 뒤 연산 하지 않기 때문에
// 뒤로 갈수록 복잡한 연산으로 얻을 수 있는 조건을 넣는다
console.log(`and : ${value1 && value2 && check()}`);

//often used to compress long if-statement
// nullableObject && nullableObject.somthing
// if(nullableObject != null)
// {
//     nullableObject.someting;
// }

// !(not)
console.log(!value1);

function check()
{
    for (let i = 0; i < 10; i++)
    {
        //wasting time
        console.log('😎');
    }
    
    return true;
}

// 7.Equality
const stringFive ='5';
const numberFive = 5;
console.log('Equality');
// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion - 타입영향
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by refrence
const yura1 = {name : 'yura'};
const yura2 = {name : 'yura'};
const yura3 = yura1;
console.log('object equality by refrence');
console.log(yura1 == yura2);//refrence value 다름
console.log(yura1 === yura2);//refrence value 다름
console.log(yura1 === yura3);//refrence value 같음

// equality = puzzler
console.log('equality = puzzler');
console.log( 0 == false );// true
console.log( 0 === false );//false
console.log( '' == false );// true
console.log( '' === false );//false
console.log( null == undefined );//true
console.log( null === undefined );//false

// 8. Conditional operators : if
// if, else if, else
const name = 'yura';
if(name === 'yura')
{
    console.log('welcom');
}else if (name === 'coder')
{
    console.log('HI');
}else
{
    console.log('out');
}

// 9. Ternary operator : ?
//condition ? value : value2;

// 10. Switch statemnet
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser ="Firefox";

switch (browser) {
    case "IE":
        console.log(browser);
        break;
    case "Chrome":
    case "Firefox":
        console.log(browser + '1');
            break;
    default:
        console.log('not');
        break;
}

// 11.Loop
// while loop, whuke the condition is truthy,
// body code us executed.

// do while loop, body code is executed first,
// then check the condition.

// for loop, for(begin; condtion; step)
for(i = 3; i > 0; i--)
{
 console.log(`for : ${i}`);
}
//3, 2, 1

for(let i = 3; i > 0 ; i = i - 2)
{
    //inline variable declaration
    console.log(`inline variable declaration for : ${i}`);
}
// 3, 1

//break, continue
// Q1. iterate from 0 to 10 and print only even numbers( use continue)
for(let i = 0; i < 11; i++)
{
    if(i % 2 !== 0)
    {
        continue;
    }

    console.log(i); 
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i < 11; i++)
{
    if(i > 8)
    {
        break;
    }

    console.log(i); 
}