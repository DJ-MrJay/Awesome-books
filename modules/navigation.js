const listPage = document.querySelector('.book-list');
const addBooksPage = document.querySelector('.add-books');
const contactPage = document.querySelector('.contact');

const listLink = document.querySelector('.list-page');
const addBooksLink = document.querySelector('.add-page');
const contactLink = document.querySelector('.contact-page');

listLink.addEventListener('click', () => {
  listPage.style.display = 'flex';
  addBooksPage.style.display = 'none';
  contactPage.style.display = 'none';
});

addBooksLink.addEventListener('click', () => {
  listPage.style.display = 'none';
  addBooksPage.style.display = 'flex';
  contactPage.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  listPage.style.display = 'none';
  addBooksPage.style.display = 'none';
  contactPage.style.display = 'flex';
});
