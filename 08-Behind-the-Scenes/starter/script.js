'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  // console.log(firstName);

  function printAge() {
    
    let output = `${firstName} ,you age is ${age} ,your birth year ${birthYear}`;
    console.log(output);
    
    if (birthYear >= 1986 && birthYear <= 1996) {
      let firstName = 'Steven';
      var millioner = true;
      const str = `oh!${firstName} you are a millioner`;
      console.log(str);

      function add(a,b) {
        return a + b;
      }
      console.log(add(2, 3));
      const output = 'new output';
      console.log(output)
    }
    
    console.log(millioner);
    // console.log(str);
  }
  // console.log(output);
  printAge();
  return age;

}

const firstName = 'Jonas';
calcAge(1991);

