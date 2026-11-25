// Deterrente leggero: niente menu contestuale sulle immagini.
document.addEventListener("contextmenu", (e) => {
  if (e.target.tagName === "IMG") e.preventDefault();
});
