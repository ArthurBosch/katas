const instructorWithLongestName = function (instructors) {
  let i = 0;
  let result = {
    name: "",
  };
  while (i < instructors.length) {
    if (instructors[i].name.length > result.name.length) {
      result = instructors[i];
    }
    i++;
  }
  return result;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
