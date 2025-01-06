// let sec, min, hour;
// second = 123456;

// hour = Math.floor(second / 3600);
// min = Math.floor((second % 3600) / 60);
// sec = (second % 3600) % 60;

// console.log(`hour: ${hour}`);
// console.log(`min: ${min}`);
// console.log(`sec: ${sec}`);

// ax^2+bx+c=0;
// x1,2=?
a = 1;
b = 5;
c = 6;

x1 = Math.floor((-parseInt(b) + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
x2 = Math.floor((-parseInt(b) - Math.sqrt(b * b - 4 * a * c)) / (2 * a));

console.log(`x1=${x1}`);
console.log(`x2=${x2}`);
