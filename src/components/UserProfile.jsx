
import { useState, useEffect } from "react";

function UserProfile() {
    // 1. État user, vide au départ
    const [user, setUser] = useState(null);

    // Fonction qui appelle l'API (réutilisée par le bouton bonus)
    const fetchUser = async () => {
        setUser(null); // réaffiche « Chargement... » pendant la requête
        try {
            // 3. Requête + conversion en JSON
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json();
            // 4. Premier utilisateur → mise à jour de l'état
            setUser(data.results[0]);
        } catch (error) {
            console.error("Erreur lors du chargement :", error);
        }
    };

    // 2. Appel unique au montage du composant
    useEffect(() => {
        fetchUser();
    }, []);

    // 6. Tant que les données ne sont pas là
    if (!user) {
        return <p>Chargement...</p>;
    }

    // 5. Affichage : photo, nom complet, email, pays
    return (
        <div style={styles.card}>
            <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                style={styles.photo}
            />
            <h2>
                {user.name.first} {user.name.last}
            </h2>
            <p>{user.email}</p>
            <p>{user.location.country}</p>

            {/* Bonus : nouvel utilisateur sans recharger la page */}
            <button onClick={fetchUser} style={styles.button}>
                Nouvel utilisateur
            </button>
        </div>
    );
}

const styles = {
    card: {
        maxWidth: 320,
        margin: "40px auto",
        padding: 24,
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: 12,
        fontFamily: "system-ui, sans-serif",
    },
    photo: { borderRadius: "50%", width: 128, height: 128 },
    button: {
        marginTop: 12,
        padding: "8px 16px",
        border: "none",
        borderRadius: 6,
        background: "#1e3a5f",
        color: "white",
        cursor: "pointer",
    },
};

export default UserProfile;