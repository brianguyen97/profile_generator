const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (answer) => {
  const name = answer;
  rl.question("How old are you?", (answer) => {
    const age = answer;
    rl.question("What is your occupation?", (answer) => {
      const job = answer;
      rl.question("What is your favorite hobby?", (answer) => {
        const hobby = answer;
        rl.question("Who is your favorite artist?", (answer) => {
          const artist = answer;
          console.log(
            `${name} is ${age} years of age. Their occupation is a ${job}. Their favorite hobby is ${hobby} and their favorite artist is ${artist}`
          );
          rl.close();
        });
      });
    });
  });
});
