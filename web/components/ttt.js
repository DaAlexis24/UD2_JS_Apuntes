export function ticTacToeGame() {
  // definimos una constante para registrar los datos de los jugadores del juego TRES EN RAYA
  const players = [
    { firstName: "Pepe", surname: "", alias: "Pipepino", icon: "👶🏾" },
    { firstName: "Ernestina", surname: "", alias: "", icon: "💖" },
  ];
  // ASIGNO VALOR A UNA PROPIEDAD DE UN OBJETO
  // players[1].alias = players[1].firstName;

  // Se escribe la info de los jugadores
  const ddElements = document.querySelectorAll(".tres-raya dd");

  for (let i = 0; i < ddElements.length; i++) {
    const item = ddElements[i];

    // Primera manera de escribir un valor en HTML utilizando QuerySelector. Ternario se utiliza cuando tienes que comprobar una sentenica, teniendo 2 respuestas distintas
    // item.textContent = players[i].alias ? players[i].alias : players[i].firstName;

    // Segunda manera. Esta se usa cuando la comprobación y la primera respuesta son las mismas, así se evita escribir doble.
    // item.textContent = players[i].alias || players[i].firstName;

    // Tercer manera: Utilizando la propiedad INNER HTML
    const text = `<b> ${players[i].alias || players[i].firstName} </b>`;
    // permite crear elementos, por ello creaos el DOM
    item.innerHTML = text;
  }
  // Para simular el juego
  function playTurn(position, player) {
    // Selecciono el tablero
    const boardElement = document.querySelector(".board");
    // Selecciono los elementos dentro del tablero: Devuelve una lista
    const boardElements = document.querySelectorAll(".board div");
    const info = document.querySelector(".info");

    if (boardElement.children[position - 1].textContent) {
      document.querySelector(".info").textContent = "Movimiento Inválido";
      return;
    }
    boardElement.children[position - 1].innerHTML = player.icon;
  }

  // Simulación: Posiciones del 1 al 9
  // Inicia Pepe
  playTurn(5, players[0]);

  // Juega Ernestina
  playTurn(5, players[1]);

  // //Acceder a la celda 1 desde...
  // // Tablero:
  // boardElement.children[0];
  // // Los elementos
  // boardElements[0];
  // console.dir(boardElement.children[0]); //div
  // console.dir(boardElements[0]);  //div
}
