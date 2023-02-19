// console.log("its working !!")
// console.log(document.body);
// let a = document;

// console.log(a.forms[0]);

// console.log(a.links[3]);

// console.log(a.all);

// let a = document.all;
// console.log(a);

// Array.from(a).forEach(function(item){
//     console.log(item);
// });


// let arraydemo =['html','head','body','title']

// arraydemo.forEach(function(item,index){
//     console.log("item:",item,"index:",index);
// })

// let a = document.getElementsByTagName("ul")[0];
// console.log(a);

// let userName = document.getElementById("username").value;
// let password = document.getElementById("password");

// function handleClick(){
    
// // let userName = document.getElementById("username").value;
// // console.log(userName);
//     console.log("clicked");
// }

// console.log(userName);


function handleClick(){
    // let principle = document.getElementById("principle").value;
    // let rate = document.getElementById("rate").value;
    // let time = document.getElementById("time").value;

let principle = document.querySelector("#principle").value;
let time = document.querySelector("#time").value;
let rate = document.querySelector("#rate").value;


    let si = (principle*time*rate)/100;
    document.getElementById("si-demo").innerHTML=`simple interest = ${si}`
    document.getElementById("si-demo").style.color="white"
}
















// console.log(typeof(a));







