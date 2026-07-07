const express = require('express');
const router = express.Router();
//KI genutzt
// Unsere leere Liste, in der wir später alle Blog-Einträge speichern
let posts = [];
let nextID = 1;

// ROUTE 1: "/" über GET
router.get('/', function(req, res) {
  // Laut Aufgabe sollen alle gespeicherten Posts auf der Konsole ausgegeben werden
  console.log("Aktuelle Blog-Einträge:", posts);
  
  // Dem Browser schicken wir eine kleine Antwort, damit er nicht ewig lädt
  res.send("Die GET-Route für den Blog funktioniert! Schau in dein Terminal.");
});

router.post('/', function(req, res) {
  let postTitle = req.body.title;
  let postAuthor = req.body.author;
  let postText = req.body.text;
  let postDate = new Date();
  let neuerPost = {
    id: nextID,
    date: postDate,
    author: postAuthor,
    title: postTitle,
    text: postText
  };
  posts.push(neuerPost);
  nextID = nextID + 1;
  res.send(neuerPost);
});

router.get('/:postID', function(req, res) {
  let suchID = req.params.postID;
  let gefundenerPost = posts.find(post => post.id == suchID);
  if (gefundenerPost == undefined) {
    res.send("Kein Eintrag gefunden!");
  }
  else {
    let ausgabePost = {
      id: gefundenerPost.id,
      title: gefundenerPost.title,
    }
    res.send(ausgabePost);
  }
});

// Diese Zeile MUSS immer ganz unten stehen, damit die app.js den Router findet!
module.exports = router;