// let ele = document.createElement("h1")
// ele.innerText = "Dynamic creeation of html element"
// //ele.id="demo"
// ele.setAttribute("id", "demo")
// console.log(ele);

// // ele.removeAttribute("id")
// document.body.appendChild(ele);

// let img = document.createElement("img")
// image.src="./image.png"
// console.log(image);

// document.body.appendChild(img);



let form = document.querySelector("form")
let name = document.querySelector("#uName")
let email = document.querySelector("#uEmail")
let psw = document.querySelector("#uPsw")

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log("Form Submitted")
    console.log(name.value)
    console.log(email.value)
    console.log(psw.value)

})
