// generators have iterator, thus can be de destructured
function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth);  // 5

// destructur a number
let {toString: s} = 123;
console.log(s === Number.prototype.toString);
console.log(typeof s);
//console.log(s()); // TypeError: Number.prototype.toString is not generic
