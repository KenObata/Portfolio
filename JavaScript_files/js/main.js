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
    
    //Ex. concatenate calendar dates
    const dates = [2019, 11, 14];
    console.log(dates.join('/'));
    
    const times ='22:55:48' ;
    console.log(times.split(':'));
    const [hour, min, sec] = times.split(':');
    
    const times2 = times.split(':');
    console.log(times2);
}

{
    let sum =0;
    const integers = [10,3,9];
    for(let i =0; i < integers.length; i++){
        sum += integers[i];
        console.log("sum:"+sum);
    }
    const avg = sum / integers.length;
    console.log(Math.floor(avg)); //7
    console.log(Math.round(avg)); //7
    console.log(avg.toFixed(3)); //7.333
    
}
/*Use Math.random*/
{
    //want random 0,1,2
    let n = 2;
    const random_int = Math.floor(Math.random()*(n+1)); //get only integer from 0 to n
    console.log(random_int);
    
    //want random 1,2
    let min = 1
    const random_int2 = Math.floor(Math.random()*(n+1-min)) + min; //get only 
    console.log(random_int2);
}

/*get Date object*/
{
    const date_yyyymmdd = new Date();// NG:date() OK:Date()
    console.log(date_yyyymmdd);
    
    /*
    date_yyyymmdd.getFullYear(); //2020
    date_yyyymmdd.getMonth(); [0,1,...11] and 0 means January
    date_yyyymmdd.getDate(); [1,2,...31]
    date_yyyymmdd.getHours();
    date_yyyymmdd.getMinutes();
    date_yyyymmdd.getSeconds();
    */
    
    const sample_date = new Date(2020, 6, 1); //2020/June/1st/00/00/00
    console.log("sample_date:"+sample_date);   
}

/*use alert and confirm*/
{
    const response = confirm("Are you sure to delete?");
    if(response){
        console.log("Your object is deleted.");
    }
    else {
        console.log('Cancelled.');
    }
}

/*Use interval*/
/*
{
    let counter =0;
    function showTime() {
        console.log(new Date());
        
        counter ++;
        if(counter > 5){
            clearInterval(intervalId); //stop showing if couter > 5
        }
    }
    
    const intervalId = setInterval(showTime, 1000);
    
}
*/

/*Use setTimeout()*/
{
    let counter =0;
    function showTime() {
        console.log(new Date());
        const timeoutId = setTimeout(showTime, 1000);
        
        counter ++;
        if(counter > 2){
            clearTimeout(timeoutId); //stop showing if couter > 5
        }
    }
    
    showTime(); //show current time after 1000 milli seconds.
}

/* Exception*/
{
    const name ='obata';
    const name2 =5;
    
    try{
    console.log(name.toUpperCase());
    console.log(name2.toUpperCase());
    } catch (error){
        console.log(error);
    }
}



