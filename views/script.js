const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newTodo = todoInput.value.trim();
  if (!newTodo) return;

  const todoItem = document.createElement('li');
  todoItem.textContent = newTodo;
  todoItem.addEventListener('click', () => {
    todoItem.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(todoItem);
  });

  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);

  todoInput.value = '';
});
