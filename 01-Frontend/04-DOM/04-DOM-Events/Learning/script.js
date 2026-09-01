// form refreshes the page on clicking the submit button

// so how to avoid it 
const form = document.querySelector("form");
// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     // console.log(event);
    
// })

// submit -> value taken in event Listener is only avaialable in form 
//how to save inputs fronm user name and email
const user = document.querySelector(".name");
const email = document.querySelector(".email");
// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     // console.log(user.value);
//     // console.log(email.value);

//     // this is applied when after submitting field is empty
//     // user.value = ""
//     // email.value = ""

//     // a better way to do this
//     form.reset();
// })


// now I want that when user submit anythiung his details as a box model appear
const users = document.querySelector(".users");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let name = user.value;
    let gmail = email.value;

    if(name.trim() === "" || gmail.trim() === "") return;
    users.innerHTML += `<div class="user-card">
          <div class="img-box">
            <img
              src="https://cdn.pixabay.com/photo/2026/07/14/04/40/04-40-14-48_1280.jpg"
              alt="image here"
            />
          </div>
          <div class="text">
            <h3>Name: ${name}</h3>
            <p>Email: ${gmail}</p>
          </div>
        </div>`
    form.reset();
})


