import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");



galleryItems.forEach(item => {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery_item");

    const link = document.createElement("a");
    link.classList.add("gallery_link");
    link.href = item.original;

    const image = document.createElement("img");
    image.classList.add("gallery_image");
    image.src = item.preview;
    image.alt = item.description;
    image.dataset.source = item.original;

    link.appendChild(image);
    galleryItem.appendChild(link);
    gallery.appendChild(galleryItem)
})
let simpleLightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});
simpleLightbox.on("show.simplelightbox", function () { console.log('Image has been opened') });
simpleLightbox.on("close.simplelightbox",function () { console.log('Image has been closed')})
console.log(galleryItems);
