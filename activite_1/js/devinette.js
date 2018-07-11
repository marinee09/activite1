/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;


// TODO : complétez le programme
console.log("(La solution est " + solution + ")");




/*  si le numéro du prompt est inférieur à la solution, affichez trop petit,
    si le numéro du prompt est supérieur à la solution, affichez trop grand
    si le numéro est la solution affichez gagné

*/
var vies = 6;

do {
    var testNum = prompt('Choisissez un nombre entre 1 et 100. Vies :' + vies);

    if (testNum < solution) {
        alert('Trop petit');
    }

    else if (testNum > solution) {
        alert('Trop grand'); }

    else if (testNum == solution) {
        alert('Gagné'); }

    if (vies == 0) {
        alert("tu as perdu") }
    vies--

} while (vies > 0);

