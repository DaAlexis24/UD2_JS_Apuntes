console.log("Index loaded");
//DOM como árbol de objetos
console.dir(document);
// Acceso secuencial a cualquier nodo
console.dir(
  document.children[0].children[1].children[0].children[1].textContent
);

// BUSCAMOS EL ELEMENTO DESEADO DE FORMA DIRECTA, USANDO UN SELECTOR
const headerElement = document.querySelector("header");
console.log(headerElement.querySelector("img"));
// RPTA: <img src="./favicon-2.png" width="50" height="50" alt="Logo"></img>

// Acceso directo previo
document.getElementById("id1");
document.getElementsByTagName("h1");
document.getElementsByClassName("basic");
