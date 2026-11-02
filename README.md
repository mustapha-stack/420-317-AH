# 420-317-AH — Système de supervision en temps réel

## Présentation du projet

Le projet **Système de supervision en temps réel**, réalisé dans le cadre du cours 420-317-AH au Collège Ahuntsic, consiste à développer une application permettant de surveiller des capteurs, de recevoir leurs mesures en temps réel, de consulter leur historique et de visualiser des statistiques à travers un tableau de bord.

L'application repose sur une architecture composée d'un ESP32 émulé avec Velxio, d'un broker MQTT EMQX, d'un serveur Node.js et d'une base de données MongoDB Atlas.

Le système utilise un capteur DHT22 simulé pour transmettre les données de température et d'humidité.

## 1. Technologies utilisées

| Technologie | Utilisation |
|---|---|
| ESP32 / Velxio | Émulation de la carte et acquisition des données |
| DHT22 | Simulation des mesures de température et d'humidité |
| Node.js | Environnement d'exécution JavaScript |
| Express.js | Développement de l'API REST |
| MQTT | Protocole de communication |
| EMQX | Broker MQTT |
| MongoDB Atlas | Stockage des capteurs et des mesures |
| JWT | Authentification et sécurisation des routes |
| HTML / CSS / JavaScript | Interface du tableau de bord |
| Thunder Client | Tests de l'API REST |

## 2. Architecture du système

Le fonctionnement général de l'application suit le processus suivant :

1. L'ESP32 simulé avec Velxio récupère les valeurs du capteur DHT22.
2. Les données de température et d'humidité sont transmises au broker MQTT EMQX.
3. Le serveur Node.js reçoit les messages MQTT.
4. Les mesures sont enregistrées dans MongoDB Atlas.
5. Le tableau de bord récupère et affiche les informations de supervision.

### Schéma général de fonctionnement

```text
ESP32 simulé avec Velxio
          |
          v
       Capteur DHT22
          |
          v
      Protocole MQTT
          |
          v
       Broker EMQX
          |
          v
     Serveur Node.js
          |
          v
     MongoDB Atlas
          |
          v
   Tableau de bord Web
```

## 3. Structure du projet

```text
420-317-AH/
│
├── dashboard/
│   ├── index.html
│   ├── dashboard.js
│   ├── connections.js
│   └── style.css
│
└── serveur/
    ├── .env
    ├── package.json
    ├── package-lock.json
    ├── README.md
    │
    ├── docs/
    │   └── questions.md
    │
    └── src/
        ├── app.js
        ├── index.js
        ├── monitor.js
        ├── mqtt.js
        ├── realtime.js
        ├── sensor.js
        ├── stats.js
        │
        ├── config/
        ├── controllers/
        ├── middlewares/
        ├── models/
        ├── public/
        ├── routes/
        ├── scripts/
        ├── services/
        ├── tests/
        └── utils/
```

## 4. Prérequis

Avant de démarrer l'application, les outils et services suivants sont nécessaires :

- [Node.js et npm](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [EMQX](https://www.emqx.com/)
- [Velxio – Simulateur ESP32](https://velxio.labslash.ovh/editor)
- Extension Thunder Client pour Visual Studio Code.

## 5. Installation et démarrage de l'application

### 5.1. Récupérer le projet

Cloner le dépôt GitHub :

```bash
git clone URL_DU_DEPOT
```

Accéder au dossier principal :

```bash
cd 420-317-AH
```

### 5.2. Accéder au serveur

Le serveur se trouve dans le répertoire `serveur`.

```bash
cd serveur
```

### 5.3. Installer les dépendances

Exécuter la commande suivante :

```bash
npm install
```

Cette commande installe les dépendances nécessaires au fonctionnement du serveur.

### 5.4. Configurer les variables d'environnement

Créer un fichier `.env` directement à la racine du dossier `serveur`.

Exemple de configuration :

```env
PORT=3000

JWT_SECRET=votre_cle_secrete

MONGODB_URI=votre_uri_mongodb_atlas

MQTT_BROKER=votre_adresse_broker_emqx
MQTT_USERNAME=votre_identifiant
MQTT_PASSWORD=votre_mot_de_passe
```

**Important :**

- Remplacer les valeurs d'exemple par les véritables informations de connexion.
- Vérifier les noms exacts des variables attendues dans le code source.
- Ne jamais publier le fichier `.env` sur GitHub.
- Ajouter `.env` dans le fichier `.gitignore`.

### 5.5. Démarrer le serveur

Depuis le dossier `serveur`, exécuter :

```bash
npm run dev
```

Le serveur démarre normalement à l'adresse :

http://localhost:3000

Vérifier les messages affichés dans le terminal pour confirmer le démarrage du serveur et la connexion aux services externes.

## 6. Configuration de MongoDB Atlas

MongoDB Atlas est utilisé pour stocker les informations des capteurs, les mesures et les données des utilisateurs.

### Étapes de configuration

1. Accéder à [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Créer un compte ou se connecter.
3. Créer un projet MongoDB.
4. Créer un cluster.
5. Configurer un utilisateur de base de données.
6. Autoriser l'adresse IP du serveur dans les paramètres réseau.
7. Récupérer l'URI de connexion MongoDB.
8. Ajouter cette URI dans le fichier `.env`.

<img width="1333" height="671" alt="image" src="https://github.com/user-attachments/assets/35db7ae3-3dde-4502-8777-123c81ef81ef" />

**Figure 1 — Tableau de bord MongoDB Atlas**

 

## 7. Configuration du broker MQTT EMQX

EMQX est utilisé comme broker MQTT pour assurer la communication entre l'ESP32 simulé et le serveur Node.js.

### Étapes de configuration

1. Accéder à [EMQX](https://www.emqx.com/).
2. Se connecter à son compte.
3. Créer ou ouvrir une instance de broker MQTT.
4. Récupérer l'adresse du broker.
5. Configurer les identifiants MQTT.
6. Vérifier le port de communication.
7. Ajouter les paramètres de connexion dans le fichier `.env`.
8. Vérifier la connexion du serveur Node.js au broker.

<img width="1353" height="672" alt="image" src="https://github.com/user-attachments/assets/9dc693af-cc55-4a92-806d-73688554b89b" />

**Figure 3 — Tableau de bord EMQX**


## 8. Émulation de la carte ESP32 avec Velxio

Dans le cadre du cours 420-317-AH au Collège Ahuntsic, l'émulation de la carte ESP32 est réalisée avec **Velxio**.

Velxio est un simulateur accessible directement dans un navigateur Web. Il permet d'exécuter le programme de la carte sans avoir besoin de matériel physique.

Le projet utilise un ESP32 simulé et un capteur DHT22 pour générer des données de température et d'humidité.

### 8.1. Accéder au simulateur

Ouvrir le simulateur à l'adresse suivante :

https://velxio.labslash.ovh/editor

Se connecter avec les identifiants fournis dans la documentation du cours.

### 8.2. Récupérer et importer le projet

1. Accéder à Léa et télécharger le fichier ZIP du projet Velxio de la séance 14.
2. Ne pas extraire le fichier ZIP : Velxio lit directement le fichier compressé.
3. Dans Velxio, sélectionner **Files → Import Project**.
4. Choisir le fichier ZIP téléchargé.
5. Une fois le projet ouvert, cliquer sur **Install all** pour installer les bibliothèques nécessaires.

Le projet contient notamment :

- Le programme de la carte ESP32 : `sketch.ino`.
- Le montage électronique simulé.
- Le capteur DHT22.

### 8.3. Configurer la connexion MQTT

Dans le fichier `sketch.ino`, modifier les paramètres suivants afin de les faire correspondre à la configuration EMQX.

| Paramètre | Description |
|---|---|
| `MQTT_HOST` | Adresse du broker EMQX, sans `mqtts://` ni port |
| `MQTT_PORT` | Port MQTT sécurisé, généralement `8883` |
| `MQTT_USER` | Nom d'utilisateur créé dans EMQX |
| `MQTT_PASS` | Mot de passe de l'utilisateur EMQX |
| `SENSOR_ID_TEMPERATURE` | Identifiant exact du capteur de température |
| `SENSOR_ID_HUMIDITY` | Identifiant exact du capteur d'humidité |
| `MQTT_CLIENT_ID` | Identifiant unique du client MQTT |

**Important :**

- Les identifiants des capteurs doivent correspondre exactement à ceux enregistrés dans le tableau de bord.
- Le `MQTT_CLIENT_ID` doit être unique sur le broker.
- Le Wi-Fi simulé utilise le réseau `Velxio-GUEST`, sans mot de passe. Il ne faut pas modifier ces paramètres.

### 8.4. Lancer la simulation

Après la configuration :

1. Démarrer la simulation dans Velxio.
2. Ouvrir la console série.
3. Vérifier la connexion Wi-Fi.
4. Vérifier la connexion au broker MQTT.
5. Observer les mesures de température et d'humidité publiées.

### 8.5. Vérifier les erreurs MQTT

Les codes d'erreur suivants peuvent apparaître dans la console série :

| Code | Signification |
|---|---|
| `-2` | Problème lié à l'hôte, au port ou au protocole |
| `4` | Identifiants MQTT refusés |
| `5` | Connexion non autorisée |

En cas d'erreur, vérifier les paramètres de connexion dans `sketch.ino` et les autorisations configurées dans EMQX.

### 8.6. Vérifier la réception des mesures

Une fois la simulation lancée :

1. Vérifier que l'ESP32 est connecté au broker EMQX.
2. Vérifier que les messages MQTT sont publiés.
3. Vérifier que le serveur Node.js reçoit les mesures.
4. Vérifier que les mesures sont enregistrées dans MongoDB Atlas.
5. Consulter les données sur le tableau de bord.

**Figure 5 — Simulateur ESP32 avec Velxio**

 <img width="1356" height="675" alt="image" src="https://github.com/user-attachments/assets/178859d8-c2da-4990-95ff-2b81064d5744" />


Le tableau de bord permet de suivre les données des capteurs et de visualiser les informations en temps réel.

Les principales fonctionnalités sont :

- Consultation des capteurs enregistrés.
- Visualisation des mesures de température et d'humidité.
- Suivi des données en temps réel.
- Consultation de l'historique.
- Affichage des statistiques.
- Surveillance des seuils.
- Activation et désactivation des capteurs.

Accéder à l'application :

http://localhost:3000

Cette adresse suppose que le serveur Express distribue les fichiers du tableau de bord.

**Figure 6 — Tableau de bord de supervision**

<img width="1327" height="636" alt="image" src="https://github.com/user-attachments/assets/61ab87a3-1a2f-4928-808a-7cee7d4acda1" />


## 10. Tester l'API avec Thunder Client

Thunder Client permet de tester les différentes routes de l'API REST depuis Visual Studio Code.

**Adresse de base :**

```text
http://localhost:3000
```

Pour les routes protégées, sélectionner :

- Auth : Bearer
- Token : le JWT obtenu après la connexion.

### 10.1. Connexion

- **Méthode :** POST
- **URL :**

```text
http://localhost:3000/api/auth/login
```

**Body → JSON :**

```json
{
  "email": "VOTRE_EMAIL_ADMIN",
  "password": "VOTRE_MOT_DE_PASSE"
}
```

Récupérer le jeton JWT retourné par l'API.

### 10.2. Consulter les capteurs

- **Méthode :** GET
- **URL :**

```text
http://localhost:3000/api/sensors
```

Résultat attendu : la liste des capteurs enregistrés.

### 10.3. Créer un capteur

- **Méthode :** POST
- **URL :**

```text
http://localhost:3000/api/sensors
```

**Body → JSON :**

```json
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
```

### 10.4. Modifier un capteur

- **Méthode :** PUT
- **URL :**

```text
http://localhost:3000/api/sensors/ID_DU_CAPTEUR
```

**Body → JSON :**

```json
{
  "name": "Température du local"
}
```

Remplacer `ID_DU_CAPTEUR` par l'identifiant MongoDB du capteur.

### 10.5. Désactiver un capteur

- **Méthode :** PUT
- **URL :**

```text
http://localhost:3000/api/sensors/ID_DU_CAPTEUR
```

**Body → JSON :**

```json
{
  "active": false
}
```

Vérifier que le panneau du capteur disparaît du tableau de bord et que les mesures continuent d'être enregistrées, conformément aux exigences du projet.

### 10.6. Réactiver un capteur

- **Méthode :** PUT
- **URL :**

```text
http://localhost:3000/api/sensors/ID_DU_CAPTEUR
```

**Body → JSON :**

```json
{
  "active": true
}
```

Vérifier que le panneau réapparaît et que l'historique des mesures est conservé.

### 10.7. Consulter les mesures

- **Méthode :** GET
- **URL :**

```text
http://localhost:3000/api/measures?sensor=ID_DU_CAPTEUR&limit=20
```

Cette requête permet de consulter les 20 dernières mesures d'un capteur.

### 10.8. Consulter les statistiques

- **Méthode :** GET
- **URL :**

```text
http://localhost:3000/api/measures/stats?sensor=hum-b127
```

Cette requête permet de consulter les statistiques du capteur concerné.

### 10.9. Supprimer un capteur

- **Méthode :** DELETE
- **URL :**

```text
http://localhost:3000/api/sensors/ID_DU_CAPTEUR
```

Remplacer `ID_DU_CAPTEUR` par l'identifiant MongoDB du capteur à supprimer.

## 11. Fonctionnalités principales

Le système de supervision propose les fonctionnalités suivantes :

- Gestion des capteurs : création, consultation, modification et suppression.
- Activation et désactivation des capteurs.
- Acquisition des données avec ESP32 simulé.
- Simulation des mesures avec le capteur DHT22.
- Transmission des données par MQTT.
- Communication avec le broker EMQX.
- Enregistrement des mesures dans MongoDB Atlas.
- Visualisation des mesures en temps réel.
- Consultation de l'historique des mesures.
- Affichage des statistiques.
- Surveillance des seuils et détection des dépassements.
- Authentification et sécurisation des routes avec JWT.

## 12. Dépannage

### Erreur : JWT_SECRET absent

Vérifier que le fichier `.env` existe à la racine du dossier `serveur` et que la variable `JWT_SECRET` est définie.

### Erreur de connexion MongoDB

Vérifier :

- L'URI MongoDB Atlas.
- Les identifiants de connexion.
- Les autorisations réseau.
- La disponibilité du cluster.

### Erreur de connexion MQTT

Vérifier :

- L'adresse du broker EMQX.
- Le port MQTT.
- Les identifiants de connexion.
- Le protocole utilisé.
- Les paramètres de connexion dans `sketch.ino`.

### Les mesures ne s'affichent pas

Vérifier :

- La simulation ESP32 dans Velxio.
- La connexion au broker EMQX.
- La publication des messages MQTT.
- La réception des messages par le serveur Node.js.
- L'enregistrement des données dans MongoDB Atlas.
- La connexion du tableau de bord.

### Erreur de dépendances Node.js

Depuis le dossier `serveur`, exécuter :

```bash
npm install
```

---

## 13. Informations sur le projet

**Cours :** 420-317-AH  
**Établissement :** Collège Ahuntsic  
**Projet :** Système de supervision en temps réel  
**Microcontrôleur :** ESP32 (émulé avec Velxio)  
**Capteur :** DHT22  
**Serveur :** Node.js / Express.js  
**Base de données :** MongoDB Atlas  
**Communication :** MQTT / EMQX  
**Interface :** HTML / CSS / JavaScript

Projet réalisé dans le cadre du cours 420-317-AH au Collège Ahuntsic.
