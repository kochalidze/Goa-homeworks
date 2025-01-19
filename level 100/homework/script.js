const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

window.addEventListener('load', loadTask);

addTaskBtn.addEventListener('click', addTask);

clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    loadTask();
})

function saveTasks() {
    let tasks = [];
    for (let i = 0; i < document.querySelectorAll('li').length; i++) {
        tasks.push(document.querySelectorAll('li')[i].textContent)
    }
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function addTask(task) {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    if (task) {
        li.textContent = task;
    } else {
        li.textContent = taskInput.value;
    }
    btn.textContent = 'Remove';
    li.appendChild(btn);
    taskList.appendChild(li);
    saveTasks();
}

function loadTask() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i < tasks.length; i++) {
        addTask(tasks[i]);
    }
};