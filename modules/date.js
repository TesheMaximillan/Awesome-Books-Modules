export default function currentDate(container, main) {
  const currentDate = document.createElement('p');
  currentDate.className = 'date';
  currentDate.textContent = new Date().toDateString();
  container.insertBefore(currentDate, main);
}