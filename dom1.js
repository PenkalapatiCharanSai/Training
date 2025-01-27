// let ele = document.createElement("h1")
// ele.innerText = "Dynamic creeation of html element"
// ele.id="demo"
// ele.setAttribute("id", "demo")
// console.log(ele);

//  ele.removeAttribute("id")
// document.body.appendChild(ele);

// let img = document.createElement("img")
// image.src="./image.png"
// console.log(image);

// document.body.appendChild(img);



// let form = document.querySelector("form")
// let name = document.querySelector("#uName")
// let email = document.querySelector("#uEmail")
// let psw = document.querySelector("#uPsw")

// form.addEventListener("submit", (event)=>{
//     event.preventDefault()
//     console.log("Form Submitted")
//     console.log(name.value)
//     console.log(email.value)
//     console.log(psw.value)

// })


//^
// let mainEle = document.createElement("div");
// mainEle.setAttribute("id", "mainBlock");

// let topEle = document.createElement("div");
// topEle.setAttribute("class", "topBlock");

// let image = document.createElement("img");
// image.src = "https://upload.wikimedia.org/wikipedia/commons/4/47/Nature-4041979.jpg"; 
// image.width = 300; 
// image.height = 300;
// image.style.objectFit = "cover";

// topEle.appendChild(image);

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class", "bottomBlock");

// let h1 = document.createElement("h1");
// h1.innerText = "Nature";

// let btn = document.createElement("button");
// btn.innerText = "View More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);

// document.body.appendChild(mainEle);



// ! form
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let name = document.querySelector("#uName");
    let password = document.querySelector("#uPass");
    let gender = document.querySelectorAll("[name='gender']");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      let un = name.value; 
      let pass = password.value;
      let gen = "";

      for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
          gen = gender[i].value; 
          break; 
        }
      }
  
   
      let userDetails = {
        username: un,
        password: pass,
        gender: gen,
      };
  
      sessionStorage.setItem("userDetails", JSON.stringify(userDetails));

     
      console.log("User Details Saved to Session Storage:", userDetails);
      console.log("Stored Data:", sessionStorage.getItem("userDetails"));
  
      console.log(userDetails);
    });
  });
  
