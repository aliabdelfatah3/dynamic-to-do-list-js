document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please Enter A Task");
      return;
    }

    const listItem = document.createElement("li");
    listItem.classList.add('task-item');
    listItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    removeButton.addEventListener("click", () => {
      taskList.remove(removeButton);
    });

    listItem.appendchild(removeButton);

    taskList.appendchild(listItem);

    taskInput.value = "";
  }
  addButton.addEventListener("click", addTask);
  
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
