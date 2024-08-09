// function uchburchak(a, b, c) {
//   if (a == b && b == c && a == c) {
//     return true;
//   }
//   return false;
// }

// console.log(uchburchak(12, 12, 12));


// function uchburchak(a, b, c) {
//   if (a !== b && b !== c && a !== c) {
//     return true;
//   }
//   return false;
// }

// console.log(uchburchak(12, 13, 14));


// function num(a, b, c){
//   if(a == b && b == c){
//     return true;
//   }
//   return false;
// }

// // console.log(12, 12, 12);

// function son (a, b, c){
//   if(a < b && b < c){
//     return a+b+c;    
//   }else if (a == c && (a > b && c > b || a < b && c < b)){
//    return b;
//   }else if(a == b && b == c){
//     return 0;
//   }
// }

// console.log(num(3, 7, 3));



// function son(a, b, c){
//   if(a < b && b < c){
//     return true;
//   }else if(a > b && b > c){
//     return true;
//   }else if (a != b && b != c){
//     return false;
//   }
// }

// console.log(son(1, 2, 3));


// let str = "lorem" // lor
// let res = "";
// for (i = 0; i < str.length -2; i++){
//   res += str[i];
// }
// console.log(res);


// let str = "oko" // aka
// let res = "";
// for (i = 0; i < str.length; i++){
//   res += str[i];
// }
// console.log(res);



// const btn = document.querySelector(".btn");
// btn.addEventListener('click', ( ) => {
//   console.log('render');
  
// });

// Uygi-vazifa
// 1 - misol
// function kesma(a, b) {
//     if (a >= 0 || b >= 0 || a <= b) {
//     }
//     let uzunlik = a;
//     while (uzunlik >= b) {
//       uzunlik -= b;
//     }
//     return uzunlik;
//   }
//   let a = 18;
//   let b = 12;
//   console.log(kesma(a, b));

// 2 - misol
// function son(a, b) {
//     if (b <= 0 || a < b) {
//         return 0;
//     }
//     let count = 0;
//     let sum = 0;
//     while (sum + b <= a) {
//         sum += b;
//         count++;
//     }
//     return count;
// }
// console.log(son(20, 4));

// 3 - misol
// function son(n, k) {
//     if (k <= 0) {
//         throw new Error("Hatolik.");
//     }
//     let count = 0;
//     let number = n;
//     while (number >= k) {
//         number = son_1(number, k);
//         count++;
//     }
//     return {
//         count: count,
//         number: number
//     };
// }
// function son_1(a, b) {
//     let result = a;
//     while (result >= b) {
//         result -= 1;
//     }
//     return result;
// }
// const output_1 = son(20, 4);
// console.log(`Butun qismi: ${output_1.count}, Qoldiq: ${output_1.number}`);