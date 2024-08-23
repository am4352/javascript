let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log((mydate.toLocaleString));
console.log(typeof mydate);
let mycreatedate = new Date("01-14-2023")
console.log(mycreatedate.toDateString());
let mytimestamp = Date.now()
console.log(mycreatedate.getTime());
mytimestamp.toLocaleString(`default`, {
    weekday: "long",

})





