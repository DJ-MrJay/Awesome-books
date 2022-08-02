class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }
}
class Collection {
  constructor() {
    this.data = [];
  }
  addBook(book) {
    this.data.push(book);
    localStorage.setItem('collection', JSON.stringify(this.data));
    addToDisplay(book);
  }
  removeBook(id) {
    const book = document.getElementById(id);
    book.remove();
    this.data = this.data.filter((bookObj) => bookObj.id !== id);
    localStorage.setItem('collection', JSON.stringify(this.data));
  }
}
const collection = new Collection();
function getInput() {
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  const book = new Book(title.value, author.value);
  title.value = '';
  author.value = '';
  return book;
}
function addToDisplay(bookObject) {
  const list = document.querySelector('.list');
  const book = document.createElement('p');
  book.classList.add('book');
  book.setAttribute('id', bookObject.id);
  book.innerHTML = `${bookObject.title}</span> by ${bookObject.author}`;
  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove';
  removeButton.addEventListener('click', () =>
    collection.removeBook(bookObject.id)
  );
  book.appendChild(removeButton);
  list.appendChild(book);
}
// Add Button
const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', () => {
  const book = getInput();
  collection.addBook(book);
});
