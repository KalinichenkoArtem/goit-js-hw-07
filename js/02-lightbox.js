import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Const

const gallery = document.querySelector(".gallery");
const cardsMarkup = createGalleryItemsMarkup(galleryItems);

// Const

// Render

gallery.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" 
                alt="${description}" />
            </a>
            </li>`;
}).join("");
};

const newGallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });
 
// Render