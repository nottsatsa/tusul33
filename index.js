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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//3 toonii hamgiin ihiig ol
// a = 2;
// b = 3;
// if (a > b) {
//   console.log(`${a}>${b}`);
// } else if (a < b) {
//   console.log(`${a}<${b}`);
// } else {
//   console.log(`${a}=${b}`);
// }

// c = 1;
// if (a > b && a > c) {
//   max = a;
//   if (b > c) {
//     mid = b;
//     min = c;
//   } else {
//     mid = c;
//     min = b;
//   }
// } else if (b > a && b > c) {
//   max = b;
//   if (a > c) {
//     mid = a;
//     min = c;
//   } else {
//     mid = c;
//     min = a;
//   }
// } else if (c > a && c > b) {
//   max = c;
//   if (a > b) {
//     mid = a;
//     min = b;
//   } else {
//     mid = b;
//     min = a;
//   }
// }
// console.log(`${max}>${mid}>${min}`);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//tegsh sondgoi oloh

// let too = prompt("too oruul:");

// if (too % 2 == 0) {
//   alert(`${too} tegsh too bn`);
// } else {
//   alert(`${too} sondgoi too bn`);
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//dun tootsooloh

// let dun = prompt("dun oruulna uu:");
// let useg = 0;
// if (100 >= dun && dun >= 0) {
//   if (100 >= dun && dun >= 90) {
//     useg = "A";
//   } else if (89 >= dun && dun >= 80) {
//     useg = "B";
//   } else if (79 >= dun && dun >= 70) {
//     useg = "C";
//   } else if (69 >= dun && dun >= 60) {
//     useg = "D";
//   } else {
//     useg = "F";
//   }
//   alert(`${dun} bol ${useg} `);
// } else {
//   alert(`${dun} bol dun bish bn `);
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//uliral ol

// let uliral = prompt("sar oruul:");

// if (11 >= uliral && uliral >= 9) {
//   alert(`namar`);
// } else if (8 >= uliral && uliral >= 6) {
//   alert(`zun`);
// } else if (5 >= uliral && uliral >= 3) {
//   alert(`havar`);
// } else {
//   alert(`uvul`);
// }

//+++++++++++++++++++++++++++++++++++++++++
// let u = prompt("month name:");
// if (u == "december" || u == "january" || u == "february") {
//   alert(`winter`);
// } else if (u == "march" || u == "april" || u == "may") {
//   alert(`spring`);
// } else if (u == "june" || u == "july" || u == "august") {
//   alert(`summer`);
// } else if (u == "september" || u == "october" || u == "november") {
//   alert(`autumn`);
// } else {
//   alert(`zuv oruul`);
// }

//++++++++++++++++++++++++++++++++++
// let udur = prompt("udur oruul");
// if (
//   udur == "monday" ||
//   udur == "tuesday" ||
//   udur == "wednesday" ||
//   udur == "thursday" ||
//   udur == "friday"
// ) {
//   alert(`weekday`);
// } else if (udur == "saturday" || udur == "sunday") {
//   alert(`weekend`);
// } else {
//   alert(`zuv oruul`);
// }

//++++++++++++++++++++++++++++++++
// let sar = prompt(`sar oruul`);
// let u = sar.toLowerCase();
// if (
//   u == "december" ||
//   u == "january" ||
//   u == "march" ||
//   u == "may" ||
//   u == "july" ||
//   u == "august" ||
//   u == "october"
// ) {
//   alert(`${u} has 31 days`);
// } else if (u == "april" || u == "june" || u == "september" || u == "november") {
//   alert(`${su} has 30 days`);
// } else if (u == "february") {
//   alert(`${u} has 28 days`);
// }

//+++++++++++++++++++++++++++++++++
// const name = prompt("ner:");
// alert("snu, " + name + "! niit 5 asuulttai, amjilt husie");
// let result = "";
// let tool = 0;
// const neg = prompt("Торхон дотоp тос ус хоёр ter yu ve?");
// switch (neg) {
//   case "undug":
//     alert("zuv!");
//     result += "1d zuv, ";
//     tool++;
//     break;
//   default:
//     alert("buruu! undug bailaa");
//     result += "1d buruu, ";
//     break;
// }

// alert("za daraagiin onisgond belen u!?");
// const hoyr = prompt("Нам нам гүйдэлтэй Навчин шар дээлтэй ter yu ve?");
// switch (hoyr) {
//   case "uneg":
//     alert("zuv!");
//     result += "2d zuv, ";
//     tool++;
//     break;
//   default:
//     alert("buruu! uneg bailaa");
//     result += "2d buruu, ";
//     break;
// }

// alert("odoo 3dah n shu faitoooo!");
// const gurav = prompt("Ганган хүүхэн Ганцаар явах заяатай ter yu ve?");
// switch (gurav) {
//   case "uneg":
//     alert("zuv!");
//     result += "3d zuv, ";
//     tool++;
//     break;
//   default:
//     alert("buruu! dahiad l uneg bailaa");
//     result += "3d buruu, ";
//     break;
// }

// alert("odoo udku duusnaa");
// const duruv = prompt("Сэтгэр байтлаа Шантгар ter yu ve?");
// switch (duruv) {
//   case "gahai":
//     alert("zuv!");
//     result += "4d zuv, ";
//     tool++;
//     break;
//   default:
//     alert("buruu! gahai bailaa");
//     result += "4d buruu, ";
//     break;
// }

// alert("za suuliinh shu ");
// const tav = prompt(
//   "Бөхийн зогсвол хүн шиг Бөгцийн суувал нохой шиг/ ter yu ve?"
// );
// switch (tav) {
//   case "sarmagchin":
//     alert("zuv!");
//     result += "5d zuv hariuljee";
//     tool++;
//     break;
//   default:
//     alert("buruu! sarmagchin baisiimaa");
//     result += "5d buruu hariuljee";
//     break;
// }
// alert(name + ` ta ${result}`);
// switch (tool) {
//   case 1:
//     alert("ydaj 1 zuv hariulttai, hoosongui shu");
//     break;
//   case 2:
//     alert("yhvee zgr2");
//     break;
//   case 3:
//     alert("muugui shu");
//     break;
//   case 4:
//     alert("good!");
//     break;
//   case 5:
//     alert("neg ch aldahgu sn yumbe");
//     break;

//   default:
//     alert("neg ch zuv hariulaagu muu yumbe");
//     break;
// }

// //+++++++++++++++++++++++++++++++++++++++++++++++++
// let urjver = 1;
// let too = 0;
// const n = prompt("n :");
// const x = prompt("x :");
// for (let i = 1; i <= n; i++) {
//   too += `${i}, `;
//   if (i % x == 0) {
//     urjver = urjver * i;
//   }
// }
// alert(`n hurtelh too: ${too} %x urjver: ${urjver}`);

// //+++++++++++++++++++++++++++++++++++++++++++++++++
//prime number olno
// const n = prompt("n :");
// let notprime = 0;
// let prime = 0;
// let hevle = "";
// for (let i = 2; i <= n; i++) {
//   if (i == 2 || i == 3 || i == 5 || i == 7 || i == 11) {
//     prime++;
//     hevle += `${i}, `;
//   } else if (
//     i % 2 == 0 ||
//     i % 3 == 0 ||
//     i % 5 == 0 ||
//     i % 11 == 0 ||
//     i % 49 == 0 ||
//     i % 91 == 0
//   ) {
//     notprime++;
//   } else {
//     prime++;
//     hevle += `${i}, `;
//   }
// }
// alert(` 1-${n} hurtel ${prime} anhnii too bn`);
// alert(`anhnii toonuud n: ${hevle}`);

//++++++++++++++++++++++++++++++++++++++++++++++++++
// let str = "Hello";
// let hevle = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
//   hevle += `${str[i]}`;
// }
// console.log(hevle);

// // let reversed = [...str].reverse().join("");
// // console.log(reversed);

//++++++++++++++++++++++++++++++++++++++++++++++++++
let hevle = "";
for (let i = 0; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    hevle += ` `;
  }
  for (let j = 1; j <= i; j++) {
    hevle += `*`;
  }
  console.log(hevle);
  hevle = "";
}
