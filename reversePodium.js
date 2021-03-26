/*
reversePodium.js

Ecrire une fonction reversePodium qui prend comme paramètre un tableau de number
et affiche les 3 plus mauvaises notes tel que ci dessous
2
1
0
*/

let worstRating = [22, 15, 2, 19, 3, 42];

const reversePodium = worstRating.sort((a, b) => {
  return a - b;
});

console.log(`3rd worth rating: ${worstRating[2]}`);
console.log(`2nd worth rating: ${worstRating[1]}`);
console.log(`1st worth rating: ${worstRating[0]}`);

//console.log(worstRating);

/*
OUTPUT :
3rd worth rating: 15
2nd worth rating: 3
1st worth rating: 2
[ 2, 3, 15, 19, 22, 42 ]
*/
