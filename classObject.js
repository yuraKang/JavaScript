'use strict';
//Object-oriented programming
// class : template
// object : instance of a class
// JavaScript classes
// - introduced in ES6
// syntactical sugar over prototype-based inheritance

// 1.Class declarations
class Person{
    //constructor
    constructor(name, age)
    {
        //fields
        this.name = name;
        this.age = age;
    }

    //method
    speak()
    {
        console.log(`${this.name}: hello!`);
    }
}

const yura = new Person('yura', 32);
console.log(yura.name);
console.log(yura.age);
yura.speak();

// 2. Getter and Setter
class User{
    constructor(firstName, lastName, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age()
    {
        return this._age;
    }

    set age(values)
    {
        this._age= values < 0? 0 : values;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3.Fileds (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaStript/Reference
class Experiment{
    publicField = 2;
    #privateField =0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Aritcle {
    static publisher ='yurayura';
    constructor(articleNumber)
    {
        this.articleNumber = articleNumber;
    }

    static printPublisher()
    {
        console.log(Aritcle.publisher);
        
    }
}

const article1 = new Aritcle(1);
const article2 = new Aritcle(2);
console.log(article1.publisher);
console.log(Aritcle.publisher);
Aritcle.printPublisher();

// 5. Ingerutance
// a way for one class to extend another class.
class Shape
{
    constructor(width, height, color)
    {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw ()
    {
        console.log(`drawing ${this.color} color of`);
    }

    getArea ()
    {
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triagle extends Shape
{
    draw ()
    {   
        super.draw();
        console.log('🎶🎶');
    }

    getArea()
    {
        return (this.width * this.height) /2;
    }
}

const rectangle = new Rectangle(20,50,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const trialgle = new Triagle(20,50,'blue');
trialgle.draw();
console.log(trialgle.getArea());

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle);//true
console.log(trialgle instanceof Rectangle);//false
console.log(trialgle instanceof Triagle);//true
console.log(trialgle instanceof Shape);//true
console.log(trialgle instanceof Object);//true