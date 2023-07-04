'use strict';

let myLibrary = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    pages: '223',
    read: 'Yes',
  },
];

const toggleForm = document.querySelector('.form');
const addButton = document.querySelector('.addButton');
const closeBtn = document.querySelector('.close-btn');
const submitBtn = document.querySelector('.submit');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const bookContainer = document.querySelector('#container');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

const displayBooks = function () {
  bookContainer.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    const p = document.createElement('p');
    const div = document.createElement('div');
    const buttonContainer = document.createElement('div');
    const toggleButton = document.createElement('button');

    const deleteButton = document.createElement('button');

    div.style.border = '1px solid black';
    div.style.padding = '1rem';
    div.style.margin = '.5rem';
    div.style.width = '20rem';
    div.style.height = '7rem';
    toggleButton.innerText = 'Update Read';
    toggleButton.style.color = 'white';
    toggleButton.style.backgroundColor = 'blue';
    toggleButton.addEventListener('click', function () {
      const book = myLibrary[i];
      book.read = book.read === 'Yes' ? 'No' : 'Yes';
      displayBooks();
    });
    deleteButton.innerText = 'Remove Book';
    deleteButton.style.color = 'white';
    deleteButton.style.backgroundColor = 'rgba(253, 29, 29, 1)';
    deleteButton.setAttribute('data-index', i);
    deleteButton.addEventListener('click', function () {
      const bookIndex = parseInt(deleteButton.dataset.index);
      removeBook(bookIndex);
    });

    p.innerHTML = `Title: ${myLibrary[i].title}<br> Author: ${myLibrary[i].author}<br>Pages: ${myLibrary[i].pages}<br>Read: ${myLibrary[i].read}`;

    buttonContainer.appendChild(toggleButton);
    buttonContainer.appendChild(deleteButton);

    div.appendChild(p);
    div.appendChild(buttonContainer);
    bookContainer.appendChild(div);
  }
};
displayBooks();

const addNewBooks = function () {
  const newBook = new Book(title.value, author.value, pages.value, read.value);

  myLibrary.push(newBook);
  displayBooks();
  title.value = '';
  author.value = '';
  pages.value = '';
  read.value = '';
};

addButton.addEventListener('click', function () {
  toggleForm.classList.toggle('hide');
});

closeBtn.addEventListener('click', function () {
  toggleForm.classList.toggle('hide');
});

submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if (
    title.value === '' ||
    author.value === '' ||
    pages.value === '' ||
    read.value === ''
  ) {
    return false;
  } else {
    addNewBooks();
  }
});
