const names = ["Abu Rayhan", "Shaker Hossian", "Akib Ahmed", "Alvi Chowdhuri"];

let index = -1;
let name = names[++index];

setInterval(() => {
  name = names[index++];
  console.log("Abu Rayhan", "Abu Rayhan".length);

  if (index === names.length) {
    index = 0;
  }
}, 1000);
