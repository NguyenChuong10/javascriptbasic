
// tiền tố hắn có dạng như sau ++a,--a
// hậu tố hắn có dạng như sau a++,a--

// cách sử lý tiền tố và hậu tố trong javascript

//bước một : sử lý tiền tố trước ++a
//bước hai : sử lý các phép toán còn lại bên vế bên phải
//bước ba  : sau đó gán giá trị đã sử lý được từ vế bên phải cho vế bên trái
//bước bốn : sử lý hậu tố

let a = 10;
let b = 12;
let c = a++ - --b + 10;

console.log("kết quả của a là : " +a)//11
console.log("kết quả của b là : " +b)// 11
console.log("kêt quả của c là : " +c )//9
