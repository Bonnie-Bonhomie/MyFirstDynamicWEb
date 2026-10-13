
let age = 0;
const greet = (name) => {
  return `Hello, ${name}`;
};

class User {
  constructor(name) {
    this.name = name;
  }
}

var numbers = [1, 2, 3, 4, 5];

// console.log(document.querySelector('p'));
// console.log(document.querySelector('p.subtitle'));

// document.querySelector('p#subFour').animate([
//   { transform: 'translateX(100px)' },
//   { transform: 'translateX(0px)' }], {
//   duration: 2000,
//   iterations: Infinity
// });

// console.log(`Hello, ${document.getElementById('subFour').textContent}`);

// console.log(document.getElementsByClassName('subtitle')[2].textContent);
// console.log(document.querySelectorAll('p.subtitle'));
// console.log(document.querySelectorAll('p.subtitle')[3]);

const tagName = document.getElementsByTagName('p');
console.log(tagName[0].innerText);

const paraFour = document.getElementById('subFour');
paraFour.textContent = 'And Python for AI integration and AI modelling';

const paras = document.querySelectorAll('p');

paras.forEach(para => {
  console.log(para.innerText);
  para.append('.');
})

// console.log(greet("World"));
// console.log(numbers[0]);
