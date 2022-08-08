const collection = document.querySelector('.collection');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addButton = document.querySelector('.add-button');
let id = 1 || JSON.parse(localStorage.getItem('maxID'));

class BookObject {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static displayBooks = () => {
    collection.innerHTML = '';
    id = JSON.parse(localStorage.getItem('maxID'));
    const keys = Object.keys(localStorage);
    keys.forEach((element) => {
      if (element === 'maxID') return;
      const retrievedBook = JSON.parse(localStorage.getItem(element));
      this.createElements(retrievedBook.title, retrievedBook.author, element);
    });
  }

  static addBook = (title, author, id) => {
    this.createElements(title, author, id);
  }

  static createElements = (title, author, id) => {
    const removeButton = [];
    const div = [];
    div[id] = document.createElement('div');
    div[id].setAttribute('id', id);
    const pText = document.createElement('p');
    pText.textContent = `"${title}" by ${author}`;

    removeButton[id] = document.createElement('button');
    removeButton[id].setAttribute('id', id);
    removeButton[id].textContent = 'Remove';
    removeButton[id].addEventListener('click', (e) => {
      const key = e.target.id;
      div[e.target.id].remove();
      localStorage.removeItem(key);
      if (collection.innerHTML === '') {
        collection.style.border = 'none';
      }
    });
    div[id].append(pText, removeButton[id]);
    collection.appendChild(div[id]);
    collection.style.border = '2px solid black';
  }

  static storeLS = (book, id) => {
    localStorage.setItem(id, JSON.stringify(book));
  }

  static clearInputs = () => {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }
}

// Add Button
addButton.addEventListener('click', () => {
  if (title.value === '' || author.value === '') {
    alert('Please fill in both fields'); // eslint-disable-line no-alert
  } else {
    BookObject.addBook(title.value, author.value, id);
    const book = new BookObject(title.value, author.value, id);
    BookObject.storeLS(book, id);
    id += 1;
    localStorage.setItem('maxID', id);
    BookObject.clearInputs();
  }
});

window.onload = () => {
  BookObject.displayBooks();
  if (collection.innerHTML === '') {
    collection.style.border = 'none';
  }
};
