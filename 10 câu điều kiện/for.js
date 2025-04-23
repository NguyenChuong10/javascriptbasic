// let tong = 0;
// for (let i = 0; i <=20 ; i++ ){
//     tong += i
//     console.log(tong);
// } 
// break thường được dùng để thoát khỏi các vòng lặp
// continue thường được  dung dể bỏ qua các vòng lặp

// for(let i = 1 ; i <= 10 ; i++){
//     if( i % 2 !== 0){
//         continue; // sử dụng để bỏ quả cũng có thể được hiểu là loại bỏ nó khi thực hiện điều kiện
//     } else {
//         console.log(i)
//     }
// }
let n = 0;

while( n < 100) {
    n ++ ;
    console.log(n)
    if(n === 4) {
        break; // sử dụng break dể dừng khi kiểm tra điều kiện 
    }
}

