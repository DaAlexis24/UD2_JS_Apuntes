const makeAsync = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = Math.random();
      if (n > 0.5) {
        //acierto
        resolve(`Dato: ${n}`);
      } else {
        // error
        reject(new Error(`Error: ${n}`));
      }
    }, time);
  });
};

async function main() {
  try {
    const data = await makeAsync(1000);
    const data2 = await makeAsync(200);
    if (data === data2) {
      console.log("iguales");
    } else {
      console.log(data, data2);
    }
  } catch (error) {
    console.error(error.message);
  }
  console.log("Proceso terminado");
}

main();
