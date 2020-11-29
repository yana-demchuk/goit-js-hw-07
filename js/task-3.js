// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.
// <ul id="gallery"></ul>

// Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


for (let i = 0; i < images.length; i += 1) {
  const liRef = document.createElement('li');
  const imgRef = document.createElement('img');
  liRef.appendChild(imgRef);
  const listRef = document.querySelector('#gallery');
  
  imgRef.src = images[i].url;
  imgRef.alt = images[i].alt;

  listRef.style.display = 'flex';
  listRef.style.justifyContent = 'space-between';
  imgRef.style.height = '200px';
  liRef.style.marginRight = '20px';
  liRef.style.listStyle = 'none';

  listRef.insertAdjacentElement("beforeend", liRef);

  console.log(liRef);
}



// images.forEach(image => {
//     const itemList = document.createElement('li');
//     console.log(itemList);
//     const itemImage = document.createElement('img');
//     itemList.appendChild(itemImage);
//     itemImage.src = image.url;
//     itemImage.alt = image.alt;
//     const listImages = document.querySelector('#gallery');
//     listImages.append(itemList);

//     listImages.style.display = 'flex';
//     listImages.style.justifyContent = 'space-between';
//     itemImage.style.height = '200px';
//     itemList.style.marginRight = '20px';
//     itemList.style.listStyle = 'none';
// });

