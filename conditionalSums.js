// const conditionalSum = function (values, condition) {
//   const resultArr = [];
//   let result = 0;

//   if (condition === "even") {
//     let i = 0;
//     while (i < values.length) {
//       if (values[i] % 2 === 0) {
//         resultArr.push(values[i]);
//       }
//       i++;
//     }
//   }

//   if (condition === "odd") {
//     let i = 0;

//     while (i < values.length) {
//       if (values[i] % 2 !== 0) {
//         resultArr.push(values[i]);
//       }
//       i++;
//     }
//   }

//   if (condition === "odd" || condition === "even") {
//     let i = 0;
//     while (i < resultArr.length) {
//       result += resultArr[i];
//       i++;
//     }
//   }

//   return result;
// };

const conditionalSum = function (values, condition) {
  const resultArr = [];
  let result = 0;

  if (condition === "odd" || condition === "even") {
    let i = 0;
    while (i < values.length) {
      if (condition === "even" && values[i] % 2 === 0) {
        resultArr.push(values[i]);
      }
      if (condition === "odd" && values[i] % 2 !== 0) {
        resultArr.push(values[i]);
      }
      i++;
    }

    let c = 0;
    while (c < resultArr.length) {
      result += resultArr[c];
      c++;
    }
  }
  return result;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
