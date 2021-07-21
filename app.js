'use stricts'
const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
const galleryContainer = document.querySelector('.js-gallery');
const galleryMarkup = createCardsGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click',onGalleryContainerClick)
const modalWindow = document.querySelector('.lightbox')
const closeBtnModalWindow = document.querySelector('button[data-action="close-lightbox"]')
closeBtnModalWindow.addEventListener('click',onCloseModalWindow)
const imageOnContainer = document.querySelector('.lightbox__image')
const overlayGallery = document.querySelector('.lightbox__overlay')
overlayGallery.addEventListener('click', onBackdropClick)


function createCardsGalleryMarkup(gallery) {
  const markup = gallery.map(({ original, preview, description }) => {
    return `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
</li> 
  `
  })
.join('');
return markup;
}
function onGalleryContainerClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return
  }
  
  onOpenModalClick(event)
  imageOnContainer.src = event.target.dataset.source
  imageOnContainer.alt = event.target.alt
  
  
}
function onOpenModalClick(event) {
  window.addEventListener('keydown',onEscKeyPress)
  event.preventDefault();
  modalWindow.classList.add('is-open')
}
function onCloseModalWindow() {
  window.removeEventListener('keydown',onEscKeyPress)
  modalWindow.classList.remove('is-open')
  imageOnContainer.src = '';
  imageOnContainer.alt = '';
}
function onBackdropClick(event) {
  if (event.currentTarget === event.target)
    onCloseModalWindow()
}
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
     onCloseModalWindow()
  }
}
//galleryContainer.addEventListener('click',onChangeImageByKey) 
// function onChangeImageByKey(event) {

// event.target=+1

//   // if (event.code === 'ArrowRight') {

//   //  }
// //   if (event.code === 'ArrowLeft')
// }