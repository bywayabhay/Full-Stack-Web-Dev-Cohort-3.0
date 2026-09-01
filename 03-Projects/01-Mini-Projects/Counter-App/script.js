const main = document.querySelector("main"); // event delegation idea
const counter = document.querySelector(".counter-circle span");

let cnt = 0;

function updateCounter(){
    // 1-> update the displayed number
    counter.textContent = cnt;
    //2 -> update the color (if +ve -> green else red)
    // first remove the old color of counter
    counter.classList.remove("positive", "negative", "neutral");
    if(cnt == 0)
        counter.classList.add("neutral");
    else if(cnt > 0)
        counter.classList.add("positive");
    else if(cnt < 0)
        counter.classList.add("negative");

}

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    // add button clicked
    cnt += 1;
    updateCounter();
  }
  if (e.target.classList.contains("sub-btn")) {
    //sub btn clicked
    cnt -= 1;
    updateCounter();
    
    counter.textContent = cnt;
  }
  if (e.target.classList.contains("reset-btn")) {
    //reset btn clicked
    cnt = 0;
    updateCounter();
  }
});
