function deleteTask(deleteBtn) {
  const taskCard = deleteBtn.parentElement.parentElement;

  taskCard.remove();
}

function editTask(taskCard) {
  const span = taskCard.querySelector("span");

  const newTask = prompt("Edit your task:", span.textContent);

  if (newTask === null) return;

  const trimmedTask = newTask.trim();

  if (trimmedTask === "") return;

  span.textContent = trimmedTask;
}

function createTodo(taskText) {
  const taskList = document.querySelector(".task-list");

  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");
  // taskCard ─────────► <div>
  //                   DOM Element object

  const completeCheckBox = document.createElement("input");
  completeCheckBox.classList.add("complete-check");
  completeCheckBox.type = "checkbox";

  // completeCheckBox ─────────► <input>
  //                          DOM Element object

  const btns = document.createElement("div");
  btns.classList.add("btns");

  const span = document.createElement("span");
  span.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn", "btns-btn");
  editBtn.textContent = "Edit";

  // edit a task
  editBtn.addEventListener("click", () => {
    const taskCard = editBtn.closest(".task-card");

    editTask(taskCard);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn", "btns-btn");
  deleteBtn.textContent = "Delete";

  //delete task
  deleteBtn.addEventListener("click", () => {
    deleteTask(deleteBtn);
  });

  btns.append(editBtn, deleteBtn);
  taskCard.append(completeCheckBox, span, btns);
  taskList.append(taskCard);
}

const taskInput = document.querySelector("#task-area");
const addBtn = document.querySelector(".add-btn");
const clearBtn = document.querySelector(".clear-btn");
const taskCard = document.querySelector(".task-card");

//add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;
  const tasks = document.querySelectorAll(".task-card span");
  for (const task of tasks) {
    if (task.textContent === taskText) {
      alert("This task already exists!");
      return;
    }
  }

  createTodo(taskText);
});
// register via enter button too
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

// clear all task
clearBtn.addEventListener("click", () => {
  const taskList = document.querySelector(".task-list");
  taskList.replaceChildren();
});
