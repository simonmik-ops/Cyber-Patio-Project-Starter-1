function init() {
  console.log(document.querySelector("h1"));
}

if (document.addEventListener) document.addEventListener("DOMContentLoaded", init);
else window.attachEvent("onload", init);
