function sum(num1, num2) {
   return num1 + num2;
}
function rest(num1, num2) {
   return num1 - num2;
}
function div(num1, num2) {
   return num1 / num2;
}
function mul(num1, num2) {
   return num1 * num2;
}

function call(num1, num2, callback) {
   return callback(num1, num2);
}

console.log(call(10,2,sum));
console.log(call(10,2,rest));
console.log(call(10,2,div));
console.log(call(10,2,mul));


setTimeout(function () {
   console.log('Hello JavaScript')
}, 2000);

function gretting(name) {
   console.log(`Hello ${name}`);
};

setTimeout(gretting, 2000, 'Eduardo');