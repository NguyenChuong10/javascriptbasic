
/**
 * Bài tập 1: Kiểm tra số nguyên tố
 * Viết hàm `isPrime` kiểm tra xem một số có phải là số nguyên tố hay không.
 * Test cases:
 * - Input: 7 -> Output: true
 * - Input: 10 -> Output: false
 */
// Todo : giải bài tập 1 
// *function isPrime(num){
// *   if (num < 1) return false
// *   for(i = 2 ; i <= Math.sqrt(num) ; i++){
// *       if(num % i === 0 ){
// *           return false ;
// *       }else{
// *           return true;
// *       }
// *   }
// * }
// * let result = isPrime(10);
// * console.log(result)

/**
 * Bài tập 2: Tính tổng các số từ 1 đến n
 * Viết hàm `sumToN` tính tổng các số từ 1 đến n.
 * Test cases:
 * - Input: 5 -> Output: 15
 * - Input: 10 -> Output: 55
 */
 //todo : Giải bài tập 2
// * function sumToN(n){
// *     let sum = 0 ;
// *     for(let i = 1 ; i <= n ; i++){
// *         sum += i
// *     }
// *     return sum;
// * }
// * let result = sumToN(5);
// * console.log(result);
/**
 * Bài tập 3: Tính tổng các số lẻ từ 1 đến n
 * Viết hàm `sumOddToN` tính tổng các số lẻ từ 1 đến n.
 * Test cases:
 * - Input: 5 -> Output: 9
 * - Input: 10 -> Output: 25
 */

// Todo giải bài tập 3
// *function sumOddToN(n){
// *    let sum = 0;
// *    if( n % 2 === 0){
// *        console.log("số bạn nhập không phải số lẻ")
// *    }else{
// *        for( i  =  1 ; i <= n ; i++){
// *            if(i % 2 !== 0){
// *                sum += i
// *            }
// *        }
// *        return sum;
// *    }
// *}
// * let result = sumOddToN(10);
// * console.log(result);
/**
 * Bài tập 4: Tính tổng các số chẵn từ 1 đến n
 * Viết hàm `sumEvenToN` tính tổng các số chẵn từ 1 đến n.
 * Test cases:
 * - Input: 5 -> Output: 6
 * - Input: 10 -> Output: 30
 */

//Todo giải bài tập tính số chẵn bài tập 4

// *function sumEvenTon(n){
// *    let sum = 0;
// *    if(n % 2 === 0 ){
// *        for(let i = 0 ; i <= n ; i++ ){
// *            if(i % 2 !== 0)
//*                 sum += i;
// *        }
// *        return sum;
// *    }else{
// *        console.log("số bạn nhập là số lẻ ")
// *    }
// *}

// let result =sumEvenTon(6);
// console.log(result)



/**
 * Bài tập 5: Tính lũy thừa
 * Viết hàm `power` tính a^b (a mũ b).
 * Test cases:
 * - Input: a = 2, b = 3 -> Output: 8
 * - Input: a = 5, b = 0 -> Output: 1
 */
// Todo giải bài tập 5 :  tính số luỹ thừa 
//* function power(a , b){
//*     let result = Math.pow(a , b);
//*     return result;
//* } 
//* let num = power(5 , 0);
//* console.log(num);

/**
 * Bài tập 6: Kiểm tra số hoàn hảo
 * Viết hàm `isPerfectNumber` kiểm tra xem một số có phải là số hoàn hảo hay không.
 * Test cases:
 * - Input: 6 -> Output: true
 * - Input: 28 -> Output: true
 * - Input: 10 -> Output: false
 */

// //*      let sum = 0;
// //*        for(let i = 0 ; i < n ; i ++) {
// //    *         if (n % i === 0) {
// //   *              sum +=i;
// //  *               return true;
// // *            }
// //*         }
       
// // }

// // let result  = isPerfectNumber(496);
// // let result2 = isPerfectNumber(28);
// // let result3 = isPerfectNumber(10);

// console.log(result);
// console.log(result2);
// console.log(result3);

/**
 * Bài tập 7: Tính tổng các chữ số của một số
 * Viết hàm `sumOfDigits` tính tổng các chữ số của một số nguyên dương.
 * Test cases:
 * - Input: 123 -> Output: 6
 * - Input: 456 -> Output: 15
 */
// function sumOfDigits(n){
//     let sum = 0 ;
//     let remainder;
//     while(n > 0){
//         remainder = n % 10;
//         sum += remainder;
//         n = Math.floor(n/10);
//     }   
//     return sum;
// }
// let result = sumOfDigits(456)
// console.log(result)
/**
 * Bài tập 9: Kiểm tra số đối xứng
 * Viết hàm `isSymmetricNumber` kiểm tra xem một số có phải là số đối xứng hay không.
 * Test cases:
 * - Input: 121 -> Output: true
 * - Input: 123 -> Output: false
 */
// todo giải bài tâp 9

// function isSymmetricNumber(n){
//     let remainder;
//     let reversed = 0;
//     let original = n;
//     while(n > 0){
//         remainder = n % 10;   // cái ni hắn lấy ra 1 
//         n = Math.floor(n/10); 
//         reversed = reversed * 10 + remainder;
       
//     }
//     return original === reversed;
// }
// let result = isSymmetricNumber(123);
// console.log(result);

/**
 * Bài tập 10: Tìm ước số của một số
 * Viết hàm `findDivisors` trả về danh sách các ước số của một số nguyên dương.
 * Test cases:
 * - Input: 6 -> Output: [1, 2, 3, 6]
 * - Input: 10 -> Output: [1, 2, 5, 10]
 */
// todo cách 1 sử dụng mảng
// function findDivisors(n){
//     let arr = [];
//     for (let i  = 0 ; i <= n ; i++) {
//         if(n%i === 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// let result = findDivisors(6);
// console.log(result);

// Todo giải bài tập 10 
// todo cách 2 không sử dụng mảng 
// *function findDivisors(n){
// *    for(let i = 0 ; i <= n ; i++){
// *    if(n % i === 0) {
// *        console.log(i);
// *    }
// * }
    
// *}

// *let result = findDivisors(10);

// *console.log(result);

