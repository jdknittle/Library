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
const deleteBtn = document.querySelector('.removeBtn');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
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
    const button = document.createElement('button');
    div.style.border = '1px solid black';
    div.style.padding = '1rem';
    div.style.margin = '.5rem';
    div.style.width = '20rem';
    div.style.height = '7rem';
    button.innerText = 'Remove Book';
    button.style.color = 'white';
    button.style.backgroundColor = 'rgba(253, 29, 29, 1)';
    button.setAttribute('data-index', i);
    button.addEventListener('click', function () {
      const bookIndex = parseInt(button.dataset.index);
      removeBook(bookIndex);
    });

    p.innerHTML = `Title: ${myLibrary[i].title}<br> Author: ${myLibrary[i].author}<br>Pages: ${myLibrary[i].pages}<br>Read: ${myLibrary[i].read}`;

    div.appendChild(p);
    div.appendChild(button);
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

//add a button on each book display. when clicked it will remove the appended book from the display and array. Possible solution is using a data-attribute related to the index number in the array
