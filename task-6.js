let message = 0;
let total = 0;
do {
  message = +prompt('Введите число');
  total += message;
} while (message);
alert(total);

// do {
//   message = +prompt('Введите число');
//   if (!Number.isNaN(message)) {
//     total += message;
//   } else {
//     alert("Вы ввели не число.Попробуйте еще раз")
//   }
// } while (message || Number.isNaN(message));
// alert(total)


// if (message) {
//   for(let i = 0; i <= message; i += 1) {
//     total += message;
//     total = alert(total);
//     }
// }
// for (let i = 0;i <=message; i += 1){
//   total += message;
// }
// if (message === null){
//   total = alert(total);
// }
