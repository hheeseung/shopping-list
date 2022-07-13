const items = document.querySelector('.items');
const input = document.querySelector('.list__input');
const listForm = document.querySelector('.list__form');
const removeAll = document.querySelector('.list__remove-all-btn');

function onAdd(e) {
  e.preventDefault();

  const value = input.value;
  if (value === '') {
    input.focus();
    return;
  }
  const item = createItem(value);
  items.appendChild(item);
  input.value = '';
  input.focus();
}

function createItem(value) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const check = document.createElement('input');
  check.setAttribute('type', 'checkbox');
  check.setAttribute('class', 'item__check');
  check.addEventListener('click', () => span.classList.toggle('checked'));

  const span = document.createElement('span');
  span.setAttribute('class', 'item__name');
  span.innerText = value;

  const removeBtn = document.createElement('button');
  removeBtn.setAttribute('class', 'item__remove-btn');
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  removeBtn.addEventListener('click', () => items.removeChild(itemRow));

  itemRow.appendChild(check);
  itemRow.appendChild(span);
  itemRow.appendChild(removeBtn);
  return itemRow;
}

listForm.addEventListener('submit', onAdd);
removeAll.addEventListener('click', () => (items.innerHTML = ''));
