const coding = [1, 8, 9, 5, 6, 7];


// coding.forEach(function (val)
// {
//     console.log(val);
    
// })
coding.forEach((item , index, arr) =>  //callback function
{
    console.log(item, index , arr); // prints item, index no. and whole array
    
})  


/*const mycoding = [
     {
    languagename : "javascript",
    filename : "js"
    },
    {
        languagename: "python",
        filename:"py"
    },
    {
        languagename: "golang",
        filename:"go"
    },
     
]*/
mycoding.forEach((item) => //foreach    call back function
{
    console.log(item.filename);
    
}),
mycoding.forEach((item) =>
{
    console.log(item.languagename);
    
})