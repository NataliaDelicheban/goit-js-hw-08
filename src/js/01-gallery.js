// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryBox.insertAdjacentHTML('afterbegin', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}" onclick="event.preventDefault()">
            <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
        </a>
    `})
    .join("");
}
new SimpleLightbox('.gallery a', { captionDelay: 250 });