const todolist = [
	{
	  name: 'Make Dinner',
	  dueDate: '2023-10-01',
	},
	{
	  name: 'Do Laundry',
	  dueDate: '2023-10-02',
	}
  ];
  
  renderTodoList();
  
  function renderTodoList() {
	let todoListHTML = '';
  
	// Loop through the todolist array
	for (let i = 0; i < todolist.length; i++) {
	  const todoObject = todolist[i];
	  const { name, dueDate } = todoObject;
	  const html = `
		<div>${name}</div>
		<div>${dueDate}</div>
		<button onclick="todolist.splice(${i}, 1); renderTodoList()" class="delete-todo-button">Delete</button>	
	  `;
	  todoListHTML += html;
	}
  
	console.log(todoListHTML);
	document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  }
  
  function addTodo() {
	const inputElement = document.querySelector(".js-name-input");
	const name = inputElement.value;
	const dateInputElement = document.querySelector(".js-date-input");
	const dueDate = dateInputElement.value;
  
	// Add the new todo item to the list
	todolist.push({ name: name, dueDate: dueDate });
	console.log(todolist);
  
	// Clear the input field
	inputElement.value = '';
  
	renderTodoList();
  }
  