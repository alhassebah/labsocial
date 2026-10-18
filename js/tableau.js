
// const array = [1, 2, 3, 4, 5, 6];
// // console.log(array);
// // array[5] = 100;
// array[array.length - 1] = 200;
// // array.push(300);  // ajoute à la fin → 300
// // array.pop();      // retire le dernier → [1,2,3,4,5]
// // array.unshift(900);
// // array.shift();
// array.splice(1, 2, 100, 200, 300);
// console.log(array);



const monTableau = ["Bah", "Koffi", "N'Guessan", "Barry", "Doumbouya", "Kone", "Yao", "Diallo"];
// monTableau.splice(2, 3, "N'Dri", "Traoré"); // remplacer les index 2, 3 par "N'Dri" et "Traoré"
// monTableau.push("Coulibaly"); // ajouter "Coulibaly" à la fin du tableau
// monTableau.unshift("Sangare"); // ajouter "Sangare" au début du tableau
// monTableau.pop(); // retirer le dernier élément du tableau
// monTableau.shift(0); // retirer le premier élément du tableau

// const arr = monTableau.map(n => n.toUpperCase());
// console.log(arr);
const Tab = monTableau.filter(x => x.length > 5); // filtrer les éléments du tableau pour ne garder que ceux dont la longueur est supérieure à 5
console.log(Tab);

const TabReduce = monTableau.reduce((y, n) => y + " " + n); // réduire le tableau en une seule chaîne de caractères
console.log(TabReduce);



const Table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr = (Table).map(n => n * 2); // multiplier chaque élément du tableau par 2
// const arr2 = arr.filter(n => n > 10); // filtrer les éléments du tableau pour ne garder que ceux supérieurs à 10
// console.log(arr2);

// const ArrReduce = Table.reduce((z, w) => z + w); // réduire le tableau en une seule valeur en additionnant chaque élément du tableau
// console.log(ArrReduce);

const TabFind = Table.find(n => n < 2); // trouver l'élément du tableau qui est inférieur à 2
console.log(TabFind);

const tabFindIndex = Table.findIndex(n => n > 3); // trouver l'index de l'élément du tableau qui est inférieur à 2
console.log(tabFindIndex);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const copy = [...numbers]; // créer une copie du tableau numbers
console.log(copy);

