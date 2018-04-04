var a = [];
// let i = 0; vs: var i = 0;
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6; vs: 10
