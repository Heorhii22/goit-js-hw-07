import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div><a href = "${original}" class = "gallery__item"><img src = "${preview}" alt = "${description}" class = "gallery__image" ></a></div>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "top",
  overlayOpacity: 0.8,
});
