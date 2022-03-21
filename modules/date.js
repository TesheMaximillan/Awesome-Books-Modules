import { DateTime } from './luxon/src/luxon.js';

const currentDate = (container, main) => {
  const currentDate = document.createElement('p');
  currentDate.className = 'date';
  currentDate.textContent = DateTime.now().toFormat('MMMM dd, yyyy');
  container.insertBefore(currentDate, main);
};

export default currentDate;