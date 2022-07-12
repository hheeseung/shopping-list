const listForm = document.querySelector('.list-form');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const shoppingList = document.querySelector('.shopping-list');
const removeAll = document.querySelector('.removeAll');

const onSubmit = (e) => {
  e.preventDefault();

  const listContainer = document.createElement('li');
  listContainer.setAttribute('class', 'list-container');

  const span = document.createElement('span');

  const check = document.createElement('button');
  check.setAttribute('class', 'check');
  check.innerHTML = '<i class="fa-solid fa-check"></i>';
  check.addEventListener('click', () => {
    span.style.textDecoration = 'line-through';
    listContainer.style.color = '#f5a276';
  });

  const remove = document.createElement('remove');
  remove.setAttribute('class', 'remove');
  remove.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  remove.addEventListener('click', () => {
    listContainer.remove();
  });

  const value = input.value;
  shoppingList.appendChild(listContainer);
  listContainer.appendChild(check);
  listContainer.appendChild(span);
  span.innerText = value;
  listContainer.appendChild(remove);
  input.value = '';

  if (value === '') {
    alert('살 것을 입력해주세요');
    shoppingList.removeChild(listContainer);
  }
};

listForm.addEventListener('submit', onSubmit);
removeAll.addEventListener('click', () => {
  shoppingList.innerHTML = '';
});
