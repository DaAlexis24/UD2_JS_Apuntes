console.log("Tarea 1");
console.log("Tarea 2");
setTimeout(() => {
  console.log("Tarea 3"); // asíncrono - diferido
}, 2000);
console.log("Tarea 4");
setTimeout(() => {
  console.log("Tarea 5");
}, 0); // asíncrono - inmediato
setTimeout(() => {
  console.log("Tarea 6");
}, 0);
console.log("Tarea 7");
Promise.resolve("Tarea 8").then(console.log);
