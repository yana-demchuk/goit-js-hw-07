// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


for (let i = 0; i < ingredients.length; i += 1) {
  const liRef = document.createElement('li');
  liRef.textContent = `${ingredients[i]}`;
  const listRef = document.querySelector('#ingredients');
  listRef.appendChild(liRef);
  console.log(liRef);
}



// const listRef = document.querySelector('#ingredients');
// const liRef = document.createElement('li');
// listRef.appendChild(liRef);

// function getListMarkup(arr) {
//   liRef.textContent = `${arr}`;
//   return liRef;
// }

// getListMarkup(ingredients);

// console.log(listRef);




// function getListMarkup(arr) {
//   const items = `${arr.map(ing => `<li>${ing}</li>`).join('')}`; 
//   return items;
// }

// listRef.append(getListMarkup(ingredients));

// console.log(listRef);




// ingredients.forEach(item => {
//   const itemIngredients = document.createElement('li');
//   itemIngredients.textContent = item;
//   const listIngredients = document.querySelector('#ingredients');
//   listIngredients.append(itemIngredients);
//   console.log(itemIngredients);
// })
