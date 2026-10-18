
// Récupération des éléments
const container = document.getElementById('container');
 
const btnRegister = document.getElementById('btnRegister'); // bouton "Sign Up" dans le panneau noir
const btnLogin = document.getElementById('btnLogin');        // bouton "Login" dans le panneau noir
 
const switchToRegister = document.getElementById('switchToRegister'); // lien mobile
const switchToLogin = document.getElementById('switchToLogin');       // lien mobile
 
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
 
// Bascule vers le formulaire d'inscription
function activateRegister() {
  container.classList.add('right-panel-active');
}
 
// Bascule vers le formulaire de connexion
function activateLogin() {
  container.classList.remove('right-panel-active');
}
 
// Boutons du panneau diagonal (version desktop)
btnRegister.addEventListener('click', activateRegister);
btnLogin.addEventListener('click', activateLogin);
 
// Liens texte (version mobile, quand le panneau diagonal est masqué)
switchToRegister.addEventListener('click', activateRegister);
switchToLogin.addEventListener('click', activateLogin);
 
// Exemple de gestion de soumission (à remplacer par votre logique / appel API)
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Connexion en cours...');
  // -> ici : appel fetch/axios vers votre backend
});
 
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Inscription en cours...');
  // -> ici : appel fetch/axios vers votre backend
});