function onImageClick(event) {
  const dialog = document.querySelector('dialog');
  const src = event.currentTarget.getAttribute('src');
  const img = new Image();

  img.onload = function() {
    dialog.innerHTML = `<img src="${img.src}" />`; 
    dialog.style.display = 'flex';
  };

  img.src = src;
}

function addEventListeners() {
  const images = [...document.querySelectorAll('img')];
  images.forEach(image => image.addEventListener('click', onImageClick));
}

function init() {
  addEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
