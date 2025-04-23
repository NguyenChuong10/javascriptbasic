// hàm sqrt căn bậc hai
let a = 25;
let b = Math.sqrt(a);
console.log("căn bậc hai của 25 là :" +b);
//hàm   mũ
let soA = 23;
let soB = 24;

let result = Math.pow(soA,soB);

console.log(`${soA} mũ ${soB} là : ${result}`)
//hàm giá trị tuyệt đối
let soE= -10;
let adsolute = Math.abs(soE);
console.log("giá trị tuyệt đối của " + soE + " là : " +adsolute )

//các hàm làm tròn thông dụng ceil() và floor()
let number = 4.56;
let numberup = Math.ceil(number);
let numberdown = Math.floor(number);

console.log(`số đã làm tròn lên và làm tròn xuống là : ${numberup} , ${numberdown} `);

//làm tròn 0,5 lên 1 sử dụng hàm round()

let numbertwo = 4.56;
let floatingNumber = Math.round(numbertwo);

console.log(`làm trònn từ 1/2 lên 1 là : ${floatingNumber}`)
// 6. làm tròn x chữ số hàng đơn vị

let x = 3.14159;
let output = x.toFixed(2);
console.log(output);
console.log(` kiểu dũ liệu của x sau khi làm tròn là :  ${typeof output}`);

let numbers = parseFloat(output);

console.log(`kiểu dữ liệu sau khi chèn kiểu dữ liệu là : ${numbers}`)
console.log(`kiểu dữ liệu của numbers là :${typeof numbers} `)

// hàm tìm giá trị nhỏ nhất tìm giá trị lớn nhấtl Math.min() , Math.max()

let number1 = 1;
let number2 = 2;
let number3 = 3;


let max = Math.max(number1,number2,number3);
let min = Math.min(number1,number2,number3);
console.log("giá trị lớn nhất trong 3 số là : " +max);
console.log("giá trị nhỏ nhất trong 3 số là : " +min);

