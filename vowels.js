const vowels = ["a", "i", "e", "u", "o"];

const numberOfVowels = function (data) {
  let count = 0;
  let i = 0;
  const dataArr = data.split("");
  console.log(dataArr);
  while (i < dataArr.length) {
    let t = 0;
    while (t < vowels.length) {
      if (dataArr[i] === vowels[t]) {
        count++;
      }
      t++;
    }
    i++;
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
