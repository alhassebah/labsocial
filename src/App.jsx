// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'




// import { IoPersonOutline, IoMailOutline, IoLockClosedOutline } from "react-icons/io5";

// <IoPersonOutline className="icon" />
// import { useState } from "react";
// import "../css/style.css";

// function App() {
//   const [isRegister, setIsRegister] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault(); // empêche le rechargement de la page
//   };

//   return (
//     <div className={`container ${isRegister ? "right-panel-active" : ""}`} id="container">
//       {/* FORMULAIRE : INSCRIPTION */}
//       <div className="form-container register-container">
//         <form id="registerForm" onSubmit={handleSubmit}>
//           <h2>Créer un compte</h2>

//           <div className="input-box">
//             <input type="text" placeholder="Nom d'utilisateur" required />
//             <ion-icon className="icon" name="person-outline"></ion-icon>
//           </div>

//           <div className="input-box">
//             <input type="email" placeholder="Email" required />
//             <ion-icon className="icon" name="mail-outline"></ion-icon>
//           </div>

//           <div className="input-box">
//             <input type="password" placeholder="Mot de passe" required />
//             <ion-icon className="icon" name="lock-closed-outline"></ion-icon>
//           </div>

//           <button type="submit" className="btn">S'inscrire</button>

//           <p className="switch-text mobile-only">
//             Déjà un compte ?{" "}
//             <span onClick={() => setIsRegister(false)}>Se connecter</span>
//           </p>
//         </form>
//       </div>

//       {/* FORMULAIRE : CONNEXION */}
//       <div className="form-container login-container">
//         <form id="loginForm" onSubmit={handleSubmit}>
//           <h2>Login</h2>

//           <div className="input-box">
//             <input type="text" placeholder="Username" required />
//             <ion-icon className="icon" name="person-outline"></ion-icon>
//           </div>

//           <div className="input-box">
//             <input type="password" placeholder="Password" required />
//             <ion-icon className="icon" name="lock-closed-outline"></ion-icon>
//           </div>

//           <a href="#" className="forgot-link">Mot de passe oublié ?</a>

//           <button type="submit" className="btn">Login</button>

//           <p className="switch-text mobile-only">
//             Don't have an account?{" "}
//             <span onClick={() => setIsRegister(true)}>Sign up</span>
//           </p>
//         </form>
//       </div>

//       {/* PANNEAU DIAGONAL ANIMÉ */}
//       <div className="overlay-container" id="overlayContainer">
//         <div className="overlay">
//           <div className="overlay-panel overlay-left">
//             <h2>WELCOME BACK!</h2>
//             <p>Pour rester connecté avec nous, merci de vous connecter avec vos identifiants</p>
//             <button className="btn ghost" onClick={() => setIsRegister(false)}>Login</button>
//           </div>

//           <div className="overlay-panel overlay-right">
//             <h2>HELLO, FRIEND!</h2>
//             <p>Entrez vos informations personnelles et rejoignez-nous dès aujourd'hui</p>
//             <button className="btn ghost" onClick={() => setIsRegister(true)}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default App



import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Profil aléatoire</h1>
      <UserProfile />
    </div>
  );
}

export default App;