// Esto es un MÓDULO, guarda código para que se pruebe en main

// 01.- Función que muestre por consola su nombre
// Export sin nombre, se puede llamar como se desee
export function foo() {
  console.log('Soy foo');
}

// Crea una función que cuente la cantidad de palabras en una frase.
// Export con nombre
export function countWords(sentence = '') {
  //   let result = 0;
  //   const newSentence = sentence.split(' ');
  //   for (let i = 0; i < newSentence.length; i++) {
  //     result++;
  //   }
  //   return console.log(`La frase tiene ${result} palabras`);

  if (typeof sentence !== 'string') return;
  if (sentence === '') return 0;
  const words = sentence.split(' ');
  return words.length;
}
