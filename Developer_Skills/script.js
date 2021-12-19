// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = "23";

// const calAge = (birthYear) => 2021 - birthYear;

// console.log(calAge(1997));

//problem 1
/*we work for a company building a smart home thermometer.
our most recent task is this :Given an array of temperatures of one day,
Calculate the temperature amplitude. 
keep in mind that sometimes there might be a sensor error."

*/

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// //1)Understanding the problem
// //-what is the temperature amplitude? Answer: different between highest and lowest temp
// //-how to compute the max and min temperatures?
// //-what is a sensor error? and what we do?

// //2)breaking up into sub-problem
// //-how to ignore errors?
// //-Find max value in array
// //-Find min value in array
// //-subtract min from max(amplitude)and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
 
//   for (let i = 0; i < temps.length; i++) {
//      if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) max = temps[i]; 
//      if(temps[i] < min) min = temps[i];
//   }
//   console.log(max, min)
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// //problem-2
// //function should now received 2 array of temps
// //-with 2 arrays, should we implement functionality twice?No!just merge two array

// //2)breaking up into sub-problem
// //-merge array

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps=t1.concat(t2)
//   let max = temps[0];
//   let min = temps[0];
 
//   for (let i = 0; i < temps.length; i++) {
//      if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) max = temps[i]; 
//      if(temps[i] < min) min = temps[i];
//   }
//   console.log(max, min)
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([2,5,9],[6,7,1]);
// console.log(amplitudeNew);


//debugging

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     //C)fix
//     value:Number(prompt('Degrees celsius: ')),
//   }
//   // console.log(measurement);
//   //B)Find
//   console.table(measurement);

//   console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
  
// }
// //A)IDENTIFY
// console.log(measureKelvin());

const arr1 = [17, 21, 23];
// const iterator =arr1.values();
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (thermometer) {
  for (let i = 0; i < thermometer.length; i++) {
    console.log(`${thermometer[i]} 'C in days`);
  }
}

printForecast(arr1);