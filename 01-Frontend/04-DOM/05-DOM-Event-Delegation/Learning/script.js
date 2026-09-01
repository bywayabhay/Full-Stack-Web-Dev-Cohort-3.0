// const one = document.querySelector("#one");
// const main = document.querySelector("main");
// one.addEventListener('click', (events)=>{
//     console.log(events.target);
// })

// main.addEventListener('click', (events)=>{
//     console.log(events.target);
// })

// setInterval(()=>{
//     console.log('Hello');

// }, 1000)

// setTimeout(()=>{
// console.log("ek baar chlega");

// }, 100)

// let random = Math.floor(Math.random()* 10);
// console.log(random);

const main = document.querySelector("main");
const btn = document.querySelector(".start-btn");
// const box = document.querySelector(".box");
const timer = document.querySelector("#timer");
const overLaygameOver = document.querySelector("#overlay");
const box = document.createElement("div");

const scoreSelect = document.querySelector("#score");
box.classList.add("box");
let time = 0;
let interval;
let score = 0;

const randomColor = ()=>{
    let r =  Math.floor(Math.random() * 256);
    let g =  Math.floor(Math.random() * 256);
    let b =  Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}

let boxChanging = () => {
  main.append(box);
  box.style.backgroundColor = randomColor()

  let mainH = main.clientHeight - box.offsetHeight;
  let mainW = main.clientWidth - box.offsetWidth;
  box.style.top = Math.floor(Math.random() * mainH) + "px";
  box.style.left = Math.floor(Math.random() * mainW) + "px";
  time += 1;
  timer.innerHTML = time;
};


btn.addEventListener("click", () => {
  boxChanging();
  clearInterval(interval);
  //jb button pr click hoga tb timer start hoga
  interval = setInterval(() => {
    boxChanging();
  }, 1000);

  setTimeout(() => {
    overLaygameOver.style.display = "flex";
    clearInterval(interval);
  }, 9000);
});
box.addEventListener('click', ()=>{
  score += 1;
  scoreSelect.textContent = score;
})