const user = {
    name : "Hello",
    age: 30,
    en : 12341234,
    email:"aksdjfhksdjfh@kljadhfksjdf.com",
}
const user2 = user;

user2.name = "Hi there ";

console.log(user)

console.log(user["name"]);

console.log(`Hello ${user["name"]}`)

user.greeting = function(){
    console.log("Hello World!!");
}

console.log(user.greeting())    


let user3 = {
    "a":1,
    "b":2,
}

let user4 = {...user,...user3};

console.log(user4)

console.log(Object.keys(user));
console.log(Object.values(user));
