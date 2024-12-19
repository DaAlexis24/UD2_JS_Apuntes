const greeting = () => {
  const str = "Hola mundo";
  console.log(str);
};

const wait = (secondsLimit) => {
  const SECOND_INSTRUCTIONS = 3_000_000_000 / 2;
  const limit = (secondsLimit = SECOND_INSTRUCTIONS);
  let i = 0;
  // procesamiento brutal
  while (i < limit) {
    i++;
  }
};

let seconds = 4;
const start = Date.now();
console.log("Inicio");
wait(seconds);
console.log("Por fin", (Date.now() - start) * 0.001, "segundos despues");
greeting();
