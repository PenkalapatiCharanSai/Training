// // higher order function & callback function
// function hof(a) {
//     return a
// }
// let x = hof("charan")
// console.log(x)

// //callbck function
// let y = hof(function(){return "callback function"})
// console.log(y)
// console.log(y())
// let users = ["Charan", "Raj", "Ravi", "Rajesh", "Rahul"]
// console.log(users)
// users.map((user) => {
//     console.log(user)
// })

var a = 10
let b = 45
function x(){
    var user = "charan"
    let company = "TCS"
    const sal = 100000
    console.log(user)
    console.log(company)
    console.log(sal)
    console.log(a,b)
}
x()

function x(){
    let a = 10
    const b = 20
    console.log(a,b)
    function y(){
        let p = "Js"
        var q = "React"
        console.log(p,q)
        function z(){
            const username = "Charan"
        console.log(username)
        console.log(a)
        console.log(q)
        }
        z()
    }
    y()

}
x()