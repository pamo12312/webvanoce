function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let newTask = document.createElement("div");
    newTask.className = "task";
    let taskText = document.createElement("input");
    taskText.type = "text";
    taskText.value = taskInput.value;
    taskText.disabled = true;
    newTask.appendChild(taskText);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";
    editButton.onclick = function () {
        taskText.disabled = !taskText.disabled;
    };
    newTask.appendChild(editButton);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove";
    removeButton.onclick = function () {
        taskList.removeChild(newTask);
    };
    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);
    taskInput.value = "";
}
