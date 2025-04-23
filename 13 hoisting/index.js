//todo hosting với var
// var age;
// console.log(age);
// age = 16;

// todo hoisting với hàm nha

// console.log(sum(6 , 9))
// function sum(a, b){
//     return a + b ;
// }

// todo hosting với let và const

{
  //  console.log(fullName);
   // let fullName = "Nguyễn Đình Nguyên Chương"// let và const đều được hoisting 
    // nhưng không giống thằng var nó sẽ hoisting và nhận về một giá trị là undefind khi khai bao sau khi gọi
    //  nhưng thằng let và const nó không được truyền giá trị mà nó
    //  được lưu vào một vùng tempozal dead zone 

}

// todo giải thích lý do vì sao phải hoisting


let fullName = "Nguyen Van A"

{
    let fullName = "Nguyen Van B"
    {
        {
            console.log (fullName)

            let fullName = "Nguyen Van C"

        }
    }
}

// tại sao phải hoisting bởi vì nó sẽ chọn biến gần nhất để đưa phạm vị lên đâu 
// để mà khi chạy đoạn lệnh ở dòng số 7
// là có biến fullName rồi để tránh trường hợp nó nhảy ra lây biến phạm vị bên ngoài
// trong phạm vi của đoạn code dòng 33 đã có biến fullName rồi
// nhưng trong trường hợp này đọng code dòng 33 không được khai báo vì thằng let đang năm trong phạm vi temporal dead zone
