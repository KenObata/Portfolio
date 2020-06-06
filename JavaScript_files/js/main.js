'use strict';

/* The goal of this file is to understand basic grammer of javascript.*/

/*
const: constant variable
let: variable
*/

const price = 150;
console.log(price);

let price2 = 160;
console.log(price);

//show data type of each objects.
console.log(typeof 'hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

console.log(parseInt('5', 10)+3);

//compare 

const score = 40;
score >= 80 ? console.log('Great!') : console.log('Not good...')

// 'AND' => && 'OR' => ||

//SWITCH
const signal ='red';

switch(signal){
    case 'red':
        console.log('Stop.');
        break;
    case 'yellow':
        console.log('Careful!');
        break;
    case 'blue':
        console.log('Go.');
        break;
    default:
        console.log('Wrong signal!');
        break;
}


//loop
for(let i =1; i <=10; i++){
    console.log('i is:' + i);
    showLine();
}

//Create function
function showLine() {
    console.log('------------');
}

//function formula
/*const sum = function(a,b,c){
    return a+b+c;
};*/

const sum = (a,b,c) => a+b+c;

const total = sum(5,4,3);
console.log(total);

//Array
{
    const scores = [80, 90, 40,70];
    /*
    scores.push(60, 50,100);//insert
    scores.shift();//remove first item, 80
    */
    /* splice deletes given index*/
    scores.splice(1,1, 50); //start from 90, delete 90, and insert 50.
    
    const otherScores =[10, 20];
    //insert elements in otherScores into scores.
    const scores2 = [80, 90, 40,70, ...otherScores];
    console.log(scores2);
    for(let i =0; i <scores.length; i++){
        console.log(scores[i]);
    }
}






