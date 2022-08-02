const addButton = document.querySelector('.button');
const form = document.querySelector('.input-form');
const author = document.querySelector('.author');
const title = document.querySelector('.title');
const list = document.querySelector('.list');
const collection = [] || JSON.parse(localStorage.getItem('form'));

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (author.value && title.value) {
    const book = {
      title: title.value,
      author: author.value,
      id: Math.round(Date.now()),
    };
    collection.push(book);
    localStorage.setItem('form', JSON.stringify(collection));
    addingBooks();
    author.value = '';
    title.value = '';
  }
});

const addingBooks = () => {
  list.innerHTML = '';
  collection.forEach((item) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-div');
    const paragraph = document.createElement('p');
    paragraph.classList.add('p1');
    paragraph.textContent = `${item.title} written by ${item.author}`;
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('id', item.id);

    bookDiv.appendChild(paragraph);
    bookDiv.appendChild(removeButton);
    list.appendChild(bookDiv);
  });
};

addingBooks();

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const targetid = parseInt(e.target.getAttribute('id'), 10);
    removeBook(targetid);
  }
});

function removeBook(targetId) {
  const newArr = collection.filter((item) => item.id !== targetId);
  collection.length = 0;
  collection.push(...newArr);
  localStorage.setItem('form', JSON.stringify(collection));
  addingBooks();
}
