// const textArea = document.querySelector(".text-area");
// const charCount = document.querySelector("#char-count");
// const remainingCount = document.querySelector("#remaining-count");
// const wordCount = document.querySelector("#word-count");
// const clearBtn = document.querySelector(".clear-btn");

// const MAX_LENGTH = 100;
// textArea.addEventListener("input", ()=>{
//     const currLength = textArea.value.length;

//     charCount.textContent = currLength;
//     if(currLength <= MAX_LENGTH)
//     remainingCount.textContent = MAX_LENGTH - currLength;
        
//     // if user enters -> "hello" : textArea.value -> "hello" and textArea.value.length
//     // gives length -> 5
//     const data = textArea.value;
//     const words = data === "" ? [].length: data.split(/\s+/).length;

//     wordCount.textContent = words;
// })

// clearBtn.addEventListener("click", ()=>{
//     textArea.value = "";
//     charCount.textContent = 0;
//     remainingCount.textContent = MAX_LENGTH;
//     wordCount.textContent = 0;
// })

// A better way to use function
const textArea = document.querySelector(".text-area");
const charCount = document.querySelector("#char-count");
const remainingCount = document.querySelector("#remaining-count");
const wordCount = document.querySelector("#word-count");
const clearBtn = document.querySelector(".clear-btn");

const MAX_LENGTH = 100;

function updateCounters() {
    const text = textArea.value;
    const currLength = text.length;

    const words = text.trim() === "" ? [] : text.trim().split(/\s+/);

    charCount.textContent = currLength;
    remainingCount.textContent = MAX_LENGTH - currLength;
    wordCount.textContent = words.length;
}

textArea.addEventListener("input", updateCounters);

clearBtn.addEventListener("click", () => {
    textArea.value = "";
    updateCounters();
});