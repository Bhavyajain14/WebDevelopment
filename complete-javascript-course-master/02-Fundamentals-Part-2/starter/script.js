'use strict';
/*
--------lecture 1--------
let hasDriversLicence = false;
const passTest = true;

if(passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log ('I can Drive');

// const interface = 'Audio';
// const private = 534;
*/

//--------lecture 2--------
/*
function logger(){
    console.log('My name is Bhavya');
}

// calling /running /invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

/*
//Function declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}
const age1 = calcAge1(2003);

*/

/*
// Function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(2003);

console.log (age2);

//Arrow functions\
const calcAge3 = birthYear => 2037 - birthYear; 
const age3 =  calcAge3(2003);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2003, 'Bhavya'));
console.log(yearsUntilRetirement(2002, 'Ankit'));
*/

/*
function describeCountry(country, population, capitalCity){
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}
const finalDescription = (describeCountry('India', 33, 'Delhi'));
console.log(finalDescription);
*/

/*
function percentageOfWorld1(population){
    return (population/7900)*100;
}
const percentageOfWorld2 = function (population2){
    return (population2/7900)*100;
}
const percentageOfWorld3 = population => (population/7900)*100;

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
console.log(percPortugal1, percChina1, percUSA1);

const percPortugal2 = percentageOfWorld1(10);
const percChina2 = percentageOfWorld1(1441);
const percUSA2 = percentageOfWorld1(332);
console.log(percPortugal2, percChina2, percUSA2);

const percPortugal3 = percentageOfWorld1(10);
const percChina3 = percentageOfWorld1(1441);
const percUSA3 = percentageOfWorld1(332);
console.log(percPortugal3, percChina3, percUSA3);
*/

/*
function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2,3));
*/

/*
const percentageOfWorld1 = population => (population / 7900)
 * 100;

function describePopulation(country, population){
    const percentage = percentageOfWorld1(population);
    const description =  (`${country} has ${population} million people, which is about ${percentage}% of the world`);
    console.log(description);
}
describePopulation('India', 1435);
*/

/*
const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else{
        console.log(`${firstName} has already retired`)
        return -1;
    }
    // return retirement;
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2003, 'Bhavya'));
console.log(yearsUntilRetirement(1970, 'Bh'));

*/

/*
const friend1 = 'Fishu';
const friend2 = 'Ajay';
const friend3 = 'Bhavya';

const friends = ['Fishu', 'Ajay', 'Bhavya'];
console.log(friends);

const year = new Array (1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'me';
console.log(friends);

const firstName = 'Bhavya';
const bhavya = [firstName, 'Jain', 2037-2003, 'Student', friends];
console.log(bhavya);
console.log(bhavya.length);

//exercise
const calcAge = function(birthYear){
    return 2037 - birthYear; 
}

const years = [1990, 1967, 2002, 2010, 2018]; 

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length-1])];
console.log(ages);
*/

/*
const friends = ['Fishu', 'Ajay', 'Fishi'];

//add elements
const newlength = friends.push('Bhavya');
console.log(friends);
console.log(newlength);

friends.unshift('Kitten');
console.log(friends);

//remove elements

friends.pop( );
const popped = friends.pop( );
console.log(popped);
console.log(friends);

friends.shift(); //remove first
console.log(friends);

console.log(friends.indexOf('Ajay'));
console.log(friends.indexOf('Fishi'));

friends.push(23);
console.log(friends.includes('Fishu'));
console.log(friends.includes('Fishi'));
console.log(friends.includes(23));

if (friends.includes('Fishu')){
    console.log('You have a friend called Fishu');
}
*/

//----------OBJECTS----------

/*
const bhavya = {
    firstName: 'Bhavya',
    lastName: 'Jain',
    age: 2037-2003,
    job: 'Student',
    friends: ['Fishu', 'Ajay', 'Fishi']
};

console.log(bhavya);

console.log(bhavya.lastName);
console.log(bhavya['lastName']);

const nameKey = 'Name';
console.log(bhavya['first' + nameKey]);
console.log(bhavya['last' + nameKey]);

console.log(`${bhavya.firstName}, has ${bhavya.friends.length} friends, and her bestfriend is called, ${bhavya.friends[0]}.`);

// console.log(bhavya.'last' + nameKey);

// const interestedIn = prompt('What do you want to know about Bhavya? Choose between firstName, lastName, age, job, friends');

// if(bhavya[interestedIn]){
//     console.log(bhavya[interestedIn]);
// } else{
//     console.log('Wrong Request! Choose between firstName, lastName, age, job, friends')
// }

// bhavya.location = 'India';
// bhavya[twitter] = '@bhavyaj147';
// console.log(bhavya);

*/

/*
const bhavya = {
    firstName: 'Bhavya',
    lastName: 'Jain',
    birthYear: 2003,
    job: 'Student',
    friends: ['Fishu', 'Ajay', 'Fishi'],
    hasDriversLicence: true,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }

    calcAge: function(){
        console.log(this);
        return 2037 - this.birthYear
    },

    getSummary: function(){
        return (`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and has ${this.hasDriversLicence?'a':'no'} driver's licence`)
    }
};

console.log(bhavya.calcAge(2003));
// console.log(bhavya['calcAge'](2003));


//challenge
console.log(bhavya.getSummary());
*/

// console.log('Lifting weight repetition 1 🏋️');
// console.log('Lifting weight repetition 2 🏋️');
// console.log('Lifting weight repetition 3 🏋️');
// console.log('Lifting weight repetition 4 🏋️');
// console.log('Lifting weight repetition 5 🏋️');
// console.log('Lifting weight repetition 6 🏋️');
// console.log('Lifting weight repetition 7 🏋️');
// console.log('Lifting weight repetition 8 🏋️');
// console.log('Lifting weight repetition 9 🏋️');
// console.log('Lifting weight repetition 10 🏋️');

/*
for(let rep = 1; rep <=10; rep++){
    console.log(`Lifting weight repetition ${rep} 🏋️`); 
}
*/

/*
const bhavyaArray = [
    'Bhavya',
    'Jain',
    2023 - 2003,
    'Student',
    ['A', 'B', 'C'],
    true
];
const types = [];

for(let i = 0; i< bhavyaArray.length; i++){
    console.log(bhavyaArray[i], typeof bhavyaArray[i] );

    // types[i]= typeof bhavyaArray[i];

    types.push(typeof bhavyaArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i<years.length; i++){
    ages.push (2037 - years[i]);
}
console.log(ages);

// contunue and break statement 
console.log('---- ONLY STRING ----')
for(let i = 0; i<bhavyaArray.length; i++){

    if(typeof bhavyaArray[i] !== 'string') continue;
    console.log(bhavyaArray[i], typeof bhavyaArray[i])
}
console.log('---- BREAK WITH NUMBER ----')
for(let i = 0; i<bhavyaArray.length; i++){

    if(typeof bhavyaArray[i] === 'number') break;
    console.log(bhavyaArray[i], typeof bhavyaArray[i])
}
*/

/*
const bhavya = [
    'Bhavya',
    'Jain',
    2023 - 2003,
    'Student',
    ['A', 'B', 'C'],
    true
];

for (let i = bhavya.length-1; i >=0; i--) {
    console.log(bhavya[i]);
}

for(let exercise = 1; exercise<=3; exercise++){
    console.log(`-------- Starting exercise ${exercise}`);

    for(let rep =1; rep <=5; rep++){
        console.log(`exercise ${exercise} lifting weight repetition ${rep}🏋️`)
    }
}
*/


// for(let rep =1; rep <=10; rep++){
//     console.log(`lifting weight repetition ${rep}🏋️`)
// }

console.log('-----WHILE LOOP-----')
let rep = 1;
while(rep <= 10){
    //console.log(`lifting weight repetition ${rep}🏋️`)
    rep++;
}

let dice = Math.trunc(Math.random() * 6)+1;
console.log(dice);

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6)+1;

    if(dice == 6) console.log(`Loop is about to end....`);
}
