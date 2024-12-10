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

// Crea una función que genere una contraseña aleatoria con letras mayúsculas, letras minúsculas y números.

// Generalizada en randomIntegerInterval()
// function randomDig() {
//   return Math.trunc(Math.random() * 10);
// }

function randomIntegerInterval(min, max) {
  return Math.trunc(Math.random() * (max + 1 - min) + min);
}

function randomLetter(params) {
  const letters = 'abcdefghijklmnñopqrstuvwxyz';
  const position = randomIntegerInterval(0, letters.length - 1);
  return letters[position];
}

function shuffleString(word = '') {
  const initialLetters = word.split('');
  const finalLetters = [];
  for (let i = 0; i < word.length; i++) {
    const n = randomIntegerInterval(0, initialLetters.length - 1);
    // permite darle al array una posición para que se extraiga el valor que esta en esa posición
    const letter = initialLetters.splice(n, 1);
    finalLetters.push(letter[0]);
  }
  return finalLetters.join('');
}

// S de SOLID: Single Responsibility
export function generatePassword(length) {
  let rounds = 2;
  if (length > 6) {
    rounds = Math.ceil(length / 3);
  }
  let result = '';
  for (let i = 0; i < rounds; i++) {
    result += randomIntegerInterval(0, 9);
    result += randomLetter();
    result += randomLetter().toUpperCase();
  }
  result = length <= 6 ? result : result.slice(0, length);
  // if (length > 6) result = result.slice(0, length);
  // return result;
  return shuffleString(result);
}
