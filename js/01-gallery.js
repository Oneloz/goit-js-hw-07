import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryEl = galleryItems.map(function ({ preview, original, description }) {
  return `<li 
  class="gallery__item">
  <a class="gallery__link" href="${original}" target="_blank">
   <img class= "gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
   >
  </a>
  </li>`
}).join("");

gallery.insertAdjacentHTML('beforeend', galleryEl);

gallery.addEventListener('click', clickOnImage);

function clickOnImage(event) {

  event.preventDefault();
 
  const fullImg = event.target;
  if (fullImg.nodeName !== 'IMG') {
    return;
    
  }
  const instance = basicLightbox.create(`
  <img
  src="${fullImg.dataset.source}" 
  width="800" 
  height="600"
  >
`);
  instance.show();
 gallery.addEventListener('keydown', closeModalClick);
}

function closeModalClick(event) {
  const openInstance = document.querySelector(".basicLightbox");
  if (event.code === "Escape") {
    openInstance.remove();
    gallery.removeEventListener('keydown', closeModalClick);  
  }
};

console.log(galleryItems);
