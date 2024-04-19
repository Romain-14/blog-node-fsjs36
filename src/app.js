import express from "express";
import path from "path";
import jsonfile from "jsonfile";

const app = express();
const PORT = 8000;

// stockage du chemin du fichier JSON dans une constante
const file = path.join(process.cwd(), "/src/data/stories.json");
// cette fois ci, on n'utilise pas la méthode readFileSync pour lire le contenu du fichier JSON
// on le fait dans les routes
// car on veut que sur chaque requête, le contenu du fichier soit mis à jour
// et donc qu'on ait toujours les dernières données
// on ne veut pas que les données soient figées dans le temps
// les const sont figées dans le temps, on ne peut pas les modifier
// de plus dans l'environnement serveur les const sont initialisées une seule fois au démarrage du serveur
// const datas = jsonfile.readFileSync(file);

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "/src/views"));

app.use(express.static(path.join(process.cwd(), "/public")));
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
	const datas = jsonfile.readFileSync(file);
	const stories = datas.stories;
	res.render("index", {
		title: "Bienvenue sur mon blog, lisez de fantastiques récits sur mes voyages ! - Accueil",
		stories,
	});
});

app.get("/story/:id", (req, res) => {
	const datas = jsonfile.readFileSync(file);
	const id = Number(req.params.id);
	const stories = datas.stories;
	const story = stories.find((story) => story.id === id);
	
	res.render("story", {
		title: `bienvenue sur l'article de mes vacances en ${story.title} - Page story`,
		story,
	});
});

app.get("/admin", (req, res) => {
	res.render("admin", { title: "Espace administrateur" });
});

app.post("/story/add", (req, res) => {
	const datas = jsonfile.readFileSync(file);
	console.log(req.body.title);
	console.log(req.body.content);
	// et ainsi de suite pour chaque champs du formulaire
	// pour créer un nouvel objet plus lisible issue de données du formulaire
	// on peut utiliser la déstructuration d'objet
	// à la différence de la déstructuration de tableau, on utilise les accolades
	// et on utilise les noms des propriétés de l'objet
	const { title, content, publishTime, author, img_src } = req.body;
	const newStories = {
	    stories: [
	        {
	            id: datas.stories.length + 1,
	            title,
	            content,
	            publishTime,
	            author,
	            img_src
	        }
	    ]
	};
	// écriture du fichier JSON avec les nouvelles données
	// on utilise la méthode writeFile qui prend en paramètre :
	// en premier le chemin du fichier
	// en deuxième le contenu à écrire
	// en troisième un objet de configuration (options)
	// en quatrième une fonction de callback qui prend en paramètre une erreur
	jsonfile.writeFile(file, newStories, { spaces: 4, EOL: "\r\n"}, (err) => {
		// si une erreur est retournée, on l'affiche dans la console est le return permet de sortir de la fonction donc pas de redirection
	    if (err) return console.error(err);
		// si tout est ok, on redirige vers la page d'accueil
		// la méthode redirect prend en paramètre le chemin de redirection
		// et effectue une redirection HTTP vers cette URL donc un nouveau cycle de requête/réponse
		// avec la méthode GET 
	    res.redirect("/");
	});
});

app.get("*", (req, res) => {
	res.render("not-found", {
		title: "Perdues au fin fond d'une prairie avec quelques moutons, il n'y a pas de document ici :(",
	});
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
