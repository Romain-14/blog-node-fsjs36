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

Si pas fait du jour 1:
- la page d'accueil affiche chaque article avec le titre, l'auteur, la date et une image
- la page d'un article affiche l'article en entier : description (content) en plus
- lien retour vers l'accueil dans la page article(une story)

Ajout :
Fonctionnalités
- formulaire d'ajout d'un article
- écriture dans le fichier json
- router ?

Pages :
- Admin
    - un formulaire permettra à l'administrateur d'ajouter un article 

Ajouter dans la navigation un lien vers le panneau admin pour faciliter le développement

### Détail

1. Voir ligne 50 à 52
2. supprimer le fichier json, n'ajouter que : `{ "stories": [] }`
2. créer le fichier admin.ejs
3. créer la route d'accès à la page admin
    - envoi du fichier de vue Admin
4. créer le formulaire d'ajout d'article
    - input text pour le `title`
    - textarea pour le `content`
    - input text pour l'`img_src` (2ème partie de node pour gérer l'ajout réel d'image)
        - ajouter un attribut value avec le nom de votre image placeholder ça évitera les manip'
    - input text pour l'`author`
    - input date pour la `publishTime`
5. créer la route d'ajout d'article (méthode `post`)
    - récupération des données du formulaire
    - écriture dans le fichier json du nouvel article
        - l'`id` se doit d'être unique, il sera équivalent à la longueur du tableau story + 1
        - les autres propriétés vont être celles des inputs/textarea
    - quand l'insertion d'un article se passe bien, faire en sorte de combiner les anciens articles plus le nouveau


## Jour 3

Configuration & modules
- Controller
- Model