document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    loadTasks();

    // Add task on button click
    addButton.addEventListener('click', () => {
        addTask(taskInput.value.trim());
    });

    // Add task on Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim());
        }
    });

    function addTask(taskText, save = true) {
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new task element
        const li = document.createElement('li');
        li.classList.add("task-item")
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.addEventListener('click', () => {
            removeTask(taskText);
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Save to Local Storage if required
        if (save) {
            const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        // Clear the input field
        taskInput.value = '';
    }

    function removeTask(taskText) {
        // Remove task from the DOM
        const tasks = Array.from(taskList.children);
        tasks.forEach(task => {
            if (task.textContent.includes(taskText)) {
                taskList.removeChild(task);
            }
        });

        // Update Local Storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' prevents saving duplicates
    }
});
