// let score = prompt("mời bạn nhập điểm chuẩn : " )

// if(score > 5){
//     console.log("chúc mừng bạn đã đạt điểm tối đa")
// }else{
//     console.log("chúc mừng bạn phải học lại nhé")
// }

// //ifelseifelse

// let diem = prompt("mời bạn nhập điểm số bạn muốn nhập : ")

// if(diem<=10 && diem >= 8){
//     console.log("bạn đạt học sinh giỏi")
// }else if(diem<8 && diem>=6.5){
//     console.log("bạn đạt học sinh khá") 
// }else if(diem<6 && diem >= 5){
//     console.log("bạn học sinh trung bình")

// }else{
//     console.log("bạn phải học lại")
// }

// // giải phương trình bậc 1

// let a= prompt("Mời bạn nhập vào số bạn mong muốn là :" );
// let b= prompt("Mời bạn nhập hiệu bạn mong muốn là :");


// let x, y;

// if(!isNaN(a) && !isNaN(b)) {
//     x = (a+b)/2;
//     y = (a-b)/2;

//     if(x+y === a && x-y === b) {
//         console.log(" Nghiệm tìm được là : ");
//         console.log(" x = " ,x);
//         console.log(" y = " ,y);
//     }else{
//         console.log("Không tìm thấy nghiệm phù hợp .");
//     }
// } else {
//     console.log("Giá trị  nhập không hợp lệ");
// }

//tình BMI cân năng của một người 
// let chieuCao = prompt("Nhập vào chiều cao của bạn là : " )
// let canNang = prompt("Nhập vào cân nặng của bạn là : ")

// let BMI = canNang/(chieuCao*2);

// if(BMI<15){
//     console.log("thân hình quá gầy")
// }else if( BMI>=15 && BMI < 16){
//     console.log("thân hình gầy")
// }else if(BMI >=16 && BMI< 18.5){
//     console.log("thân hình hơi gầy")
// }else if(BMI>=18.5 && BMI<25){
//     console.log("thân hình bình thường")
// }else if(BMI>=25 && BMI<30){
//     console.log("thân hình hơi béo")
// }else if(BMI >= 30 && BMI<35){
//     console.log("thân hình béo")
// }else if(BMI >= 35){
//     console.log("Thân hình quá béo")
// }


// let nam = prompt("nhập số năm mà bạn muốn kiểm tra : "  )

// if(((nam%4 === 0)&&(nam%100!==0))||(nam%400===0)){
//     console.log("năm bạn nhập là nhăm nhuận nha")
// }else  {
//     console.log("năm của bạn không phải là năm nhuận")
// }


// let thang = parseInt( prompt("Mời bạn nhập tháng mà bạn muốn kiểm tra là như thế nào : "))

// if( thang >= 1 && thang <= 12 ){
//     if(thang === 1 || thang === 3 || thang === 5|| thang === 7 || thang === 8|| thang === 10 || thang === 12){
//         console.log("Tháng bạn nhập có 31 ngày")
//     }else if(thang === 4 || thang  === 6 || thang===9 || thang === 11){
//         console.log("tháng bạn nhập có 30 ngày ")
//     }else if(thang === 2){
//         let nam = prompt("Mời bạn nhập năm bạn muốn kiểm tra ")
//         if(((nam%4 === 0)&&(nam%100!==0))||(nam%400===0)){
//             console.log("năm của bạn là năm nhuận nên tháng có 29 ngày")
//         }else{
//             console.log("năm của bạn không phải là năm nhuận nên tháng của bạn có 28 ngày")
//         }
//     }
// }

// else{
//     console.log("tháng bạn nhập không có ")
// }

let a = parseInt(prompt("Nhập sô a để tính delta : " ));
let b = parseInt(prompt("nhập số b để tính delta :"  ));
let c = parseInt(prompt("nhập số c đêt tính delta : "));

let delta = (Math.pow(b,2)-(4*a*c))

if(delta < 0 ){
    console.log("Phương trình 1 vô nghiệm")
}else if(delta === 0){
    let x = (-b)/2*a;
    console.log("phương trình có 1 nghiệm kép  là x1 , x2 =  " + x );

}else {
    let x1 = ((-b)+ Math.sqrt(delta))/2*a;
    let x2 = ((-b)- Math.sqrt(delta))/2*a;
    console.log("phương trình có 2 nghiệm phân biệt x1 , x2 " +x1+ " " +x2)
}

 