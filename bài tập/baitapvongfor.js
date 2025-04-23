// let input = prompt("nhập số để tính giai thừa : ")
// let n = parseInt(input);
// let giaithua ;


// if(isNaN(n) || n < 0) {
//     console.log("Mời bạn nhập số khác");
// }else {
//     giaithua = 1 ;
//     for(i = 2 ; i <= n ; i++){
//         giaithua *= i

//     }
// }

// console.log(`giai thừa của ${n} là ${giaithua}`)


// tính tổng các số chẵn

// let input = prompt("Nhập vào một số để tính tổng các số chẵn : ")
// let n = parseInt(input);
// let sum  = 0;

// if (n % 2 === 0){
//     for (i = 0 ; i <= n ; i++) {
//         if(i % 2 === 0){
//             sum += i
//         }else {
//             continue;
//         }

//     }
//     console.log(sum);
// }else {
//     console.log("Mời anh nhập số khác")
// }


let input = prompt("nhập vào số mà bạn muốn tính tổng các số lẻ : ") 
let n = parseInt(input)
let sum = 0;
if( n % 2 !== 0){
for (let i = 1 ; i <= n ; i++) {
    if(i% 2 !== 0 && i !== 3) {
        sum += i
    }
}
console.log(sum)
}else{
    console.log("chương trình của bạn không tính số chẵn")
}

