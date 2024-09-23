// Sửa bài tập session-09
//Ex1:
// input: nhập năm sinh
// let year = +prompt("Nhập năm sinh: ");
// console.log(year);
// // process:
// // kiểm tính hợp lệ của năm
// //- hợp lệ: (1995,...20,..)
// //- Không hợp lệ: a, b, c, / -1, -2, ...
// //  year > number
// //  year > NaN (not a number)
// //  cách kiểm tra có phải là number hay k: Number.isNaN(...)

// if (Number.isNaN(year)) {
//   console.log("Năm sinh không hợp lệ");
// } else {
//   let age = 2024 - year;
//   //out put tuổi
//   console.log("Tuổi của bạn là: " + age);
// }

// let age = Number.isNaN(year)
//   ? "năm sinh không hợp lệ"
//   : "tuổi của bạn là " + (2024 - year);

// console.log(age);

// EX2:
// let num = +prompt("Nhập số bất kỳ");
// console.log(num);

// if (Number.isNaN(num)) {
//   console.log("Số không hợp lệ");
// } else {
//   // Kiểm tra có phải số nguyên hay không?
//   if (Number.isInteger(num)) {
//     // nếu số chẵn: chia lấy dư cho 2.
//     if (num % 2 === 0) {
//       console.log("Đây là số chẵn");
//     } else {
//       console.log("đây là số lẻ");
//     }
//   } else {
//     console.log("Số không hợp lệ");
//   }
// }

// Cách 2:

// if (Number.isInteger(num)) {
//   if (num % 2 === 0) {
//     console.log("là số chẵn");
//   } else {
//     console.log("là số lẻ");
//   }
// } else {
//   console.log("không hợp lệ");
// }

// Ex3:
// let date = +prompt("Nhập thứ trong tuần");

// if (date === 2) {
//   console.log("Monday");
// } else if (date === 3) {
//   console.log("Tuesday");
// } else if (date === 4) {
//   console.log("Wednesday");
// } else if (date === 5) {
//   console.log("Thursday");
// } else if (date === 6) {
//   console.log("Friday");
// } else if (date === 7) {
//   console.log("saturday");
// } else if (date === 8) {
//   console.log("Sunday");
// } else {
//   console.log("không hợp lệ");
// }

// switch (date) {
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   case 8:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Không hợp lệ");
//     break;
// }
// >> dùng khi so sánh trong 1 tệp dữ liệu

// Ex4:
// let num = +prompt("Nhập số bất kỳ");

// if (Number.isNaN(num)) {
//   console.log("hợp lệ");
// } else {
//   if (num === 0) {
//     console.log("Không phải số âm | dương");
//   } else {
//     console.log("Số âm");
//   }
// }

// Ex: 4

// let n = +prompt("số nguyên bất kỳ");

// let result = "";
// for (let i = 1; i <= n; i = i + 1) {
//   result = result + i;
// }
// console.log(result);
// let n = +prompt("Số nguyên");
// let result = 1;
// for (let i = 1; i <= n; i = i + 1) {
//   result = result * i;
// }

// console.log(result);

// Ex:6
// for (let i = 1; i <= 100; i = i + 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }
// Luồn chạy if-els > đẩy thuật toán phúc tặp lên đầu tiên

// Ex07:
// let a = +prompt("số nguyên dương a");
// let b = +prompt("số nguyên dương b");

// if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0 && a >= b) {
//   for (let i = b; i <= a; i = i + 1) {
//     if (i % b === 0) {
//       console.log(i);
//     }
//   }
// } else {
//   console.log("Số a và b không hợp lệ");
// }
//////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// Vòng lặp while-miễn là/ trong khi (while loop)
// dùng lại khi tác vụ đó sai so với condition (false)

// while (condition) {
//   // do something
// }

// Ex 01:
// Viết 1 game đoán só
// cho kết quả result = 50

// Chương trình lặp lại tác vụ:
// - Người dung nhập vào số họ đoán
// - so sánh kết quả ng nhập với số result
// - Số nhập > result ==> in ra "too big"
// - Số nhập < result ==> in ra "too small"
// - Số nhập === result ==> in ra "bingo" + dừng chương trình
let result = 50;

let loop = true;
while (loop === true) {
  let n = +prompt("Mời nhập số bất kỳ từ 1-100 ");

  if (n === result) {
    console.log("bingo");
    loop = false;
  } else if (n > result) {
    console.log("too big");
  } else {
    console.log("too small");
  }
}

// sau khi viết xong logic chương trình
// >> xác định các tác vụ lặp đi lặp lại
// >>> Chương trình dừng lại khi nào
