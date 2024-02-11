// Додавання бібліотеки flatpickr
// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const inputDataTime = document.querySelector('#datetime-picker');

inputDataTime.addEventListener('input', selectionDate);

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

function selectionDate(event) {
  // Ініціалізація бібліотеки flatpickr на елементі input
  flatpickr('#datetime-picker', options);
  console.log(options.defaultDate);
}
