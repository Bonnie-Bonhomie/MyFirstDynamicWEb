
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const filePath = fileURLToPath(import.meta.url) // This is equivalent to __filename in commonJS

const dir = path.dirname(filePath); //This is eqivalent to __dirname

const joinPath = path.join('/content', '1-text.txt');
const resolvePath = path.resolve(dir, 'content', '1-text.txt');
const first = fs.readFileSync('./content/1-text.txt', 'utf8')

//To write or overwrite the content of a file 
fs.writeFileSync('./content/second.txt', `I have write the content of ${first} here.\n`)
// To append to the content of a file add the object with flag property
fs.writeFileSync('./content/second.txt', `I have write the content of ${first} here. `, {flag: 'a'} )

console.log(first);

console.log(path.basename(resolvePath));
console.log(filePath);



console.log(resolvePath);


console.log(joinPath);

console.log(dir);


console.log(os.type());

