// let currentDate = new Date();

// let year  = currentDate.getFullYear();
// let month = currentDate.getMonth();
// let day   = currentDate.getDay();
// let hours = currentDate.getHours();
// let minute = currentDate.getMinutes();


// console.log(year , month , day , hours, minute);

//todo ===========================================
// timestamp

const timestamp = new Date(0);
const currenttimestamp = new Date().getTime();

console.log(timestamp);
console.log(currenttimestamp);


// cách set ngày tháng theo ý muốn 

let myDate = new Date(2024, 5, 5);

console.log(myDate.toLocaleDateString());

let myDates = new Date();

myDates.getFullYear(2025);
myDates.getMonth(1);
myDates.getDay(4);

console.log(myDates)
console.log(myDates.toLocaleDateString());

 





