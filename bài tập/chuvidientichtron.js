// let r = Number(prompt("mời bạn nhập số mong muốn : "))

// console.log(r)
// console.log(typeof r)

// let pi = Math.PI;

// let chuVi = 2*pi*r;
// let dienTich = pi*r*r;

// document.write("Chu vi của hình tròn là : " +chuVi)
// document.write("Diện tích của hình tròn là : " +dienTich)

// Tính dien tich hinh chu nhat

// let n = Number(prompt("Mời bạn nhập số mong muốn : " ))
// console.log(n)
// console.log(typeof n)

// let m = Number(prompt("Mời bạn nhập chiều rộng : " ))


// let chuVii = (n+m)*2;
// let dienTichh = (n*m);

// document.write("Chu vi hinh chữ nhật là : " + chuVii +"<br>")
// document.write("Diện tích hình chữ nhật là : "+ dienTichh);

// tính điẻm trung bình của ba môn toán văn anh sau đó hoàn thành và làm tròn đến 2 chữ số sau dấy phẩy

let diemToan =Number(prompt("Nhập điểm toán mà bạn mong muốn là : " ))   
let diemAnh  =Number(prompt("Nhập điểm anh của bạn mong muốn là : "))
let diemVan  =Number(prompt("Nhập điẻm văn mà bạn mong muốn là  : "))


let diemTrungBinh = (diemToan+diemAnh+diemVan)/3;


document.write("diem trung binh của ba môn là : " +diemTrungBinh.toFixed(2));


