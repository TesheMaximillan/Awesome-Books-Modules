/* eslint-disable max-classes-per-file */
const listItem = document.querySelectorAll('.list-item');
const section = document.querySelectorAll('.section');
const bookListSection = document.querySelector('.book-list');
const main = document.querySelector('.main');
const container = document.querySelector('.container');
const form = document.querySelector('.book-form__form');
const bookLists = document.querySelector('.book-list__lists');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookList {
  constructor() {
    this.storage = localStorage.getItem('bookData');
    this.books = this.storage === null ? [] : JSON.parse(this.storage);
  }

  saveBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    localStorage.setItem('bookData', JSON.stringify(this.books));
  }

  removeBook(index) {
    this.books.splice(index, 1);
    window.localStorage.setItem('bookData', JSON.stringify(this.books));
  }

  displayBook() {
    this.books.forEach((e) => {
      const books = document.createElement('div');
      const bookDetail = document.createElement('p');
      const bookRemove = document.createElement('button');

      books.className = 'books';
      bookDetail.className = 'books__detail';
      bookRemove.className = 'books__remove';

      bookRemove.textContent = 'Remove';
      bookDetail.textContent = `"${e.title}" by ${e.author}`;

      books.append(bookDetail, bookRemove);
      bookLists.appendChild(books);
    });
  }
}

const bookList = new BookList();

function run() {
  // Control Navbar
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].addEventListener('click', () => {
      for (let j = 0; j < section.length; j += 1) {
        if (i === j) {
          section[j].classList.toggle('display');
          listItem[j].firstElementChild.classList.toggle('active');
        } else {
          section[j].classList.remove('display');
          listItem[j].firstElementChild.classList.remove('active');
        }
      }
      if (i === 0) window.location.reload();
    });
  }

  // Add current date
  const currentDate = document.createElement('p');
  currentDate.className = 'date';
  currentDate.textContent = new Date().toDateString();
  container.insertBefore(currentDate, main);

  // Check if there is a book list
  if (!bookList.books.length) {
    bookLists.style.display = 'none';
    bookListSection.lastElementChild.style.display = 'inline-block';
  } else bookList.displayBook();

  // Add Book to Local storage
  form.addEventListener('submit', (event) => {
    const title = form.elements.title.value;
    const author = form.elements.author.value;
    bookList.saveBook(title, author);
    form.elements.title.value = '';
    form.elements.author.value = '';
    event.preventDefault();
  });

  // Remove book from the list
  const remove = document.querySelectorAll('.books__remove');
  for (let i = 0; i < remove.length; i += 1) {
    remove[i].addEventListener('click', () => {
      bookList.removeBook(i);
      window.location.reload();
    });
  }
}

run();
