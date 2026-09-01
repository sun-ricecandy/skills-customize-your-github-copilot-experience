const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

const tasks = [
  { id: 1, text: 'Review Python basics', completed: false },
  { id: 2, text: 'Write a short practice program', completed: true },
];

function renderTasks() {
  todoList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    const text = document.createElement('span');
    text.textContent = task.text;

    if (task.completed) {
      text.classList.add('completed');
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
      // TODO: Remove the selected task
    });

    text.addEventListener('click', () => {
      // TODO: Toggle the task's completed state
    });

    listItem.appendChild(text);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  });
}

function addTask(taskText) {
  if (!taskText.trim()) {
    return;
  }

  // TODO: Add the new task object to the tasks array
  // TODO: Clear the input field
  // TODO: Call renderTasks()
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(todoInput.value);
});

renderTasks();
