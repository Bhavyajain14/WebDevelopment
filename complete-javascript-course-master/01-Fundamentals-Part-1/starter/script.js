/*
let js = 'amazing';
console.log(40+8+23-10);

console.log('Jonas');
console.log('23');

let firstName = "Matilda"
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName); 

let jonas_matilds = 'jm'
let $function = 27;
let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Student";
console.log(myFirstJob);

// ---------assignment----------

let country = "India";
let Continent = "Asia";
let population = 3.5;
console.log(country);
console.log(Continent);
console.log(population);
*/
// --------------------------LECTURE 11--------------------------
/*
------------------------BOOLEAN------------------------
let javascriptIsFun = true;    --------------------VARIABLE DECLARATION
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";    --------------------- DYNAMIC TYPING
console.log(typeof javascriptIsFun);

-----------------------------------UNDIFINED----------------------------------
let year;
console.log(year);
console.log(typeof year);

-----------------------------------NUMBERS------------------------------------
year = 1999;    ----------------------DYNAMIC TYPING
console.log(typeof year);

------------------------------------NULL----------------------------------
console.log(typeof null);
*/

// ----Assignment-2----
// let isIsland = false;
// console.log(typeof isIsland);

// let language;
// console.log(typeof language);


// ---------------------------------LECTURE 12---------------------------
/*
let age =  30;
age = 31;

const birthYear = 2003;

var job = 'programmer';
job = 'student;'

lastname = "Jain";
console.log(lastname);
*/
//-------------------------------LECTURE 13----------------------------
//-------------------------------OPERATORS-----------------------------
/*
const now = 2037;
const ageBhavya = now - 2003;
const ageShreya = now - 2002;
console.log(ageBhavya, ageShreya);

console.log(ageBhavya*2, ageBhavya/10, 2**3);

const firstname = 'Bhavya';
const lastname = 'Jain';

console.log(firstname+ " "+ lastname);
*/
//ASSIGNMENT OPERATORS
/*
let x = 10+5;
x+= 10;
x*= 4;
x++;
x--;
x--;
console.log(x);
*/
// COMPARISON OPERATORS
/*
console.log(ageBhavya < ageShreya);
console.log(ageBhavya >=18);

const isFullAge = ageShreya >= 18;

console.log(now - 1991 > now- 2002);
*/

// assignment 3
// const language = "hindi";

//-------------------------------LECTURE 14------------------------------
/*
const now = 2037;
const ageFishi = now - 2003;
const ageFishu = now - 2002;
console.log(ageFishi, ageFishu);
console.log(25-10-5);

let x, y;
x = y = 25-10-5; // x = y = 10
console.log(x, y);

const averageAge = (ageFishu+ageFishi)/2;
console.log(ageFishu, ageFishi, averageAge);
*/

// ----------COADING CHALLENGE #1----------

/*
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = (markWeight / markHeight **2);
console.log(markBMI);
const johnBMI = (johnWeight / (johnHeight*johnHeight));
console.log(johnBMI);
const markHigherBMI = true;
console.log(markBMI>johnBMI);

const markWeight1 = 95;
const markHeight1 = 1.88;
const johnWeight1 = 85;
const johnHeight1 = 1.76;
const markBMI1 = (markWeight1 / markHeight1 **2);
console.log(markBMI);
const johnBMI1 = (johnWeight1 / (johnHeight1*johnHeight1));
console.log(johnBMI1);
const markHigherBMI1 = true;
console.log(markBMI1>johnBMI1);
*/
/*
const firstName = 'Bhavya';
const job = 'Student';
const birthYear = 2003;
const year  = 2023;
const bhavya  = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + '!';
console.log(bhavya);    

const bhavyaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(bhavyaNew);

console.log(`Just a regular string....`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
*/
//----------ASSIGNMENT----------
/*
const age = 15;
if(age >= 18){
    console.log('Bhavya can start driving licence🚗');
} else{
    const yearLeft = 18-age;
    console.log(`Bhavya is too young. Wait another ${yearLeft} years:)`);
}
const birthYear = 2003;

let century;
if(birthYear <= 2000){
    century = 20;
}
else{
    century = 21;
}
console.log(century);
*/

// type conversion
/*
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('bhavya'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am '+ 23+' years old');
console.log('23' - '10' - 3);
console.log('23'/'2');

let n = '1'+1;
n= n-1;
console.log(n);
*/

// 5 falsy values: 0, ' ', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined)); 
console.log(Boolean('Bhavya')); 
console.log(Boolean({ })); 
console.log(Boolean(' ')); 

const money = 100;
if(money){
    console.log("Don't spend it all ;)");
} else{
    console.log('you should get a job');
}

let height = 0;
if(height){
    console.log('YaY! Height is defined');
} else{
    console.log('Height is Undefined');
}
*/
/*
const age = 18;
if(age ===18) console.log('You just become an adult :D (strict)');

if(age ==18) console.log('You just become an adult :D (loose)');

const favourite = Number(prompt("What's your facourite number"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){
    console.log('Cool 23 is an amazing number!')
}else if(favourite === 7){
    console.log("7 is also a cool number");
}else if(favourite === 9){
    console.log("9 is also a cool number");
}else{
    console.log('Number is not 23 or 7 or 9');
}
if(favourite !== 23 ){
    console.log('why not 23?');
}
*/

/*
const hasDriversLicence = true; //a
const hasGoodVision = true; //b

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(! hasDriversLicence );

const shouldDrive = hasDriversLicence && hasGoodVision;

// if(shouldDrive){
//     console.log('sarah is able to drive');
// } else{
//     console.log('Someone else should drive...');
// }

const isTired = false; //c
console.log(hasDriversLicence && hasGoodVision && isTired);

if( hasDriversLicence && hasGoodVision && !isTired){
    console.log('Sarah is able to drive');
} else{
    console.log('Someone else should drive...');
}
*/
/*
const day = 'saturday';
// switch(day){
//     case 'monday': 
//         console.log('Plan course structure');
//         console.log('Go to coading meetup');
//         // break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thrusday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day');
// }

if(day == 'monday'){
    console.log(`Plan course structure
    Go to coading meetup`);
}
else if(day == 'tuesday'){
    console.log(`Prepare theory videos`);
}
else if(day == 'wednesday' || day  == 'thrusday'){
    console.log('Write code examples');
}
else if(day == 'friday'){
    console.log('Record videos');
}
else if(day == 'saturday' || day == 'sunday'){
    console.log('Enjoy the weekend :D');
}
else{
    console.log('Not a valid day');
}
*/

/*
const age = 15;
// age >= 18 ? console.log('I like to drink Wine 🍷') : console.log (' I like to drink water 💧');

const drink = age >= 18 ? 'Wine 🍷' : 'water 💧'
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = 'Wine 🍷';
} else{
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I Like to drink ${age >=18 ? 'Wine 🍷' : 'water 💧'}`)
*/

function describeCountry (country, population, capitalCity)
{
    return `${country} has ${population} million people and its capital city is ${capitalCity}
    `;
}

const india = describeCountry('India', 300, 'Delhi');
const Australia = describeCountry('Australia', 4, 'Sydney');
const SouthKorea = describeCountry('SouthKorea', 5, 'Seoul');
console.log(india, Australia, SouthKorea);