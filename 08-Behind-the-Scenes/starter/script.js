'use strict';
function calcAge(birthday) {
  const age = 2022 - birthday;
  
  function printAge() {
    const output = `${firstName},you are ${age}, born in ${birthday}`;
    console.log(output);

    if (birthday >= 1981 && birthday <= 1996) {
      var millenial = true;
      const str = `oh! and you are a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
  
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
//printAge();