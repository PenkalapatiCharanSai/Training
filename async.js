
//promise
// let p1 = new Promise((resolve, reject) => {

// });
// console.log(p1);


// let p2 = new Promise((resolve, reject) => {
//     resolve("Success");
//     reject("Reject");
//  });
// // console.log(p2);
// p2.then((res)=>{
//     console.log(res);
// })
// p2.catch(err=>console.log(err));
// p2.finally(()=>console.log("final"));


// let p3 = new Promise((resolve, reject) => {
//     reject("Failures");
// });
//  console.log(p3);
// p3
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
// .finally(()=>console.log("final"));


// // async & await

// function demo(){
//     console.log("start");
//     console.log(10)
//     console.log(20)
//     return;
//     console.log(30)
//     console.log("end")
// }
// demo()

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success");
//     }, 4000);
// });

// async function demo() {
//     console.log("start");
//     let x = await p;
//     console.log(x);
//     console.log("end");
// }
// demo();

// async function fetchUsers(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     console.log(data);
// }
// fetchUsers();

console.log(window)

