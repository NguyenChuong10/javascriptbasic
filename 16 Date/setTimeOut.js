


const tinhTong = function (n) {
    let sum = 0 ;
    for (let i = 0 ; i <= n ; i++) {
        if (i % 2 == 0 ) {
            sum = sum + i ;
        }
    }
    return sum;
};

setTimeout(() => {
    console.log(tinhTong(7))
}, 10000);

 const id = setInterval(() => {
    console.log(tinhTong(8))
},5000);

setTimeout(() => {
    clearInterval(id);
    console.log("đã dừng setInterval");
}, 6000);




