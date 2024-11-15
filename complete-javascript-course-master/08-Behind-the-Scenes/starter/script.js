'use strict';
/*
function calcAge(birthYear) {
  const age = 1981 - birthYear;

    function printAge(){
        const output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
        }
        // console.log(str);
        console.log(millenial);
    }
    printAge();

  return age;
}

const firstName = 'Bhavya';
calcAge(2003);
*/
/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions

console.log(addDecl(2, 3));
console.log(addExpr(3, 4));
console.log(addArrow(4, 5));

function addDecl(a, b) {
  return a * b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
*/

/*
//Example
console.log(undefined);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All product deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
// console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //   console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1980);

const Jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
Jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = Jonas.calcAge;
matilda.calcAge();

const f = Jonas.calcAge;
f();
*/

// var firstName = 'Matilda';

const Jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMellenial = function(){
        console.log(this);
        console.log(this.year>= 1981 && this.year <= 1996);
    };
    isMellenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
Jonas.greet();
Jonas.calcAge();
// console.log(this.firstName);
