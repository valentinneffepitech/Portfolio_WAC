# Portfolio - Laravel + Inertia.js + React (Docker)

Bienvenue sur le projet de **Portfolio** développé avec [Laravel](https://laravel.com/), [Inertia.js](https://inertiajs.com/), et [React](https://reactjs.org/), avec une configuration Docker pour une installation et une gestion facilitées.

## Fonctionnalités

- **Laravel** pour la gestion du backend et des API.
- **Inertia.js** pour une navigation fluide entre les pages sans rechargement complet.
- **React** en tant que framework frontend pour des composants dynamiques et interactifs.
- **Docker** pour simplifier l’environnement de développement.
- Gestion des **projets**, **compétences**, et **contacts** à afficher sur le portfolio.
- Système d'authentification complet (ajout de compte, connexion, réinitialisation du mot de passe).
- **Formulaires interactifs**, validation en temps réel.
- Gestion des **uploads d’images**.
- Tableau de bord pour administrer le portfolio.

## Prérequis

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

1. Clonez le dépôt :

    ```bash
    git clone https://github.com/valentinneffepitech/Portfolio_WAC.git
    ```

2. Accédez au répertoire du projet :

    ```bash
    cd Portfolio_WAC
    ```

3. Copiez le fichier `.env.example` pour créer un fichier `.env` :

    ```bash
    cp .env.example .env
    ```

    Mettez à jour les variables d'environnement si nécessaire (base de données, mail, etc.).

    Attention à bien ajouter et renseigner MAIL_TO_NOTIFY & APP_PASSWORD dans .env avec l'adresse mail à     
    laquelle les demandes de contact seront envoyées et le mot de passe qui vous permettront d'accéder au back- 
    office de l'application.

5. Lancez les conteneurs Docker avec **Docker Compose** :

    ```bash
    docker-compose up -d
    ```

    Cela va démarrer les services suivants :
    - **[nom du container]** : Le serveur Laravel.
    - **db** : Le serveur MySQL.

6. Installez les dépendances PHP à l'intérieur du conteneur Laravel :

    ```bash
    docker-compose exec [nom du container] composer install
    ```

7. Installez les dépendances JavaScript à l'intérieur du conteneur Laravel :

    ```bash
    docker-compose exec [nom du container] npm install
    ```

8. Compilez les assets front-end (React) à l'intérieur du conteneur :

    ```bash
    docker-compose exec [nom du container] npm run dev
    ```

9. Exécutez les migrations pour la base de données :

    ```bash
    docker-compose exec [nom du container] php artisan migrate
    ```

10. Générez la clé d'application Laravel :

    ```bash
    docker-compose exec [nom du container] php artisan key:generate
    ```

11. Accédez à votre application sur [http://localhost:8080](http://localhost:8080).

## Commandes Utiles

- **Démarrer les conteneurs :**

    ```bash
    docker-compose up -d
    ```

- **Arrêter les conteneurs :**

    ```bash
    docker-compose down
    ```

- **Exécuter des commandes artisan :**

    ```bash
    docker-compose exec [nom du container] php artisan <commande>
    ```

- **Accéder à un shell dans le conteneur Laravel :**

    ```bash
    docker-compose exec [nom du container] bash
    ```

## Structure du projet

- **/app** : Contient les fichiers backend Laravel.
- **/resources/js** : Contient les composants React.
- **/routes/web.php** : Fichier des routes web.
- **/docker-compose.yml** : Fichier de configuration Docker.
- **/Dockerfile** : Définition du conteneur Laravel.
