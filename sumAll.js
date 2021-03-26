/*
sumAll.js

Ecrire une fonction sumAll qui prend comme paramètre un tableau de number
et retourne la somme de tous les nombres de ce tableau.
*/

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer, 5));
