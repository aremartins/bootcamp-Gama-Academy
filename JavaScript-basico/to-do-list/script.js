const adicionar = document.querySelector('#add');
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]');
const listContainer = document.querySelector('[data-lists]');

let lists = [];

newListForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const listName = newListInput.value;
  if (listName === null || listName === ''){
    return
  } 
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  render()
})

function render() {
  clearElement(listContainer);
  lists.forEach(function(list) {
    const item = document.createElement('li');
    item.classList.add('item');
    item.innerText = list.name;
    listContainer.appendChild(item);
  })
}

function createList(name) {
  return {id: Date.now().toString(), name:name }
}

function clearElement(element){
  while(element.firstChild) {
    element.removeChild(element.firstChild)
  }
}




// adicionar.addEventListener('click', function(event) {
//   event.preventDefault();
//   console.log(`${input.value}`)
//   listar.innerHTML = `${input.value}`
// })
