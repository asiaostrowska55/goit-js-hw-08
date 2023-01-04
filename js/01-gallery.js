// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const imgGallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    image => `<div class="gallery__item">
<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
</div>`
  )
  .join('');

imgGallery.insertAdjacentHTML('beforeend', galleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

// poniższy kod ukrywa widoczny kawałek boxshadow w przeglądarce //
let shadowBox = document.querySelectorAll('a.gallery__item');
let arr = Array.from(shadowBox);
arr.forEach(el => {
  el.style.display = 'contents';
});
