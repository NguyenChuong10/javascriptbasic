// todo kiểm tra các kiểu dữ liệu sau đó xuất ra bằng code thuần trong mảng



// const aRR = ['chuong' , 1 ,2, 3 , true , false,]

// console.log(aRR);

// function testArray(n){

//     for(let i = 0 ; i <= n.length ; i ++){
//         if(typeof n[i] === `string`){
//             console.log (n[i])
//         }else if( typeof n[i] === `number`){
//             console.log("kiểu dữ liệu số là " +n[i])
//         }else if(typeof n[i] === `boolean`){
//             console.log("kiểu dữ liêu true false là : " +n[i])  
//         }else {
//             console.log("đây không phải mảng .")
//         }
//     }
//     return 
// }

// let result = testArray(aRR);


// todo truy xuất phần từ của mảng 

// let arr5 = [1 ,2 , 3, 4,5]
// console.log (arr5[0]);


// todo hàm concat nối mảng hiện tại với mảng khác  trả về mảng mới

// let num  = [1, 2 , 3 ,4 ,5]

// let nameList = [ "chương","đức"," vân ","bảo","hiếu" ]

// let result = num.concat(nameList);
// console.log(result)

// todo hàm push() : thêm một hoặc nhiều phần tử vào cuối mảng gốc 

//let arr =[1 ,2 ,3,4,5]

//let result = arr.push(6);
//console.log(result)

//console.log(arr);

// todo hàm unshilf : thêm một hoặc nhiều phần tử vào đầu mảng gốc.

// let arr = [ 0 , 1 , 2 , 3 , 4 , 5 ,6]
// let result   = arr.unshift(1);
// console.log(result)
// console.log(arr)

// todo hàm pop() : xoá phần tử cuối trong mảng.

// let arr = [ 0 , 1 ,2 ,3 ,4 ,5,]

// console.log(arr.pop(0))

// console.log(arr)

// todo hàm shift() : xoá phần tử đầu trong mảng.

 //let arr = [0 ,1 ,2 ,3 ,4 ,5];

 //arr.unshift(0);

 //console.log(arr);

 //todo hàm slice : cắt một mảng từ vị trí bắt đầu đến vị trí muốn kêt thức

//   let arr = [ 1, 2 , 3 ,4 ,5]

//  let sliceArray = arr.slice(1 , 4)

// console.log(sliceArray);

// todo hàm indexof : tìm giá trị lần đầu tiên xuất hiện trong mảng sau đó in ra vị trí index còn nếu không có trả về -1

//  let arr = [ 1 , 2 ,3,4,2,5]

//  console.log(arr.indexOf(2));
//  console.log(arr.lastIndexOf(2));

// todo reverse hàm đảo ngược chuỗi 

// let arr = [0,1,2,3,4,5,6]

// arr.reverse();

// console.log(arr)

// todo hàm join() nối các phần tử trong mảng thành chuỗi

// let arr = [1  , "Chương" , 3,  4 ]

// let result = arr.join(" - ")

// console.log( result); 

//todo Hàm splice : hàm này được sử dụng để xoá một vị trí trong mảng splice()

// let arr = [ 2 , 3, 4 ,5 ,6, 7,6]
// arr.splice(-2 , 1)
// console.log(arr)


// todo toán tử spread là một toán tử mới được thêm vào phiên bản es6  .spread cho phep duyệt qua các phần tử của mảng -> qua đó ta có thể thực hiện 
// todo tạo bản sao của mảng
// todo truyền đối số vào hàm 
// todo kết hợp mảng nối mảng 
// todo tạo mảng mới với thêm phần tử 
// todo chuyển đổi iterable(có thể duyệt qua string array thành mảng)

// let M1 = [1 ,2 ,3];
// let M2 = [4,5,6]
// let M3 = c
// console.log(M2); 

// M2[0] = 99;

// console.log(" Mảng m2 = " +M2);
// console.log(" Mảng m1 = " +M1);

// todo truyền đối số vào hàm 
// const sum = function(a, b ,c) {
//     return a+b+c;
// }

// let result = [1 , 2 , 3]         
// let arr = sum(...result);

// console.log(arr);

// todo sử dụng  toán tử spread để ta nối hai mảng lại với nhau


// let arr =[1 ,2 ,3 ,4]

// let arr1 = [5,6,7,8]

// let result = [...arr,...arr1]

// console.log(result)


// todo sử dụng toán tử spread  để tạo mảng mới và thêm phần tử

// let numArr = [ 1 , 2 , 3];

// let newnumArr = [...numArr , 4]

// console.log(newnumArr);

//todo chuyển đổi chuỗi , interal thành mảng

// let chuoi = "chuoi"

// let arrnew = [...chuoi];

// console.log(arrnew)

//todo array.sort([comparefunction])
//todo array : mảng cần được xắp xếp 
//todo comparefunction : hàm  so sánh được sử dụng dể xác định thứ tự xắp xếp
//todo nếu không được cung cấp, sort() sẽ sắp xếp các phần tử dưới dạng chuỗi  Unicode
// nếu compare function được cung cấp nó sẽ nhận hai đối số , thường được gọi là a và b
// nếu compareFunction(a,b) trả về giá trị < 0 a sẽ được đặt trước b
// nếu compareFunction(a,b) trả về 0 ,thứ tự giữa a và b không thay đổi
// nêu compareFunction(a,b) trả về một giá trị > 0 , b sẽ được đặt trước a.

// let M1=["c" , "a" , "b"]
// //cách coi ký tự unicode
// console.log("b".charCodeAt());

// for(let element of M1) {
//     console.log(`${element} có mã unicode là  ${element.charCodeAt()}`)

// }

// let sortM1 = M1.sort()

// console.log(sortM1)

// Todo sử dụng hàm sort có compartfunction để sắp xếp mảng

// let arr =[2,3,5,4,7,6,8]

// let sortupArray = arr.sort((a , b) => a - b)

// console.log(sortupArray) // theo thứ tự tăng dần

// let sortdownArray = arr.sort((a,b)=> b-a)

// console.log(sortdownArray)// theo thứ tự giảm dần

// todo sử dụng phương thức reduce để chuyển các giá trị mảng thành một giá trị duy nhất
// ví dụ bài toán khi ko dùng reduce

// // thực hiện tính tổng các phần tử trong mảng
// //1. Giá trị khởi tạo ban đầu
// let sum = 0 ; // biến lưu trữ
// for(let element of chuong) {
//     sum += element;
// }
// console.log(sum)

// // bây giờ sử dụng hàm reduce để tính tổng mảng trên 

// let arr = [1 , 2 , 3 ,4, 5]
// const tinhTong = arr.reduce((previousValue,currentValue,currentIndex,array)=>{


//      let sum = previousValue + currentValue
     
//      console.table({
//         "biến lưu trữ :" : previousValue,
//         "giá trị khởi tạo :" : currentValue,
//         "giá trị index :" : currentIndex,
//      })
//      return sum
// },0)

// console.log(tinhTong)


// let mutipalArray= [1,2,3,4,5]
// const mutipal = mutipalArray.reduce((a,b)=>a*b,1)
// console.log(mutipal)

// khai báo môt object để sử dụng reduce
// const courses  = [
//    { id : 1 ,
//     name : 'javascript',
//     coin : 100
//    },
//    {
//     id : 2 ,
//     name : 'javascript',
//     coin : 100
//    },
//    {
//     id : 3 ,
//     name : 'javascript',
//     coin : 100
//    },
//    {
//     id : 4 ,
//     name : 'javascript',
//     coin : 100
//    }
// ] 

// const totalCoin = courses.reduce(function(accumulator , currentValue){
//     return accumulator + currentValue.coin
// },0)// initialValue

// console.log(totalCoin)


// let num = [ 1 , 2 , 3 , 4 , 5 , 6 ]


// let result = num.filter(function(currentValue ,currentIndex){
//         if(currentValue % 2 === 0){
//             console.log(currentValue);
//         }
// })

let products = [
    {
        name : "Áo",
        category : "Thời trang"
    },
    {
        name : "laptop",
        category : "Công nghệ"
    },
    {
        name : "bếp từ",
        category : "Đồ gia dụng"
    },
]

const result = products.filter(function(currentValue , currentIndex){
        return currentValue.category ==="Đồ gia dụng";
})
console.log(result)



