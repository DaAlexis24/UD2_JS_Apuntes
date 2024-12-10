import { countWords, generatePassword } from './tools.js';

console.log('Soy main');
const sentence =
  'Praesent ut ipsum eget augue luctus volutpat. Aenean tempor, dui at tincidunt faucibus, est diam laoreet arcu, quis tincidunt justo libero ut erat. Integer consequat nibh purus, in commodo ligula lobortis ut. Sed pellentesque lacus in ultrices viverra. Fusce sit amet hendrerit odio, vel hendrerit nunc. Aliquam varius vel libero ac cursus. Nunc lectus ex, vehicula quis accumsan vel, eleifend vel nisi. Nulla vehicula volutpat leo in tristique. Suspendisse condimentum faucibus libero, eget scelerisque odio dapibus sed. Quisque euismod nulla ex, nec dignissim nibh euismod nec. Nullam odio ipsum, euismod a tellus sed, dictum rhoncus orci. Praesent tempus pellentesque arcu, eu pulvinar eros tincidunt nec. Sed venenatis pretium ornare. Proin viverra viverra justo, pretium aliquam nisl cursus sed. Integer semper sem urna, in vehicula mauris suscipit in.';
console.log(countWords(sentence));

console.log(generatePassword(13));
