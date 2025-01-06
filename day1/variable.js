console.log("start")

//global-scope

var a = 10
console.log(a)

//local-scope

let b = 20
console.log(b)

const c = 30
console.log(c)

//block-scope

{
    var m = 100
    console.log(m)

    let n = 299
    console.log(n)
    
    const o = 300
    console.log(o)
}

console.log("end")