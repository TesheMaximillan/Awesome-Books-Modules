const isAbook = (bookList, bookListSection) => {
  // const bookLists = document.querySelector('.book-list__lists');
  const bookLists = document.createElement('div');
  bookLists.className = 'book-list__lists';
  if (!bookList.books.length) {
    bookLists.style.display = 'none';
    bookListSection.lastElementChild.style.display = 'flex';
  } else bookList.displayBook(bookLists);
  bookListSection.insertBefore(bookLists, bookListSection.lastElementChild);
};

const addBook = (form, bookList) => {
  form.addEventListener('submit', (event) => {
    const title = form.elements.title.value;
    const author = form.elements.author.value;
    bookList.saveBook(title, author);
    form.elements.title.value = '';
    form.elements.author.value = '';
    event.preventDefault();
  });
};

const removeList = (remove, bookList) => {
  for (let i = 0; i < remove.length; i += 1) {
    remove[i].addEventListener('click', () => {
      bookList.removeBook(i);
      window.location.reload();
    });
  }
};

export { isAbook, addBook, removeList };
