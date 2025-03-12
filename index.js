/* 
Esercizio
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post. */

const express = require('express')
const app = express()
const port = 3002
//allows  litsen to server
app.listen(port, () => { })
//allows the viewing of static elements
app.use(express.static('public'))
//request to the server
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})
app.get('/bacheca', (req, res) => {
    const posts = [
        {
            title: "ciambellone",
            content: "dolce",
            image: "/images/ciambellone.jpeg",
            tags: ["cioccolato", "farina", "uova", "acqua"]
        }, {
            title: "cracker di barbabietola",
            content: "snack",
            image: "/images/cracker_barbabietola.jpeg",
            tags: ["farina", "barbabietola", "sale", "acqua"]
        }, {
            title: "pane fritto dolce",
            content: "pane",
            image: "/images/pane_fritto_dolce.jpeg",
            tags: ["farina", "acqua", "zucchero", "uova"]
        }, {
            title: "pasta di barbabietole",
            content: "pasta",
            image: "/images/pasta_barbabietola.jpeg",
            tags: ["farina", "barbabietola", "acqua", "uova"]
        }, {
            title: "torta paesana",
            content: "dolce",
            image: "/images/torta_paesana.jpeg",
            tags: ["farina", "uova", "zucchero", "acqua"]
        },
    ]
    res.send(posts)
})
