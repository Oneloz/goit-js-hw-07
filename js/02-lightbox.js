import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryEl = galleryItems.map(function ({ preview, original, description }) {
  return `<li 
  class="gallery__item">
  <a class="gallery__link" href="${original}" target="_blank">
   <img 
    class= "gallery__image"
    src="${preview}"
    alt="${description}"
   >
  </a>
  </li>`
}).join("");

gallery.insertAdjacentHTML('beforeend', galleryEl);

var lightbox = new SimpleLightbox('.gallery__link',
  { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });

console.log(galleryItems);
