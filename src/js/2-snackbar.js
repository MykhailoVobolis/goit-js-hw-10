// Додавання бібліотеки iziToast
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const notificationForm = document.querySelector('form');
const inputNumber = document.querySelector('input[type="number"]');
const radioBtn = notificationForm.elements.state;

notificationForm.addEventListener('submit', onClick);

function onClick(event) {
  event.preventDefault();
  const delay = inputNumber.value;
  const selectionResult = radioBtn.value;

  function selectedRadioButton(delay) {
    // Створення та повернення промісу
    return new Promise((resolve, reject) => {
      // Asynchronous operation
      setTimeout(() => {
        if (selectionResult === 'fulfilled') {
          resolve(`${delay}`);
        } else {
          reject(`${delay}`);
        }
      }, delay);
    });
  }

  // Виклик функції промісу
  selectedRadioButton(delay)
    .then(value => {
      // Ініціаналізація бібліотеки iziToast
      iziToast.success({
        icon: 'null',
        messageColor: '#ffffff',
        backgroundColor: '#59A10D',
        targetFirst: false,
        progressBar: false,
        position: 'topRight',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(error => {
      // Ініціаналізація бібліотеки iziToast
      iziToast.error({
        icon: 'null',
        messageColor: '#ffffff',
        backgroundColor: '#ef4040',
        targetFirst: false,
        progressBar: false,
        position: 'topRight',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
}
