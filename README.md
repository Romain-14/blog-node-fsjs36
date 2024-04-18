# FIL ROUGE -> BLOG

Durant 3 jours l'objectif sera de progresser sur un site web type blog, thème de votre choix.
Chaque jour, vous apprendrez des nouvelles fonctionnalités qu'il va falloir intégrer à votre site.

## Jour 1

Configuration && modules :
- nodemon
- express
- ejs
- type module (esm)
- lecture d'un fichier de données json

Pages :
- Accueil 
    - va lister une partie de chaque article.
- Story (non navigable)
    - Affichage de la totalité de l'article sur lequel l'utilisateur vient de cliquer.
- Not-Found
    - une image ou du texte indiquant le 404 page non trouvé !

### Détail

Configuration du serveur
1. initialisation du dossier
2. installation des modules
    - express, ejs, jsonfile
    - nodemon en devDependance
3. configuration du package.json
    - les lignes de script start/dev
    - définir le type module (ESM)
4. créer la structure du serveur
    - fichier principal, dossiers, sous-dossiers
5. importer les données requises dans les bons dossiers
    - fichier de données json
6. faire un premier fichier ejs simple pour la page d'accueil
7. passer à la configuration du serveur (fichier principal)
    - import et création de l'objet express
    - configurer avec les méthodes "set" le moteur de rendu ejs
    - créer la route "/", "répondre" avec la méthode render d'express le ficher créer au point N°6
    - appliquer la méthode listen sur l'objet express
8. Démarrer le serveur avec la ligne de script nodemon

9. + dans la route de la page d'accueil ("/"), lire le fichier stories.json avec la méthode readFile du module "jsonfile", sa callback répondra avec la méthode render en transmettant l'argument du paramètre de cette callback contenant les données du fichier


## Jour 2

Configuration & modules
- formulaire 
- router
- écriture dans le fichier json

Pages :
- Admin
    - un formulaire permettra à l'utilisateur d'ajouter un article 

## Jour 3

Configuration & modules
- Controller
- Model