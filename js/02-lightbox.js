
import { galleryItems } from './gallery-items.js';

// Change code below this line

const listGallery = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems.map (({ preview, original, description}) =>`<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>` ).join('');

listGallery.insertAdjacentHTML("afterbegin", galleryItemsMarkup);


const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
});





