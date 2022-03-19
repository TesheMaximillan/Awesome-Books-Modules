/* eslint-disable max-classes-per-file */
import BookList from "./modules/BookList.js";
import navController from "./modules/navController.js";
import currentDate from "./modules/date.js";
import { isAbook, addBook, removeList } from "./modules/bookController.js";

const listItem = document.querySelectorAll('.list-item');
const section = document.querySelectorAll('.section');
const bookListSection = document.querySelector('.book-list');
const main = document.querySelector('.main');
const container = document.querySelector('.container');
const form = document.querySelector('.book-form__form');
const bookLists = document.querySelector('.book-list__lists');
const remove = document.querySelectorAll('.books__remove');

const bookList = new BookList();

function run() {
  // Control Navbar

  // Add current date

  // Check if there is a book list

  // Add Book to Local storage

  // Remove book from the list
}

run();
