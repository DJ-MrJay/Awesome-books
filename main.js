const addButton = document.querySelector('.button');
const author = document.querySelector('.author');
const title = document.querySelector('.title');
const list = document.querySelector('.list');

const collection = [];

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (author.value && title.value) {
    const book = {
      title: title.value,
      author: author.value,
    };
    collection.push(book);
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

    bookDiv.appendChild(paragraph);
    bookDiv.appendChild(removeButton);
    list.appendChild(bookDiv);
  });
};
addingBooks();
