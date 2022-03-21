import Book from './Book.js';

export default class BookList {
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

  displayBook(bookLists) {
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
