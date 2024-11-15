'use strict';
/*
const bookings = [];
const createBooking = function(flightNum, numPassagengers=1, price=199*numPassagengers){

    const booking={
        flightNum,
        numPassagengers,
        price,
    };
    // console.log(typeof(booking));

    console.log(booking);
    bookings.push(booking);
};
createBooking('LH123');
createBooking('lh123', 4, 7654);
createBooking('lj65', 78);
createBooking('fgwbu', 87);
*/
/*
const flight = 'LH234';
const bhavya = {
  name: 'Bhavya Jain',
  passport: 7561585748,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr' + passenger.name;

  if (passenger.passport === 7561585748) {
    alert('Check in');
  } else {
    alert('wrong passport');
  }
};
checkIn(flight, bhavya);
console.log(flight);
console.log(bhavya);

const newPassport = function (person) {
  person.passport = math.trunc(math.random() * 10000000000);
};
newPassport(bhavya);
checkIn(flight, bhavya);
*/

/*
const onenWord = function (str) {
  return str.replace(/ /g, '').tolowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', onenWord);
*/

// const greet = greetings => name => console.log(`${greetings} ${name}`);

// greet('Hello')('Bhavya');

// const addTaxRate = function(rate)
// {
//   return function(value){
//     return value + value *rate;
//   }
// }
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

//2
document
  .querySelector('.poll')
  .addEventListener('click', poll.registernewNumber); 
  bind(poll);
