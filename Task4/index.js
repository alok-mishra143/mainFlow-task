document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("todo-input");
  const addButton = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");

  addButton.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText == "") {
      alert("Please enter a task");
      return;
    }
    if (taskText !== "") {
      addTask(taskText);
      input.value = "";
      input.focus();
    }
  });

  function addTask(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(li);
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
});
