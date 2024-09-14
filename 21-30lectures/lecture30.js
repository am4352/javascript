const coding = ["js", "python", "html", "css"]
const values = coding.forEach((items) => {
//callback function
    console.log(items);
    return items
})
// if you want to return something from the array or transform it, use map().If you're only iterating over the array without needing to return or store anything, forEach() is fine.
console.log(values); //gives undefined value
const mynum = [1, 5, 6, 8, 9, 3, 2, 7]
// const newnum = mynum.filter((items) => items > 4)//returns an array 
// console.log(newnum);

const newnum=[]
mynum.forEach((num) => {
    if (num>4) {
        newnum.push(num);
    }
})

console.log(newnum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition:2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// let userbooks = books.filter((bk) => bk.genre === 'History') //we are searching the books which have history genre 
// console.log(userbooks);

const userbooks = books.filter((bk) => {
   return bk.publish >= 1995 && bk.genre === 'history'
}
) //gives an array
console.log(userbooks);









