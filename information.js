/*
information.js

Lisez cet exercice entièrement avant de commencer.
Ecrire une fonction information qui prend 4 paramètres:

un prénom qui sera une string
un nom qui sera une string
un âge qui sera un number
une sexe qui sera une string parmi M, F, ?
Cette fonction devra afficher le message suivant en fonction des paramètres:

information('Sofiane', 'Akermoun', 39, 'M')
affichera:

prenom: Sofiane
nom: Akermoun
age: 39
Monsieur, vous êtes majeur depuis 21 ans
information('Alice', 'Liddell', 7, 'F')
affichera:

prenom: Alice
nom: Liddell
age: 7
Madame, vous serez majeur dans 11 ans
information('Valerie', 'Dupont', 7, '?')
affichera:

prenom: Valerie
nom: Dupont
age: 7
vous serez majeur dans 11 ans
Pour notre exercice l'âge de la majorité est 18 ans et ne vous souciez pas de la gestion du singulier/pluriel dans votre affichage.
*/

let firstName = "";
let lastName = "";
let age = 0;
let isSexe = "";

const information = (firstName, lastName, age, isSexe) => {
  if (age >= 18) {
    console.log(`${isSexe} Monsieur, you are major since ${age - 18} years`);
  } else if {
  console.log(`Madame, you will be major in ${18 - age} years`);
  } else {
    console.log(`You will be major in ${18 - age} years`);
  }
};
//information("Alice", "Liddell", 7, ?);
information("Sylvie", "Mémain-Yé", 57, isSexe: ?);
//information("Sofiane", "Akermoun", 39, ?);
//information("Valerie", "Dupont", 7, ?);

// OUTPUT Sylvie Mémain-Yé, you are major since 39 years
