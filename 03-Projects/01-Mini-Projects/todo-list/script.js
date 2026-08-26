const ipt = document.querySelector("input");
const btn = document.querySelector(".add-task-btn");

const todoList = document.querySelector(".task-list");

btn.addEventListener("click", () => {
  const task = ipt.value;

  if (task.trim() === "") return;
  //create task container
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  // create checkbox
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  //create task text
  const taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.textContent = task;

  // Create Edit button
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.textContent = "Edit";

  // Create Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete";

  // add everything to taskitem
  taskItem.append(checkBox, taskText, editBtn, deleteBtn);

  //add task to list
  todoList.append(taskItem);

  //task marked as DONE
  checkBox.addEventListener("change", () => {
    taskText.style.textDecoration = checkBox.checked ? "line-through" : "none";
  });
  //edit task
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit your task:", taskText.textContent);

    if (newTask !== null && newTask.trim() !== "") {
      taskText.textContent = newTask;
    }
  });
  //delete task
  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
  });
  ipt.value = "";
});
