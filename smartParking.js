const whereCanIPark = function (spots, vehicle) {
  let i = 0;
  let result = false;
  let type = "";

  switch (vehicle) {
    case "regular":
      type = "R";
      break;
    case "small":
      type = "S";
      break;
    case "motorcycle":
      type = "M";
    default:
      break;
  }

  while (i < spots.length && result === false) {
    let t = 0;

    while (t < spots[i].length) {
      if (type === "R" && spots[i][t] === "R") {
        result = [t, i];
      }
      if (type === "S" && (spots[i][t] === "R" || spots[i][t] === "S")) {
        result = [t, i];
      }
      if (
        type === "M" &&
        (spots[i][t] === "R" || spots[i][t] === "S" || spots[i][t] === "M")
      ) {
        result = [t, i];
      }
      t++;
    }

    i++;
  }

  return result;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);
