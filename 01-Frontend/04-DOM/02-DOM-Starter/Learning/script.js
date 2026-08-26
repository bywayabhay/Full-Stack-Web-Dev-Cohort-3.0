const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");

let flag = true;

//USING SELECTORS

// document.addEventListener("click", () => {
//   // on clicking button what you want to do
//   if (flag) {
//     bulb.style.backgroundColor = "yellow";
//     btn.innerHTML = "OFF";
//     flag = false;
//   } else {
//     bulb.style.backgroundColor = "transparent";
//     btn.innerHTML = "ON";
//     flag = true;
//   }
// });

// USING classlist
// Add Classes
// Remove Classes
// Toggle Classes
// Check Classes

btn.addEventListener("click", () => {
  if (bulb.classList.toggle("lightUp")) {
    btn.innerHTML = "ON";
  } else {
    btn.innerHTML = "OFF";
  }

  // bulb.classList.toggle("lightUp") -> returns a true / false value
  // console.log(bulb.classList.toggle("lightUp"));
});
