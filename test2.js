const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let board = ["b", "w"];

const LR = {
  L: {
    start: (stone) => {
      return 0;
    },
    end: (stone) => {
      return board.indexOf(stone);
    },
    put: (stone) => {
      board = [stone].concat(board);
    },
  },
  R: {
    start: (stone) => {
      return board.lastIndexOf(stone);
    },
    end: (stone) => {
      return board.length - 1;
    },
    put: (stone) => {
      board.push(stone);
    },
  },
};

rl.question("棋譜を入力してください：", (line) => {
  for (let i = 0; i < line.length; i++) {
    const stone = i % 2 == 0 ? "b" : "w";
    const LorR = line[i];

    const start = LR[LorR].start(stone);
    const end = LR[LorR].end(stone);

    for (let j = start; 0 <= j && j <= end; j++) {
      board[j] = stone;
    }

    LR[LorR].put(stone);
  }

  black = board.filter((stone) => stone == "b").length;
  white = board.filter((stone) => stone == "w").length;

  console.log(`${black} ${white}`);

  rl.close();
});
