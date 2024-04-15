const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

// Варіант 1

const galleryMarkup = images
  .map(image => {
    return `<li><img src=${image.url} alt=${image.alt}></li>`;
  })
  .join(' ');

const galleryList = document.querySelector('.gallery');
console.log('galleryList: ', galleryList);
galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);

// STYLES
galleryList.style.display = 'flex';
galleryList.style.flexWrap = 'wrap';

const imgElements = document.querySelectorAll('img');
imgElements.forEach(img => {
  img.setAttribute('class', 'img-styles');
  img.style.width = '360px';
  img.style.height = '300px';
  img.style.objectFit = 'cover';
});

const liElements = document.querySelectorAll('li');
liElements.forEach(item => {
  item.style.listStyleType = 'none';
  item.style.marginLeft = '24px';
  item.style.marginBottom = '48px';
});

// Варіант 2

// const galleryList = document.querySelector('.gallery');
// galleryList.style.display = 'flex';
// galleryList.style.flexWrap = 'wrap';

// function createGalleryItem(image) {
//   const liElement = document.createElement('li');
//   liElement.style.listStyleType = 'none';
//   liElement.style.marginLeft = '24px';
//   liElement.style.marginBottom = '48px';

//   const imgElement = document.createElement('img');
//   imgElement.src = image.url;
//   imgElement.alt = image.alt;
//   imgElement.style.width = '360px';
//   imgElement.style.height = '300px';
//   imgElement.style.objectFit = 'cover';

//   liElement.appendChild(imgElement);
//   return liElement;
// }
// const galleryItems = images.map(createGalleryItem);
// galleryList.append(...galleryItems);
