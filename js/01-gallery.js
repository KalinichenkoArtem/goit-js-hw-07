import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const cardsMarkup = createGalleryItemsMarkup(galleryItems);

// Render

gallery.insertAdjacentHTML('afterbegin', cardsMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
            </a>
        </div>`;
}).join("");
};

// Render

// addEventListener

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    
    const modalImage = event.target.getAttribute("data-source");

    const instance = basicLightbox.create(`<img
                src="${modalImage}">`);

    instance.show();    
};

// addEventListener