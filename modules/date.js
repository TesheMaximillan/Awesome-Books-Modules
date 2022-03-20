import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default function currentDate(container, main) {
  const currentDate = document.createElement('p');
  currentDate.className = 'date';
  currentDate.textContent = DateTime.now().toFormat('MMMM dd, yyyy');
  container.insertBefore(currentDate, main);
}