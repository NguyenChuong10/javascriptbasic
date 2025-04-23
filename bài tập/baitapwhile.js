// let input = prompt("nhập vào số bạn muốn tính giai thừa ");
// let n = parseInt(input);
// let giaithua = 1;
// let i = 2;
// while( i <= n  ){
//     giaithua *= i;
//     i++;
// }
// console.log(`giai thừa của ${n} là : ${giaithua} ` )


let input = prompt("nhập vào số để tính tổng các số chẵn :")
let n = parseInt(input);

let sum = 0 ;
let i = 0;
if(n % 2 === 0) {
while( i <= n  ){
    
    if(i % 2 === 0 ){
        sum += i;
    }
    i++;
}
console.log(sum);
}else {
    console.log("bạn đã nhập số lẻ ")
}

