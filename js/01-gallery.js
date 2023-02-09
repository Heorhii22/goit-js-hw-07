import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
galleryList.addEventListener("click", onGalleryItemClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div><a href = "${original}" rel = "nofollow" target = "_blank" class = "gallery__link"><img src = "${preview}" alt = "${description}" data-source = "${original}" class = "gallery__image"></a></div>`;
    })
    .join("");
}

function onGalleryItemClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" width="1280" height="900">`
  );
  instance.show();

  galleryList.addEventListener("keydown", modalClose);

  function modalClose(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
