const isAbook = (bookList, bookLists, bookListSection) => {
  if (!bookList.books.length) {
    bookLists.style.display = 'none';
    bookListSection.lastElementChild.style.display = 'inline-block';
  } else bookList.displayBook(bookLists);
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
