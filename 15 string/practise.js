let kytu = "123AbcDD";
console.log(kytu.length);

let lowercaseCount = 0;
let uppercaseCount = 0;
let numberCount    = 0;
let spaceCount     = 0;

for (let i = 0 ; i < kytu.length ; i++) {
    if(kytu[i] >= "a" && kytu[i] <= "z"){
        lowercaseCount++;
    }else if (kytu[i] >= "A" && kytu[i] <= "Z"){
        uppercaseCount++;
    }else if (kytu[i] >= 0 && kytu[i] <= 9){
        numberCount++;
    }else if (kytu[i] == " "){
        spaceCount++;
    }
}

console.log("số ký tự in thương là " +lowercaseCount)
console.log("số ký tự in hoa là  "+ uppercaseCount)
console.log("số ký tự kiểu số là "+numberCount)
console.log("số ký tự kiểu chuỗi là "+spaceCount) 