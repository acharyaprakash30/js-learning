// console.log('hello world');
// let a = document;

// console.log(a);
// console.log(a.all);
// console.log(a.forms);
// console.log(a.links);
// console.log(a.forms);
// console.log(a.forms);

//with the help of a.all make array

// Array.from(a.all).forEach(function(item){
// console.log(item,"item")
// })

// console.log(typeof(document))



// document.getElementById("demo").innerHTML = "Hello World!";
// here getElementbyid is a method and innerhtml is a property


// function handleClick(){
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;

//     // let test = document.querySelector('#email').value;
    
//     let box = document.getElementById('box');
//     const h1 = document.createElement('h4');
//     h1.setAttribute("style", "color:white;font-size:20px");
//     h1.innerHTML=`email:${email}`;
//     box.appendChild(h1);

//     const h2 = document.createElement('h4');
//     h2.setAttribute("style", "color:white;font-size:20px");
//     h2.innerHTML=`email:${password}`;
//     box.appendChild(h2);


// }


// <!DOCTYPE html>
// <html>
// <head>
// <script>
// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }
// </script>
// </head>
// <body>

// <h2>JavaScript Validation</h2>

// <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
//   Name: <input type="text" name="fname">
//   <input type="submit" value="Submit">
// </form>

// </body>
// </html>

// console.log("hello world");


// function handleClick(){
//     document.getElementById("emailError").innerHTML = "";
//     document.getElementById("passwordError").innerHTML = "";

//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     if(email == ""){
//         document.getElementById("emailError").innerHTML = "Email field is required!!";
//         setTimeout(handleClear,2000);
//     }
//     if(password == ""){
//         document.getElementById("passwordError").innerHTML = "Password field is required!!";
//         setTimeout(handleClear,2000);
//     }
//     else{
//         console.log("logged in sucessfully");
//     }
// }
// function handleClear(){
//     document.getElementById("emailError").innerHTML=""
//     document.getElementById("passwordError").innerHTML=""
// }

// let heroContent = document.getElementById("hero");
// let heroPTag = heroContent.getElementsByTagName("p")[0];
// console.log(heroPTag);

// let HeroContentFromClass = document.getElementsByClassName("container")[0];
// console.log(HeroContentFromClass);

// let HeroContentFromTagName = document.getElementsByTagName("section")[0];
// console.log(HeroContentFromTagName);


// let section = document.querySelector("#hero");
// console.log(section);


// let section = document.querySelector("ul");
// console.log(section);


// function handleSubmit(){
//     let email = document.querySelector("#email").value;
//     let password = document.querySelector("#password").value;
//     document.querySelector("#emailError").innerHTML ="";
//     document.querySelector("#passwordError").innerHTML="";

//     if(email == ""){
//         document.querySelector("#emailError").innerHTML ="email field is required"
//     }
//     if(password == "")
//     {
//         document.querySelector("#passwordError").innerHTML = "password field is required";
//     }
    
//     if(email == ""|| password == ""){
//         return false
//     }
//     let newEmail ="prakash@gmail.com";
//     let newPassword = "123456";

//     if(email == newEmail && password == newPassword){
//         return true
//     }else{
//         alert("invalid credintals");
//         return false
//     }
//     return false;

// }
// console.log(heroContent);


//event listner


// let name = document.querySelector("#submit");




// name.addEventListener("click",function(){
//     console.log("here i am ")
// });


// events:
// click
// dblclick
// mousedown
// mouseenter
// mouseleave
// mousemove
// mouseout
// mouseover
// mouseup

// let buttons =document.querySelectorAll("button");
// let string = "";
// buttons.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         if(e.target.innerHTML == "="){
//             string = eval(string);
//         document.querySelector("input").value =string
//         }
//         else if(e.target.innerHTML == "C"){
//         string ="";
//         document.querySelector("input").value =string
//         }
//         else{
//             string = string + e.target.innerHTML
//             document.querySelector("input").value =string
//         }
        
//     })

// })

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     console.log("minimum",min,"maximum",max);

//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   const randomNumber = getRandomInt(10.01, 200.99);
//   console.log(randomNumber);


// function getRandomItem(arr) {

//     // get random index value
//     const randomIndex = Math.floor(Math.random() * arr.length);

//     // get random item
//     const item = arr[randomIndex];

//     return item;
// }

function hexcodeconvertor(r,g,b){
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');


    return "#" + hr + hg + hb;
}



function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}


function clickHandler(event) {

    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);

let hex = hexcodeconvertor(r,g,b);



    document.getElementById('color').value = hex;
    document.getElementById('text').innerHTML = hex;
}

document.addEventListener('click', clickHandler);


















