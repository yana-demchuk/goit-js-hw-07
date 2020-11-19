// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

console.dir(inputRef);
console.log(textRef);

inputRef.addEventListener('input', event => {
  textRef.style.fontSize = `${event.target.valueAsNumber}px`;
  console.log(textRef.style.fontSize);
})