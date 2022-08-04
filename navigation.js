const pageOne = document.querySelector('.book-list');
const pageTwo = document.querySelector('.add-books');
const pageThree = document.querySelector('.contact');

const link1 = document.querySelector('.first');
const link2 = document.querySelector('.second');
const link3 = document.querySelector('.third');

link1.addEventListener('click', () => {
  pageOne.style.display = 'flex';
  pageTwo.style.display = 'none';
  pageThree.style.display = 'none';
});

link2.addEventListener('click', () => {
  pageOne.style.display = 'none';
  pageTwo.style.display = 'flex';
  pageThree.style.display = 'none';
});

link3.addEventListener('click', () => {
  pageOne.style.display = 'none';
  pageTwo.style.display = 'none';
  pageThree.style.display = 'flex';
});
