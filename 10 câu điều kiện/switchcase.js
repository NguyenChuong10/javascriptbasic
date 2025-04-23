
console.log(`chọn cách tìm kiếm
    1 . tìm theo tên
    2 . tìm theo tên tác giả
    3 . tìm theo tên nhà sản xuất
    4 . tìm theo tiêu đề
    5 . thoát nếu phím bấm không hợp lệ
    `)

let a = parseInt(prompr("nhập số để dò danh sách nha"))

switch (a){
    case 1 :
        console.log("1 . tim theo ten");
        break;
    case 2 :
        console.log("2 . tim theo ten tac gia");
        break;
    case 3 :
        console.log("3 . tim theo ten nha san xuat");
        break;
    case 4 :
        console.log("4. tim theo tieu de ");
        break;
    default:
        console.log("Thoat neu bam phim khong hop le")
        break;

}