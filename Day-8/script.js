const tempObject = {
    "a":"Value a",
    "b":"Value b"
}

// // to access a particular value we use it's key
// console.log(tempObject.a) // -> "Value a"

// const { a } = tempObject; // -> "Value a"

// // to make a copy of tempObject along with some new values we destructure it.
// const tempObj2 = {
//     ...tempObject, // this piece of code actually destructures it
//     "c" : "Value c"
// }


// localStorage.setItem("Key","Value");
// localStorage.getItem("Key");
// // localStorage.clear(); -> this will clear the localStorage

// // Key point -> localstorage can only store data in form of string.

// // what to do when we have complex data? like object?
// // Firstly we convert that object into a string using JSON.stringify(objectValue);
// // JSON.stringify(objectRequired) will return a string value.

// // To convert a stringified value to object we use JSON.parse(stringValue);
// //  JSON.parse(stringValue) will retrun an object value.

// localStorage.setItem("tempObj", JSON.stringify(tempObject))
// JSON.parse(localStorage.getItem("tempObj")) 


// Iterators help us in iterating on an array.

// const array = [1,2,3,4,5,6,7,8,9,10];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

// array.forEach((element, index) => {
//     console.log("Value ", element, "Index", index);    
// });

// for (const key in tempObject) {
//     // console.log("Key ",key)
//     if (tempObject.hasOwnProperty(key)) {
//         const element = tempObject[key]; // tempObject.key
//         console.log(element);
//     }
// }

// Try learning about this iterator -> Homework/Assignment
// for (const iterator of object) {}

const array = [1,2,3,4,5,6,7,8,9,10];

// function multiplyBy2(value) {
//     return value * 2;
// }

// console.log(array.map(multiplyBy2))

// console.log(array.map((value)=>{
//     return value * 2
// }))

const array2 = [{
    "name": "Karun",
    "gender": "male",
    "score":"failed"
}, {
    "name": "Karthik",
    "gender": "male",
    "score":"failed"
}, {
    "name": "XYZ",
    "gender": "female",
    "score":"passed"
}]

// console.log(array2.map((item)=>{
//     return item.name
// }))

// console.log(array2.map((item)=>{
//     return {
//         ...item,
//         "favouriteSport":"cricket"
//     }
// }))

function isOdd(value){
    return value%2 != 0;
}

// console.log(array.filter(isOdd))

console.log(array.filter((value)=>{
    return value > 5;
}))

console.log(array2.filter((value)=>{
    return value.score === "passed";
}))