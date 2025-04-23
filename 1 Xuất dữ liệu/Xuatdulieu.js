// Các cách xuất dữ liệu trong javascript

let soA = 25;
let soB = 5;

//cách 1 sử dụng dấu + 

console.log("căn bậc hai của " + soA + " là : " +soB );
//cách 2 sử dụng dấu ,
console.log("Căn bậc hai của ", soA , "là :" , soB);
//cách 3 sử dụng dấu S{}
console.log(`Căn bận hai của  ${soA}  là : ${soB}`);
//cách 4 sử dụng %S
console.log(`Căn bậc hai của %s là : %s` , soA ,soB);

///////////////////////////////

//Bài tập vận dụng

let a = 5,
    b = 6,
    kq = a*b;
//cách 1 sử dụng dấu +
console.log ("kết quả "+ a +" * " + b +" = " +kq);
// cách 2 sử dụng dấu,
console.log("kêt quả " , a , " * " , b , " = " +kq);
// cách 3 sử dụng dấu ${}
console.log(`kêt quả ${a} * ${b} = ${kq}` );
//cách 4 sử dụng dấu 
console.log(`kết quả %s * %s = %s`,a , b,kq);
