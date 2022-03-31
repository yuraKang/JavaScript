'use strict';
// Objects
// one of the JavaScript's data types/
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instance of Object
// object = {key : value};

// 1. Literals and properties
const obj1 ={};// 'object literal' syntax
const obj2 = new Object();// 'object constructor' syntax
const name ='yura';
const age =32;
print (name, age);

function print(name, age)
{
    console.log(`name : ${name}, age : ${age}`);
}

const yura = 
{
    name : 'yura',
    age : 32,
    address : '부천'
};

printObject (yura);

function printObject(obj)
{
    console.log(`name : ${obj.name}, age : ${obj.age} address : ${obj.address}`);
}

//with JavaScript magic(dynamically typed language)
// can add properties later
yura.hasjob = true;
console.log(yura.hasjob);

// Can delete properties later
delete yura.hasjob;
console.log(yura.hasjob);

// 2. Computed properties
// key should be always string
console.log(yura.name);
console.log(yura['name']);
yura['hasJob'] = true;
console.log(yura['hasJob']);

function printValue(obj, key)
{
    console.log(obj[key]);
}

printValue(yura, 'name');

// 3. Property Value shorthand
const person1 = {name : 'bob', age :2 };
const person2 = {name : 'steve', age :3 };
const person3 = {name : 'dave', age :4 };
const person4 = makePerson('yura',5);
const person5 = new Person('tobby',2);
function makePerson(name, age)
{
    return{ name, age}
}

//Constructor function
function Person(name, age)
{
    //this ={};
    this.name = name;
    this.age = age;
    //return this
}
console.log(person4.name);
console.log(person4.age);
console.log(person5);

// 5. in operator : property existence check (key in obj)
console.log('name' in yura);
console.log('age' in yura);
console.log('phonNumber' in yura);
console.log(yura.phonNumber);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in yura)
{
    console.log(key);
}
// for (value of iterable)
const array = [1,2,3,4];
for(let value of array)
{
    console.log(value);
}

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = {name : 'hojun', age :3 };
const user2 = user;
//user2.name = 'coder';
console.log(user.name);

// old way
const user3 ={};
for(let key in user)
{
    user3[key] = user[key];
}
console.clear();
console.log(user3.name);

//new way
const user4 = {};
Object.assign(user4, user);
console.log(user4.age);

const user5 = Object.assign({}, user);
console.log(user5.age);

// another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size :'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);