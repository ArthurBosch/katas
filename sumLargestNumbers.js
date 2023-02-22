const sumLargestNumbers = function (data) {
  if (data.length < 2) return undefined;
  if (data.length === 2) return data[0] + data[1];

  const a = Math.max(...data);
  let secondBiggest = 0;
  let i = 0;
  while (i < data.length) {
    if ((data[i] > secondBiggest) & (data[i] !== a)) {
      secondBiggest = data[i];
    }
    i++;
  }
  return a + secondBiggest;
};

const sumLargestNumbersUsingSort = function (data) {
  const sorted = data.sort((a, b) => a - b);
  return sorted[data.length - 1] + sorted[data.length - 2];
};

const sumLargestNumbersLoopOnly = function (data) {
  if (data.length < 2) return undefined;
  if (data.length === 2) return data[0] + data[1];

  const biggest = [null, null];
  if (data[0] > data[1]) {
    biggest[0] = data[0];
    biggest[1] = data[1];
  } else {
    biggest[0] = data[1];
    biggest[1] = data[0];
  }

  let i = 2;
  while (i < data.length) {
    if (data[i] > biggest[1] && data[i] < biggest[0]) {
      biggest[1] = data[i];
    }

    if (data[i] > biggest[0]) {
      biggest[1] = biggest[0];
      biggest[0] = data[i];
    }

    i++;
  }

  return biggest[0] + biggest[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbersUsingSort([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbersLoopOnly([10, 4, 34, 6, 92, 2]));
