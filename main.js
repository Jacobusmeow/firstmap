//alert("hello world");
let nachricht = "hallo welt";
//alert(nachricht);
nachricht = "neuer Text";
//alert(nachricht);
console.log(nachricht)
//farbe definieren
const linkColor ="#ff0000";
//varibalename darf nicht mit einer zahl beginnen, aber enthalten, typisch auf englisch, keine bindestriche. let als einleitung für eine variable muss nur beim ersten mal angeben werden.
let eine_variable = "testx";
console.log("Variable: eine_variable: ", eine_variable);
//zeichen-datentyp
let highScore = 75994;
console.log("Highscore ist: ", highScore / 20);
let meineNachricht = "test1";
console.log(meineNachricht);
meineNachricht = "test2"
console.log(meineNachricht);
meineNachricht = `Ein mehr
und 
ein 
ganz 
langer Textund aus`;
//für zeilenumbrüche braucht man das einfach Anführungszeichen 
console.log(meineNachricht);
let fullName = "Jeffrey `the Dude`Lebowsky";
console.log(fullName); 
let isOver18 = true;
console.log("über18?", isOver18);
let age = 17;
console.log("age über 18", age > 18);
//mehrere Datentypen zusammenfassen
let zahlenliste = [2, 11, 24, 33];
console.log(zahlenliste);
let namensListe = [ "Jane", "John", "Jacob"];
console.log(namensListe[0]);
//länge ausgeben
console.log(namensListe.length);
console.log("Anzahl der Namen: ", namensListe.length);
//datentyp objekt, darin können mehrere variablen gespeichert werden
let Benutzer = {
    vorname: "Jane",
    nachname: "Doe",
    alter: 28
};
console.log("Benutzer: ", Benutzer);
console.log("Benutzer Alter: ", Benutzer.alter);
//liste erweitern:
Benutzer.bestzeit = 200;
Benutzer["bestzeit ever"] = 100; 
console.log(Benutzer);
