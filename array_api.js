'use strict';
  // Q1. make a string out of an array
  {
    const fruits = ['apple', 'banana', 'orange'];

    let string = '';
    for(let value of fruits)
    {
        string += value;
    }
  
    console.log(string);
  }

  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';

    const arry = [];

    const stringArr = fruits.split(',');

    for(let value of stringArr)
    {
        arry.push(value);
    }

    console.log(arry);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];

    const revArry =[];
    const arrayLength = array.length;

    for(let i = 0; i < arrayLength; i++)
    {
        revArry.push(array.pop());
    }

    console.log(revArry);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    array.splice(0 , 2);
    const newArray = Object.assign({}, array);
    console.log(newArray);
  }
  
  class StudentClass {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const studentsEx = [
    new StudentClass('A', 29, true, 45),
    new StudentClass('B', 28, false, 80),
    new StudentClass('C', 30, true, 90),
    new StudentClass('D', 40, false, 66),
    new StudentClass('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      function findStudent(student)
      {
          return student.score === 90;
      }
      console.log(studentsEx.find(findStudent));
  }
  
  // Q6. make an array of enrolled students
  {
      const enrolledStudent =[];
      for(let value of studentsEx)
      {
          if(value.enrolled === true)
          {
            enrolledStudent.push(value);
          }
      }
      console.log(enrolledStudent);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const scoreArray = [];
      for(let values of studentsEx)
      {
          scoreArray.push(values.score);
      }
      console.log(scoreArray);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      function CheckIsUnderScore(studentArr)
      {
          for(let values of studentArr)
          {
              if(values.score < 50)
              {
                return true;
              }else
              {
                return false;
              }            
          }
      }

      console.log(CheckIsUnderScore(studentsEx));
  }
  
  // Q9. compute students' average score
  {
       function Sum()
      {
          let sum = 0 ;
          for(let values of studentsEx)
          {            
              sum += values.score;
          }
          return sum;
      }

      console.log(Sum()/studentsEx.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    let scoreString ='';
    for(let values of studentsEx)
    {
        scoreString += values.score+',';
    }
    console.log(scoreString.substring(0, scoreString.length-1));
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {

  }

console.log('solution start !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
 
  // Q1. make a string out of an array
  {
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',',4);
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(array);
    console.log(result);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result  = array.slice(2,array.length); 
    console.log(result);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      const result = students.find((student) => student.score === 90);
      console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter((student) => student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) =>student.score);
      console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result1 = !students.every((student) => student.score >= 50);
    console.log(result1);
  }
  
  // Q9. compute students' average score
  {
    const result = students.reduce((prev, curv) => { 
        console.log('========================');
        console.log(prev);
        console.log(curv);
        return prev + curv.score;
    }, 0);
    console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students.map((students)=> students.score).join(',');
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students.sort((first, second)=> first.score - second.score)
    .map((student) => student.score).join(',');
    console.log(result);

    const result1 = students.map((student) => student.score)
    .sort((a,b)=> a - b)
    .join(',');
    console.log(result1);
  }