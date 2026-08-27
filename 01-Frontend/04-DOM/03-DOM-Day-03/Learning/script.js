//attributes and properties
// set, get, remove, has attributes

// const h1 = document.querySelector("#id1");

// let response = h1.getAttribute("class");
// console.log(response);

// h1.setAttribute("width", "400px");


// let response2 = h1.getAttribute("width");
// console.log(response2);

// let response3 = h1.removeAttribute("width");
// console.log(response3);

// let response4 = h1.hasAttribute("class");
// console.log(response4);


// //with data -*data

// // see in html (apna khud ka attribute(custom attribute) )
// let userCard = document.querySelector("#user_card");
// let response5 = userCard.getAttribute("data-user-card");
// console.log(response5);

// userCard.dataset.userCard = "0900";
// // .dataset will access dataset wali chz
// let response6 = userCard.getAttribute("data-user-card");
// console.log(response6);

// input.value & input.getAttribute('value')

// text data to JS mein grab krna

// Always first select the thing before doing anything
// const ipt = document.querySelector("input"); // ek hi hai to directly selection
// const btn = document.querySelector("button");

// btn.addEventListener('click', ()=>{
//     const data = ipt.value;
//     console.log(data); // it will update live
//     // console.log(ipt.getAttribute("value")); //html attribute no live update
// })


// creation and insertion of element

//insertion 
//-appendChild() : appends only one ele at a time
//-append() : appned multiple ele at a time
// const main = document.querySelector("main"); // kiske andar append krna hai

// //creation
// let footer = document.createElement("footer");
// let span = document.createElement('span');


// span.innerHTML = "Hey I'm <i> dynamic <i>"
// // main.appendChild(footer);
// // main.appendChild(span);

// main.append(footer, span);

// const parent = document.querySelector(".parent");

// const box1 = document.querySelector(".box1");
// const box2 = document.querySelector(".box2");
// const box3 = document.querySelector(".box3");

// box2.style.backgroundColor = "yellow";
// box3.style.backgroundColor = "red";

// parent.insertBefore(box2, box1);


// what if I have to create box class
const main = document.querySelector("main");

const parent = document.createElement("parent");
const box1 = document.createElement("child");
const box2 = document.createElement("child");
const box3 = document.createElement("child");

box1.textContent = "1";
box2.textContent = "2";
box3.textContent = "3";

box1.classList.add("child");
box2.classList.add("child");
box3.classList.add("child");
parent.classList.add("parent");

parent.append(box1, box2, box3);
main.append(parent)

// parent.prepend(box3); // ssbse phle add hoga
// box1.before(box2);
// box1.after(box2);