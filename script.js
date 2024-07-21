document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> element
        const listItem = document.createElement('li');
        listItem.classList.add('task-item'); // Add a class to <li> for styling
        listItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); // Add a class to the button for styling

        // Add an event listener to the remove button
        removeButton.addEventListener('click', () => {
            listItem.remove(); // Remove the <li> element from the list
        });

        // Append the remove button to the <li> element
        listItem.appendChild(removeButton);

        // Append the <li> element to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
