const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const listItems = document.getElementById('listItems');
const clearItems = document.getElementById('clearItems');


addButton.addEventListener('click', () => {
    const todoText = todoInput.value;

    if (todoText === '') return;


    // create a list item
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');


    // create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        listItem.classList.toggle('completed');
    });

    // create a text node
    const textNode = document.createTextNode(todoText);


    // create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    
    deleteButton.addEventListener('click', () => {
        listItems.removeChild(listItem);
    });


    // Append elements to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(textNode);
    listItem.appendChild(deleteButton);

    // Append the list item to the list
    listItems.appendChild(listItem);


    // Clear the input
    todoInput.value = '';
});


clearItems.addEventListener('click', () => {
    listItems.innerHTML = '';
});