document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("todo-input");
  const addButton = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");

  const createTaskElement = (task) => {
    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;
    taskText.className = "task-text";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(li);
    });

    li.appendChild(taskText);
    li.appendChild(deleteButton);
    return li;
  };

  const addTask = (task) => {
    const taskElement = createTaskElement(task);
    todoList.appendChild(taskElement);
  };

  const handleAddButtonClick = () => {
    const taskText = input.value.trim();
    if (!taskText) {
      alert("Please enter a task");
      input.focus();
      return;
    }
    addTask(taskText);
    input.value = "";
    input.focus();
  };

  addButton.addEventListener("click", handleAddButtonClick);
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleAddButtonClick();
    }
  });
});
