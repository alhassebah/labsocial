

/*
async function Utilisateur (){
    try{
     const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
                  const data = await reponse.json();
    console.log(data);
}catch(error){
  cosole.log("Erreur fetch utilisat", error);
}
}

// ##############################
// // exercie 2
async function getProduct(){
  try{
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
    data.forEach(prod => console.log(prod.title, prod.price, prod.category));
    const expensive = data.filter(prod => (prod.price > 50));
    return expensive;
}catch(error){
  console.log("Erreur produit", error);
}
}
 getProduct().then(result => {
    console.log("Produit.price >50 :", result); 
                });
  
// async function main(){
//   const result = await getProduct();
//   console.log("Produit > 50 :", result);
// }
// result();

// #############################################
// EXERCICE 3 :

fetch(url, {
  method: "POST",     // GET (défaut), POST, PUT, DELETE...
  headers: {
      "Content-Type": "application.json" // dit au serveur qu'on envoie du JSON
},
  body: JSON.stringify(data),  // le corps DOIT être une string, pas un objet JS
});

// EXEMPLE AVEC GET + POST

async function getResult () {
  try{
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await result.json();
  console.log(data);
  }catch(error){
    console.log("Erreur GET", error);
  }
}

async function getPost(){
 try{
    const result = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      Headers: {"Content-Type": "Application/json"},
      body : JSON.stringify({ title: "Apprendre fetch avec POST", completed : false})     
    });
      const data = await result.json();
      console.log("créer :", data);
}catch(error){
  console.log("Erreur POST", error);
}
}
*/
// #########################
// EXERCICE 4 : spread
const numbers = [1, 2, 3, 4, 5, 6, 7];
const copy = [...numbers];
copy.push(8);
console.log(copy);

// ########################
// EXERCICE 5

const frontend = ["HTML", "CSS", "JS"];
const backend = ["Node", "Express", "MongoDB"];

const stack = [...frontend, ...backend];
// console.log(stack);
stack.reduce((n, m) => n + ", " + m);
