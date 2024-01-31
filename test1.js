const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("マスの数を入力してください: ", (input) => {
  const A = parseInt(input);

  const isValidInput = !isNaN(A) && A >= 2 && A <= 100000;

  isValidInput
    ? console.log(`${minRollsToGoal(A)}`)
    : console.error(
        "入力した値が無効です。入力は 2 から 100000 までの整数でなければなりません。"
      );

  rl.close();
});

const minRollsToGoal = (A) => Math.ceil((A - 1) / 6);
