function onImageClick(event) { // On each image clicked give me the corresponding event
  const dialog = document.querySelector('dialog'); // Target location for the HTML we are creating with JS
  const src = event.currentTarget.getAttribute('src'); // Grabbing the source of the image clicked
  const img = new Image(); // Create HTML <img> tag with JS

  img.onload = function() { // Once my image has loaded...
    dialog.innerHTML = `<img src="${img.src}" />`;  // Go find the <dialog> previously defined above
    dialog.style.display = 'flex'; // Show the hidden dialog box
  };

  img.src = src; // Define the src attribute of the <img src="_image_source_" />
}

function addEventListeners() {
  const images = [...document.querySelectorAll('img')]; // Query the whole document for imgs, then put them in an array
  images.forEach(image => image.addEventListener('click', onImageClick)); // For each image, create a unique 'click' event
}

function init() {
  addEventListeners(); // I'm loaded, now add events to HTML elements
}

document.addEventListener("DOMContentLoaded", init); // Once all HTML has loaded, fire an event called init()