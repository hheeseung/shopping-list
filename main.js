const input = document.querySelector('.input');
const button = document.querySelector('.button');
const shoppingList = document.querySelector('.shopping-list');
const removeBtn = document.querySelector('.remove-button');

const onClickEvent = (e) => {
  e.preventDefault();

  const listContainer = document.createElement('div');
  listContainer.setAttribute('class', 'list-container');

  const span = document.createElement('span');

  const check = document.createElement('button');
  check.setAttribute('class', 'check');
  check.innerText = '✔';
  check.addEventListener('click', () => {
    span.style.textDecoration = 'line-through';
    listContainer.style.color = '#f5a276';
  });

  const erase = document.createElement('button');
  erase.setAttribute('class', 'erase');
  erase.innerHTML = '<i class="fa-solid fa-x"></i>';
  erase.addEventListener('click', () => {
    listContainer.remove();
  });

  const value = input.value;
  shoppingList.appendChild(listContainer);
  listContainer.appendChild(check);
  listContainer.appendChild(span);
  span.innerText = value;
  listContainer.appendChild(erase);
  input.value = '';

  if (value === '') {
    alert('살 것을 입력해주세요');
    shoppingList.removeChild(listContainer);
  }
};

button.addEventListener('click', onClickEvent);
removeBtn.addEventListener('click', () => {
  shoppingList.innerHTML = '';
});
