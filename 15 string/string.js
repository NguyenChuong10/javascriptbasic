//cách khai báo một kiểu chuỗi 
//let ten = "Nguyễn Đình Nguyên Chương";
//*console.log(typeof ten);
//*console.log(ten);
//* Mỗi kiểu chuỗi đều có giá trị index và index của nó bắt dầu bằng 0

//console.log(ten[0]);

// todo : kiểm tra chiều dài của chuỗi  bằng thuộc tính length
// todo : length không phải là hàm length là thuộc tính (property)
// *let chuong = "Nguyễn Đình Nguyên Chương"

// *console.log(chuong.length);

//==============================================================

// Todo : slice trích lọc chuỗi con từ chuỗi ban đầu  , cắt từ begin index -> end index -1 
// Todo : end index không nhập -> cắt đến cuối chuỗi
// Todo : substring trích lọc chuỗi con từ chuỗi ban đầu cắt từ begin index -> end index -1
// Todo : end index không nhập -> cắt đến cuối chuỗi 

// Todo : sự khác nhau giữa substring và slice là :
// substring hắn sẽ tự hiểu nếu (end index) > (start index) thì lập tức end index sẽ trở thành start in dex
// Còn đối với slice chỉ nhận giá trị cố định nếu end index > start index thì nó sẽ chả về  chuỗi rỗng
// substring khi sử dụng số âm sẽ tự động hiểu start index bằng 0.
// slice khi sử dụng số âm nó sẽ tự động hiểu là lấy ký tự bắt đầu từ cuối chuỗi .


//*let ten = "Lê Trương Gia Bảo"

//* console.log(ten.slice(0 , 5));
//* console.log(ten.substring(0 , 5));
//* console.log(ten.substring(5,0) );
//* console.log(ten.slice( 5, 0 ));
//* console.log(ten.substring(-9 , - 10));
//* (console.log(ten.slice(-10,-9));

//==============================================================

//todo Hàm trim() trimEnd() trimS tart()
//todo cách sử dụng :

//* hàm trim() sẽ xoá tất cả khoảng trắng đầu cuối của một chuỗi
//* hàm trimstart() sẽ xoá tất cả khoảng trắng đầu của một chuỗi
//* hàm trimend() sẽ xoá tất cả khoảng trắng cuối của một chuỗi

//* let ten = "    Nguyễn Thị Ngọc Thương    "

//* console.log(ten.trim());
//* console.log(ten.trimEnd());
//* console.log(ten.trimStart());

//==============================================================

// todo hàm charAt() sử dụng dùng để lấy ra một phần tử trong chuỗi theo số nhập vào 


//* let ten = "Nguyễn Đình Nguyên Chương"

//* console.log(ten.charAt(1));

//==============================================================

// todo hàm replace() và repeat()
// hàm replace() dùng để thay thế các giá trị cũ được tìm thấy đầu tiên bằng giá trị mới
// hàm repeat() dùng để thay thế các giá trị được chọn trong chuỗi 

//* let ten = "Nguyễn Nguyên Nguyên Chương"
//* console.log(ten.replace("Nguyên" , "Đình"));
//* console.log(ten.repeat(4));

//==============================================================

// todo hàm concat nối hai chuỗi lại với nhau 

//* let ten = " chương "
//* let ho = " Nguyễn"

//* let hovaTen = ten.concat(ho);
//* console.log(hovaTen)

//==============================================================

// todo hàm viết hoa toUppercase()

//* let ten = "Nguyễn Đình Nguyên Chương";

//* console.log(ten.toUpperCase()); 

// todo lowercase function and how use the function in js

//* let ten = " NGUYỄN ĐÌNH NGUYÊN CHƯƠNG";

//* console.log(ten.toLowerCase());

//==============================================================

// Todo trong chuỗi có các hàm sau dùng để tìm kiếm indexof lastindexof include

//*let chuong = " Nguyễn Đình Nguyên Chương"

//* console.log(chuong.indexOf("N", [2]));
// giải thích cách  hàm indexof xử lý 
// indexof sẽ sử dụng 'search value' cụ thể ở đây là 
//  "N"  sau đó tìm kiếm  ở vị trí index 2 sau đó trả //về kiểu số cho chúng ta ở đây nó sẽ trả về là 13

// todo hàm lastIndexOf 
// todo cách sử dụng lastIndexof
 
//* let ten = "gCyễn Đình Nguyên hương";

//* console.log(ten.lastIndexOf("C" , 20));

// todo hàm includes
// todo cách sử dụng hàm includes

//*let ten = "Nguyễn Đình Nguyên Chương"

//*console.log(ten.includes("N" ,[15]));

//include trong JavaScript được sử dụng để kiểm tra xem một chuỗi string có chưa một chuỗi con hay không nếu có trả về true nếu không trả về fall 

//todo dùng để tiềm kiếm các giá trị ở vị trí index hàm indexof lastindexof includes
// thường được dùng nhằm kiểm tra ký tự hoặc sử dụng để giới hạn ký tự


//==============================================================

//todo hàm startwidth endwidth 

//* let ten   = "Nguyễn Đình Nguyên Chươngm"
//* console.log(ten.startsWith("u"));

// hàm startWidth hẵn sẽ kiểm tra chuỗi con hắn có bắt đầu bằng chữ u hay ko nếu hắn bắt đầu bằng chữ u thì sẽ trả về true ngược lại trả về false (khi không có vị trí kiểm tra) khi có vị trí kiểm tra có sẽ cắt các chuỗi đầu trước và sét từ ví mà nó muốn kiểm ta

//* console.log(ten.endsWith("g" , 25));

// tương tự như startwith 

//==============================================================

// todo cách sử dụng hàm split()
// todo hàm split dùng để làm gì : 

let chuong = "Nguyễn Đình Nguyên Chương"

console.log(chuong.split( "+"));

// split là biến một chuỗi trả về giá trị mảng sử dụng các dấu 
//  " " , "," 


