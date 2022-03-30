'use strict';
// Function 
// - fundamental buliding block in the ptogram
// - subprogram can be used multiple times
// - performs a task or calulates a value

// 1 . Function declaration
// function name (pram1, pram2){ body ... return;}
// one function === one thing
// nameing : doSomething, command, verb
// e.g createCardandPoint -> createCard, createPoint
// function is object in JS 

function printHello(){
    console.log('HELLO');
}

printHello();

function log(message){
    console.log(message);
}

log('안녕');

// 2. Prameters
// primitive patameters : passed by value
// object prameters : passed by refrence
function changeName(obj)
{
    obj.name = 'coder';
}

const yura = {name : 'yura'};
changeName(yura);
console.log(yura);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknow')
{
    console.log(`${message} by ${from}`);
}

showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args)
{
    for(let i =0; i < args.length; i++)
    {
        console.log(args[i]);
    }

    for(const arg of args)
    {
        console.log(arg);
    }

    args.forEach(arg => {
        console.log(arg);
    });
}

printAll('dream','coding','yura');

// 5. Local scope
let globalMesage = 'global'; // global variable
function printMessage ()
{
    let message ='hello';
    console.log(message);// local variable
    console.log(globalMesage);
    function printAnotherMessage ()
    {
        console.log(message);// local variable
        let chileMessage ='~~';
    }
}

printMessage();

// 6. Returm a value
function sum(a, b)
{
    return a + b; 
}

console.log(sum(30,4));

// 7. Early return, early exit
// bad
function upfradeUser(user)
{
    if(user.point > 10)
    {
        //long update logic..
    }
}
//good 
function updateUser(user)
{
    if(user.point <= 10)
    {
        return;
    }

    //long update logic..
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// van be passed as an argument to other functions.
// can be returned by anoter function

//1. Function expression
// a function declaration can be called earlier than it is defiend.(hoisted)
// a fucntion expression is created when the execution reaches it/
const print = function ()// anonymous function
{
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo)
{
    if(answer === 'love you')
    {
        printYes();
    }else
    {
        printNo();
    }
}

function PrintGetYes()
{
    console.log('YES!');
}

//named fucntion
// better debugging in debugger's stack tracee
// recursion
const PrintGetNo = function PrintGetNo()
{
    console.log('NO!');
    //PrintGetNo();// recursion 자기안에서 자신을 호출 계속 호출됨!
}
randomQuiz('love you',PrintGetYes, PrintGetNo);
randomQuiz('loved you',PrintGetYes, PrintGetNo);

// Arrow function
// always anonymous
const simplePrint = function()
{
    console.log('simplePrint!');
};

simplePrint();

const simplePrintArrow = () => 
{
    console.log('Arrow function');
    console.log('good Arrow function');
}

simplePrintArrow();

const add = (a, b) =>  a + b;
const add2 = function add (a, b)
{
    return a + b;
}

console.log(add(11,9));
console.log(add2(10,9));

//IIFE : immediately Invoked Finction Expression
//선언과 동시에 호출
(function hello()
{
    console.log('IIFE');
})();

const calculateNumber = function (type, num1, num2)
{
    let result;

    switch (type) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'div':
            result = num1 / num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'rem':
            result = num1 % num2;
            break;      
        default:
            result ='wrong Expression';
            break;
    }

    console.log(result);
}


calculateNumber('add', 8,3);
calculateNumber('sub', 8,3);
calculateNumber('div', 8,3);
calculateNumber('mul', 8,3);
calculateNumber('rem', 8,3);
calculateNumber('rffem', 8,3);
