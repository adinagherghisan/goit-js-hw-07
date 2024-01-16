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
 
const galleryLinks = document.querySelectorAll(".gallery_link");
galleryLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const originalImgURL = link.querySelector("img").dataset.source;
        const instance = basicLightbox.create(`
    <img src="${originalImgURL}" width="800" height="600">
`);

        instance.show();

    });
});

console.log(galleryItems);


   