import { createHeader } from "./components/header.js";
import { ticTacToeGame } from "./components/ttt.js";
console.log("Index loaded");
function checkDOM() {
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

  document.querySelector("[data-id = 1]");
  document.querySelectorAll(".basic");
  document.querySelectorAll('[name = "name value"]');
  document.querySelectorAll("p");
  Document.querySelector("article>p.header");

  // Acceso directo previo
  document.getElementById("id1");
  document.getElementsByTagName("h1");
  document.getElementsByName("name value");
  document.getElementsByClassName("basic");
}

const title = "Juegos";
// crea el header desde JS
document.querySelector("header").outerHTML = createHeader(title);

ticTacToeGame();
