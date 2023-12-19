function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let newTask = document.createElement("div");
    newTask.className="p";
    newTask.textContent = taskInput.value;
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove";
    removeButton.onclick = function() {
        taskList.removeChild(newTask);
    };
    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);
    taskInput.value = "";
}