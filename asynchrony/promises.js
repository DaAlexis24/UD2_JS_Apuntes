const makeAsync = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = Math.random();
      if (n > 0.5) {
        //acierto
        resolve(`Dato: ${n}`);
      } else {
        // error
        reject(new Error(`Dato: ${n}`));
      }
    }, time);
  });
};

// then ejecuta la promesa si es que se cumplen los parámetros otorgados
// catch obtiene todos los datos y sirve para gestionar posibles errores
// finally sirve para ejecutar la promesa, no importa si llega datos o error.
makeAsync(1000)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Proceso terminado");
  });
