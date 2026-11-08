const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const list = document.getElementById('tasks__list');

function createTaskElement(text) {
  const task = document.createElement('div');
  task.className = 'task';

  const title = document.createElement('div');
  title.className = 'task__title';
  title.textContent = text;

  const removeBtn = document.createElement('a');
  removeBtn.href = '#';
  removeBtn.className = 'task__remove';
  removeBtn.innerHTML = '&times;';

  removeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    task.remove();
    saveTasks();
  });

  task.appendChild(title);
  task.appendChild(removeBtn);
  list.appendChild(task);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  
  if (text) {
    createTaskElement(text);
    input.value = '';
    saveTasks();
  }
});

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('.task__title').forEach((el) => {
    tasks.push(el.textContent);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
    tasks.forEach((text) => createTaskElement(text));
  }
}

loadTasks();