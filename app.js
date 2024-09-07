const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars')
const port = 4000;
const app = express();



app.engine('handlebars', engine())
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname, "views"))

// Utilisation des dossiers static
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("home", {
        title: "Home"
    })
})
app.get("/about", (req, res) => {
    res.render("about", {
        title: "about"
    })
})
app.get("*", (req, res) => {
    res.render("404", {
        title: "404"
    })
})
app.use((req, res, next) => {
    res.status(404).send("Page non trouvée")
})

// Démarrage du serveur 
app.listen(port, () => {
    console.log(`Le serveur a été démarré avec succès sur le port ${port}`);
});
