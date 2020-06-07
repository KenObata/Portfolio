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
    
    /*const [a,b, ...others] = scores;
    console.log(a);
    console.log(b);
    console.log(others);
    */
    
    scores.forEach((score, index) => {
        console.log('Score '+index +': ' + score);
    });
    
    //map: add 20 yen for each score.
    const prices = [180 , 190, 200];
    
    const updatePrices = prices.map((price) => {
        return price + 20;
    });
    
    const numbers =[1,4,7,8,10];
    /*const evenNumbers = numbers.filter(number => {
        if(number % 2 === 0) {
           return true;
           }
        else {
           return false;
           }
    });*/
    const evenNumbers = numbers.filter((number) => {
        if(number % 2 === 0){
            return number;
        }
        else{
            return false;
        }
    });
    console.log(evenNumbers);
}

{
    /*create object in 2D*/
    // const point = [100, 180];
    const otherMember ={
        r:4,
        color: 'red'
    };
    const point = {x:100, y:180, ...otherMember};
    console.log(point);
    point.x =120; //update x
    console.log(point);
    
    point.z = 90;
    console.log(point);
    delete point.z;
    console.log(point);
    
    /*We cannot use forEach to objects!!*/
    const keys = Object.keys(point);
    keys.forEach(key => {
        console.log('Key:'+key);
    });
    
    const geometry_points = [
        {x:30, y:20},
        {x:10, y:50},
        {x:40, y:40},
    ];
    console.log(geometry_points[1].x);
}

{
    let array=[1,2];
    let y=array; //y points address of x
    array[0]=5;
    console.log(array);
    console.log(y); //
    
    /* output is: 
    array =[5,2]
    y = [5,2] since y points x, y outputs same data of x
    
    we want y=[1,2]
    */
    //to avoid this, we use spread function
    let array2 =[...array];
    array[0]=8;
    console.log(array); 
    console.log(array2); 
}


{
    /*Strings*/
    const str = 'hello';
    console.log("str length: "+str.length);
    
    console.log(str.substring(0,str.length));
}

