# 420-317-AH — Système de supervision en temps réel

## 1. Démarrer l’application

Ouvrir un terminal à la racine du projet, puis exécuter :
 
cd ~/420-317-AH/serveur

Installer les dépendances si nécessaire :

npm install

Vérifier que le fichier `.env` contient les informations de connexion à MongoDB Atlas et à EMQX, ainsi que `JWT_SECRET`.

Démarrer le serveur en mode développement :

npm run dev

Le serveur démarre normalement sur :http://localhost:3000


## 2. Tester l’API avec Thunder Client

Dans VS Code, ouvrir **Thunder Client**, créer une nouvelle requête et utiliser l’adresse de base :http://localhost:3000


Pour les requêtes protégées, sélectionner **Auth → Bearer** et saisir le jeton JWT obtenu lors de la connexion.

### 2.1. Connexion

- **Méthode :** `POST`
- **URL :** `http://localhost:3000/api/auth/login`
- **Body → JSON :**

json
{
  "email": "admin@supervision.test",
  "password": "ulysseadmin"
}


### 2.2. Consulter les capteurs

- **Méthode :** `GET`
- **URL :** `http://localhost:3000/api/sensors`

Résultat attendu : la liste des capteurs enregistrés.

### 2.3. Créer un capteur

- **Méthode :** `POST`
- **URL :** `http://localhost:3000/api/sensors`
- **Body → JSON :**

{
  "id": "temp-123333",
  "name": "Temperature",
  "location": "Salon",
  "unit": "°C",
  "min": 10,
  "max": 40,
  "threshold": 30,
  "direction": "above",
  "active": true,
  "offset": 0
}


### 2.4. Modifier un capteur

- **Méthode :** `PUT`
- **URL :** `http://localhost:3000/api/sensors/ID_DU_CAPTEUR`
- **Body → JSON :**

{
  "name": "Température du local"
}

Remplacer `ID_DU_CAPTEUR` par l’identifiant MongoDB du capteur.

### 2.5. Désactiver un capteur

- **Méthode :** `PUT`
- **URL :** `http://localhost:3000/api/sensors/ID_DU_CAPTEUR`
- **Body → JSON :**

{
  "active": false
}

Vérifier que le panneau du capteur disparaît du tableau de bord et que les mesures continuent d’être enregistrées, conformément aux exigences du projet.

### 2.6. Réactiver un capteur

- **Méthode :** `PUT`
- **URL :** `http://localhost:3000/api/sensors/ID_DU_CAPTEUR`
- **Body → JSON :**

{
  "active": true
}


Vérifier que le panneau réapparaît et que l’historique des mesures est conservé.

### 2.7. Consulter les mesures

- **Méthode :** `GET`
- **URL :**

 
http://localhost:3000/api/measures?sensor=ID_DU_CAPTEUR&limit=20

Cette requête permet de consulter les dernières mesures d’un capteur.

### 2.8. Consulter les statistiques

- **Méthode :** `GET`
- **URL :**

 
http://localhost:3000/api/measures/stats?sensor=hum-b127
 

Vérifier les statistiques retournées par l’API.

### 2.9. Supprimer un capteur

- **Méthode :** `DELETE`
- **URL :**

http://localhost:3000/api/sensors/ID_DU_CAPTEUR
