import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGallery = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems.map(({ preview, original, description}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`).join('');

listGallery.insertAdjacentHTML("afterbegin", galleryItemsMarkup);


listGallery.addEventListener("click", (event) => {
    event.preventDefault();

    const targetLink = event.target;
if (targetLink.nodeName !== "IMG"){
return;
}
const largeImageUrl = targetLink.dataset.source;


const instance = basicLightbox.create(`<img src="${largeImageUrl}">
`);
instance.show();

document.addEventListener("keydown", (event) => {
    event.preventDefault();

if(event.code !== "Escape"){
    return;
}
instance.close();

});

});








