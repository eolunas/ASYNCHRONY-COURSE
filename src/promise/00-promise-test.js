const promise = new Promise((resolve, reject) => {
   resolve("Done");
});

const cows = 15;
const countCows = new Promise((resolve, reject) => {
   cows > 10
      ? resolve(`We have ${cows} cows on the farmland`)
      : reject(`There is not enough cows on the farmland`);
});

countCows
   .then((result) => {
      console.log(result);
   })
   .catch((error) => {
      console.log(error);
   })
   .finally(() => console.log("finally"));
