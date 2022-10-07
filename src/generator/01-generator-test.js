//Using generator with multiples yield
function* gen() {
   yield 1;
   yield 2;
   yield 3;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


//Using generator with bucle for of and just one yield
function* iterable(array) {
   for (let value of array) {
      yield value;
   }
}

const it = iterable(['Eduardo', 'Yuri', 'Juan', 'Andres']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);