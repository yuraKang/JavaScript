'use strict';
//Array 
// 1. Declaraton
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits =['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

console.clear();
// 3.Looping over an array
// print all frruits
// a. for
for(let i = 0; i < fruits.length; i ++)
{
    console.log(fruits[i]);
}
// b. for of
for(let value of fruits)
{
    console.log(value);
}
console.clear();
// c.forEach
fruits.forEach(function (fruit, index, array) {
    console.log(fruit);
    console.log(fruit, index);
    console.log(fruit, index, array);
});

fruits.forEach((fruit) => console.log(fruit));

// Additon, deletion, copy
// push : add an item to the end
fruits.push('peach', 'kiwi');
console.log(fruits);

// pop : rempve an item from the end
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('leamon', 'meloan');
console.log(fruits);
// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note !! shift, unshift are slower than pop, push
// splice : remove an item by index positon
fruits.push('strawBerry', 'grapes');
console.log(fruits);
//fruits.splice(1);//index 부터 뒤 전부 삭제
fruits.splice(1,2);//index 포함 갯수 삭제
console.log(fruits);
fruits.splice(1,2,'❤', '💕', '👀');
console.log(fruits);

// combine two arrays
const fruits2 = ['🐱‍🏍', '🐱‍💻', '🐱‍🚀'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('❤'));
console.log(fruits.indexOf('💕'));
console.log(fruits.indexOf('🙌'));
// includes
console.log(fruits.includes('🐱‍🚀'));
console.log(fruits.includes('👀'));

// lastIndexOf
console.clear();
console.log(fruits);
fruits.push('❤');
console.log(fruits);
console.log(fruits.indexOf('❤'));
console.log(fruits.lastIndexOf('❤'));

