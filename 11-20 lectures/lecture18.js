const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "anuj"
}

// course.courseinstructor
const { courseinstructor: instructor } = course// values can be directly used by using const
const{price} = course

// console.log(courseinstructor); //
console.log(instructor);
console.log(price);
console.log(course.coursename);
console.log(course.price);



// {
//     "name": "anuj",
//     "coursename": "js in hindi",    // sample json file
//     "price" : 2000
// }








