const button = document.querySelector('button');
const list = document.querySelector('ul');
const input = document.getElementById('goal');

const addNewListItem = () => {
   const li = document.createElement('li');
   li.textContent = input.value;
   list.appendChild(li);
   input.value = '';
};

button.addEventListener('click', addNewListItem);
