export default function navController(section, listItem, bookList, tempList) {
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
      if (i === 0 && bookList.books.length > tempList) window.location.reload();
    });
  }
}
