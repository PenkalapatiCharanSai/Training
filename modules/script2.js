//^ Named import
//import {msg , greet} from "./script1.js";
// import  {greet}  from "./script1.js";

// let abc = greet();
// console.log(abc)
// console.log(greet())


import { x, user, users, obj } from "./script1";

console.log(x);
console.log(user);

console.log(users);
users.map(user => {
    console.log(user);
});
console.log(obj.name);

// const college = "Your College Name";
// console.log(college);



















//^Default import
// import mru from "./script1.js";
// console.log(mru())
