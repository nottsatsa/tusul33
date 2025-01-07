//*****second aas tsag min sec oloh
// let sec, min, hour;
// second = 123456;

// hour = Math.floor(second / 3600);
// min = Math.floor((second % 3600) / 60);
// sec = (second % 3600) % 60;

// console.log(`hour: ${hour}`);
// console.log(`min: ${min}`);
// console.log(`sec: ${sec}`);

//****vietiin teorom
// ax^2+bx+c=0;
// x1,2=?

// a = 1;
// b = 5;
// c = 6;

// x1 = Math.floor((-parseInt(b) + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
// x2 = Math.floor((-parseInt(b) - Math.sqrt(b * b - 4 * a * c)) / (2 * a));

// console.log(`x1=${x1}`);
// console.log(`x2=${x2}`);

// //undur jiliig ol
// let on = 2288;
// let x = "bish";
// if (on % 400 == 0) {
//   x = "mun";
// } else {
//   if (on % 4 == 0) {
//     if (on % 100 == 0) {
//       x = "bish";
//     } else {
//       x = "mun";
//     }
//   }
// }
// console.log(`undur jil ${x}`);

//3 toonii hamgiin ihiig ol
a = 2;
b = 3;
if (a > b) {
  console.log(`${a}>${b}`);
} else if (a < b) {
  console.log(`${a}<${b}`);
} else {
  console.log(`${a}=${b}`);
}

c = 1;
if (a > b && a > c) {
  max = a;
  if (b > c) {
    mid = b;
    min = c;
  } else {
    mid = c;
    min = b;
  }
} else if (b > a && b > c) {
  max = b;
  if (a > c) {
    mid = a;
    min = c;
  } else {
    mid = c;
    min = a;
  }
} else if (c > a && c > b) {
  max = c;
  if (a > b) {
    mid = a;
    min = b;
  } else {
    mid = b;
    min = a;
  }
}
console.log(`${max}>${mid}>${min}`);
