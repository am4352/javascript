const mynums = [1, 5, 3]

//  the reduce() method is used to calculate the sum of all elements
/*const mytotal = mynums.reduce(function (acc, currvalue)
{
    console.log(`acc = ${acc} currvalue = ${currvalue} `);

    return acc + currvalue
    
}, 0)
console.log(mytotal);*/

const mytotal = mynums.reduce((acc,currvalue) => (acc+currvalue),0) //callback function
console.log(mytotal);

const shoppingcart = [
    {
        coursename: "js course",
        price :299
        
    },
    {
        coursename: "python course",
        price :899
        
    },
    {
        coursename: "c course",
        price :499
        
    },
    {
        coursename: "c++ course",
        price :3999
        
    },
]

const pricetopay = shoppingcart.reduce((acc , item) => acc + item.price,0)

console.log(pricetopay);








