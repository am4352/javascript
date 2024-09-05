(function chai() {   // named iife
    console.log("database connected");
    
})();
// ()() => first parenthesis is used for exectution and second is used for function exection  IIFE
(function code() {
    
    console.log(`DB CONNECTED`);

})();

((name) => {  //unnamed iife
     console.log(`DB CONNECTED ${name}`);
         
})(`anuj`) // takes parameter here






