import express from "express";
import path from "path";
import jsonfile from "jsonfile";

const app  = express();
const PORT = 8000;

const file  = path.join(process.cwd(), "/src/data/stories.json");
const datas = jsonfile.readFileSync(file); // version synchrone de readFile, évite de répéter la lecture du fichier à chaque requête

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "/src/views"));

app.use(express.static(path.join(process.cwd(), "/public")));


// Routes
app.get("/", (req, res) => {
    const stories = datas.stories;
    res.render("index", { title: "Bienvenue sur mon blog, lisez de fantastiques récits sur mes voyages ! - Accueil", stories });
});

// version route home avec le readFile en asynchrone
// app.get("/", (req, res) => {    
//     jsonfile.readFile(file , (error, datas) => {
//         if(err) {
//             console.log(error);
//             return;
//         }
//         const stories = datas.stories;
//         res.render("index", { title: "Bienvenue sur mon blog, lisez de fantastiques récits sur mes voyages ! - Accueil", stories});    
//     });
// });

// pour récupérer un paramètre de l'url dynamique, on utilise les 2 points ":" suivi du nom du paramètre
// ce nom ira dans req.params.nomDuParametre
// coté fichier ejs, on va utiliser l'id de l'article pour construire l'url
// <a href="/story/<%= story.id %>
// la valeur de href est envoyé en requête vers la serveur en conservant la même forme
app.get("/story/:id", (req, res)=> { 
    // tout ce qui vient de l'url est une String conversion ligne 38
    console.log(typeof req.params.id); // typeof permets de vérifier me type de donnée de la variable 
    
    const id = Number(req.params.id); // conversion en type Number
    const stories = datas.stories; // récupération des données du fichier json qu'on a besoin
    // utilisation le méthode find pour "trouver" l'objet qui correspond à l'id de l'article sur lequel l'utilisateur a cliqué
    const story   = stories.find(story => story.id === id);
    
    // envoyer un titre dynamique à la page story ( celui du head -> <title> )
    // plus envoi de la story 
    res.render("story", {title: `bienvenue sur l'article de mes vacances en ${story.title} - Page story`, story});
});

app.get("*", (req, res) => {
    res.render("not-found", { title: "Perdues au fin fond d'une prairie avec quelques moutons , il n'y a pas de document ici :(" });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
