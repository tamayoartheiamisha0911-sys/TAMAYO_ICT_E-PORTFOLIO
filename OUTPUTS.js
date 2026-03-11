function bringToFront(photo){

  let photos = document.querySelectorAll(".photo");

  photos.forEach(p => p.style.zIndex = 1);

  photo.style.zIndex = 3;

}

function bringToFront(el) {
  // If the photo is already zoomed, remove zoom
  if (el.classList.contains('zoomed')) {
    el.classList.remove('zoomed');
  } else {
    // Remove zoom from all photos
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => photo.classList.remove('zoomed'));

    // Zoom clicked photo
    el.classList.add('zoomed');
  }
}