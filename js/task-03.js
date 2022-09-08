const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryItemTemplate = (url, alt) => {
//   return `
//     <li class="gallery__item">
//       <img class="gallery__img" src="${url}" alt="${alt}" width="350">
//     </li>
//   `;
// };

// const imagesMarkup = images.map(({ url, alt }) => galleryItemTemplate(url, alt)).join('');

// const galleryRef = document.querySelector('ul.gallery');

// galleryRef.insertAdjacentHTML('beforeend', imagesMarkup);

// ------------

// const galleryRef = document.querySelector('.gallery');

// const makeImageItem = ({ url, alt }) => {
//   return `<li class = "gallery__item"><img src="${url}" alt="${alt}" class = "gallery__img"></li>`;
// };

// const galleryMarkup = images.map(makeImageItem);

// galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup);

// -----------

const galleryEl = document.querySelector('.gallery');

const createGallery = images.map(({ url, alt }) => {
  const liEl = document.createElement('li');
  liEl.insertAdjacentHTML('afterbegin', `<img src='${url}' alt='${alt}' width="350">`);

  return liEl;
});

galleryEl.append(...createGallery);
