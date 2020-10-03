const textInput = document.querySelector('#task-content');
const creator = document.querySelector('#create-task');
const list = document.querySelector('#todo-list');
const clear = document.querySelector('#clear-all');
const rmSelecteds = document.querySelector('#remove-selected');
const saveList = document.querySelector('#save-tasks');
const moveUp = document.querySelector('#move-up');
const moveDown = document.querySelector('#move-down');

creator.addEventListener('click', () => {
  const node = document.createElement('li');
  const textNode = document.createTextNode(textInput.value);
  node.appendChild(textNode);
  list.appendChild(node);
  textInput.value = '';
});

clear.addEventListener('click', () => {
  list.innerHTML = '';
});

list.addEventListener('click', (event) => {
  const selected = document.querySelector('.selected');
  const li = event.target;
  if (selected != null) {
    selected.classList.remove('selected');
    li.classList.toggle('selected');
  } else {
    li.classList.toggle('selected');
  }
});

rmSelecteds.addEventListener('click', () => {
  const elements = document.querySelectorAll('li');
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].classList.contains('selected')) {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }
});

moveUp.addEventListener('click', () => {
  const elements = document.querySelectorAll('li');
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].classList.contains('selected')) {
      if (i !== 0) {
        list.insertBefore(elements[i], elements[i - 1]);
      }
    }
  }
});

moveDown.addEventListener('click', () => {
  const elements = document.querySelectorAll('li');
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].classList.contains('selected')) {
      if (i !== elements.length - 1) {
        list.insertBefore(elements[i + 1], elements[i]);
      }
    }
  }
});

saveList.addEventListener('click', () => {
  const elements = list.innerHTML;
  localStorage.setItem('list', elements);
});

window.addEventListener('load', () => {
  const elements = localStorage.getItem('list');
  list.innerHTML = elements;
});
