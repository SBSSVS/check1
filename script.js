// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteTask">Delete</button>
        `;
        taskList.appendChild(listItem);

        listItem.querySelector('.deleteTask').addEventListener('click', () => {
            listItem.remove();
        });
    }

    function fetchTasks() {
        fetch('/api/tasks')
            .then((response) => response.json())
            .then((data) => {
                data.forEach((taskText) => {
                    addTask(taskText);
                });
            })
            .catch((error) => console.error('Error:', error));
    }

    fetchTasks();
});
