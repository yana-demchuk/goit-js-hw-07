// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputRef = document.querySelector('#validation-input');
console.log(inputRef.dataset.length);

inputRef.addEventListener('change', event => {
    console.log(event.target.value.length);
    if (event.target.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
        console.log(inputRef)
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
        console.log(inputRef)
    }
})

inputRef.addEventListener('focus', () => {
    inputRef.classList.remove('valid');
    console.log(inputRef)
})