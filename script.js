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

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const displayBooks = function () {
  document.body.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    const p = document.createElement('p');
    const div = document.createElement('div');

    div.style.border = '1px solid black';
    div.style.width = '20rem';
    div.style.height = '5rem';

    p.innerHTML = `Title: ${myLibrary[i].title}<br> Author: ${myLibrary[i].author}<br>Pages: ${myLibrary[i].pages}<br>Read: ${myLibrary[i].read}`;

    div.appendChild(p);
    document.appendChild(div);
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
