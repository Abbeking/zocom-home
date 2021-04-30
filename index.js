const { app } = require('./core'); 
const { db, update } = require('./db')


// Server startar
app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')

})

/* CODE YOUR API HERE */


// Arber Sefa
// Här visas endast all JSON.
// http://localhost:3000/db
app.get('/db', (req, res) => {
    
    db.get('devices')

    res.json(db)
}) 

// Jag kör med if-statements, borde också funka med ternary operator och switch statement.

// Här skriver jag en del URL, för att det ska gå fortare att kopiera.
/**************** FÖR ATT STÄNGA AV, SKRIV BARA /OFF ISTÄLLET FÖR /ON****************/
// http://localhost:3000/vacuum/VAC1/on
// http://localhost:3000/light/LIG1/on
// http://localhost:3000/light/LIG2/on
// http://localhost:3000/light/LIG3/on 
// http://localhost:3000/camera/CAM1/on
// http://localhost:3000/speaker/SPE1/on
// http://localhost:3000/blind/BLI1/on
// http://localhost:3000/ac/AC1/on
// http://localhost:3000/lock/LOC1/on




// Skriv "http://localhost:3000/vacuum/VAC1/on" för att starta robotdammsugaren
// Ifall du vill stänga av så skriver du http://localhost:3000/vacuum/VAC1/(valfri text) t.ex /off
app.get("/vacuum/:id/:on", (req, res) => {
    let id = req.params.id;
    // lägger req.params.on === "on" till variabeln vacuumCheck
    let vacuumCheck = req.params.on === "on" 
    // if-statement kollar om vacuumCheck är true, annars är den false
    if (vacuumCheck) {
        true;
    } else {
        false;
    }

    // här får man upp en lista inom devices från db.json
    db.get("devices")
    // därefter så kollar .find efter den specifika id:n som skrivs in på URL:en
    .find({ id: id })
    // sedan så aktiverar .assign det som har skrivits nedan.
    .assign({ on: vacuumCheck })
    .value();
    update();
  
    res.send({
         msg: `${id} är nu ${vacuumCheck}` 
        });
  });




  
// ---------- Här kan du aktivera LIG1, LIG2 & LIG3 lampan. Då kommer det lysa lila.----------
// Skriv http://localhost:3000/light/LIG1/on
// http://localhost:3000/light/LIG2/on
// http://localhost:3000/light/LIG3/on                 ---------       för att tända lamporna.
// Ifall du vill stänga av så skriver du http://localhost:3000/light/LIG1/(valfri text) t.ex /off
app.get("/light/:id/:on", (req, res) => {
    let id = req.params.id;
    // lägger req.params.on === "on" till variabeln lightCheck
    let lightCheck = req.params.on === "on" 
    // if-statement kollar om lightCheck är true, annars är den false
    if (lightCheck) {
        true;
    } else {
        false;
    }

    // här får man upp en lista inom devices från db.json
    db.get("devices")
    // därefter så kollar .find efter den specifika id:n som skrivs in på URL:en
    .find({ id: id })
    // sedan så aktiverar .assign det som har skrivits nedan.
    .assign({ on : lightCheck, brightness: 1.0, color: '#800080' })
    .value();

    update();
  
    res.send({
         msg: `${id} är nu ${lightCheck}` 
        });
  });






// Skriv "http://localhost:3000/camera/CAM1/on" för att starta igång kameran
// Ifall du vill stänga av så skriver du http://localhost:3000/camera/CAM1/(valfri text) t.ex /off
app.get("/camera/:id/:on", (req, res) => {
    let id = req.params.id;
    // lägger req.params.on === "on" till variabeln cameraCheck
    let cameraCheck = req.params.on === "on" 
    // if-statement kollar om cameraCheck är true, annars är den false
    if (cameraCheck) {
        true;
    } else {
        false;
    }

    // här får man upp en lista inom devices från db.json
    db.get("devices")
    // därefter så kollar .find efter den specifika id:n som skrivs in på URL:en
    .find({ id: id })
    // sedan så aktiverar .assign det som har skrivits nedan.
    .assign({ on: cameraCheck })
    .value();
    update();
  
    res.send({
         msg: `${id} är nu ${cameraCheck}` 
        });
  });




  // Skriv "http://localhost:3000/speaker/SPE1/on" för att starta högtalaren
// Ifall du vill stänga av så skriver du http://localhost:3000/speaker/SPE1/(valfri text) t.ex /off
app.get("/speaker/:id/:on", (req, res) => {
    let id = req.params.id;
    // lägger req.params.on === "on" till variabeln speakerCheck
    let speakerCheck = req.params.on === "on" 
    // if-statement kollar om speakerCheck är true, annars är den false
    if (speakerCheck) {
        true;
    } else {
        false;
    }

    // här får man upp en lista inom devices från db.json
    db.get("devices")
    // därefter så kollar .find efter den specifika id:n som skrivs in på URL:en
    .find({ id: id })
    // sedan så aktiverar .assign det som har skrivits nedan.
    .assign({ on: speakerCheck })
    .value();
    update();
  
    res.send({
         msg: `${id} är nu ${speakerCheck}` 
        });
  });





  // Skriv "http://localhost:3000/blind/BLI1/on" för att rulla ned rullgardinen
// Ifall du vill stänga av så skriver du http://localhost:3000/blind/BLI1/(valfri text) t.ex /off
app.get("/blind/:id/:on", (req, res) => {
    let id = req.params.id;
    // lägger req.params.on === "on" till variabeln blindCheck
    let blindCheck = req.params.on === "on" 
    // if-statement kollar om blindCheck är true, annars är den false
    if (blindCheck) {
        true;
    } else {
        false;
    }

    // här får man upp en lista inom devices från db.json
    db.get("devices")
    // därefter så kollar .find efter den specifika id:n som skrivs in på URL:en
    .find({ id: id })
    // sedan så aktiverar .assign det som har skrivits nedan.
    .assign({ on: blindCheck })
    .value();
    update();
  
    res.send({
         msg: `${id} är nu ${blindCheck}` 
        });
  });




    // Skriv "http://localhost:3000/ac/AC1/on" för att starta AC:n & ställa in på 27 celcius.
// Ifall du vill stänga av så skriver du http://localhost:3000/ac/AC1/(valfri text) t.ex /off
app.get("/ac/:id/:on", (req, res) => {
    let id = req.params.id;
    // lägger req.params.on === "on" till variabeln acCheck
    let acCheck = req.params.on === "on" 
    // if-statement kollar om acCheck är true, annars är den false
    if (acCheck) {
        true;
    } else {
        false;
    }

    // här får man upp en lista inom devices från db.json
    db.get("devices")
    // därefter så kollar .find efter den specifika id:n som skrivs in på URL:en
    .find({ id: id })
    // sedan så aktiverar .assign det som har skrivits nedan.
    .assign({ on: acCheck, temperature: "27" })
    .value();
    update();
  
    res.send({
         msg: `${id} är nu ${acCheck}` 
        });
  });









  // Skriv "http://localhost:3000/lock/LOC1/on för att öppna dörren
// Ifall du vill låsa igen så skriver du http://localhost:3000/lock/LOC1/(valfri text) t.ex /off
app.get("/lock/:id/:on", (req, res) => {
    let id = req.params.id;
    // lägger req.params.on === "on" till variabeln lockCheck
    let lockCheck = req.params.on === "on" 
    // if-statement kollar om lockCheck är true, annars är den false
    if (lockCheck) {
        true
    } else {
        false;
    }

    // här får man upp en lista inom devices från db.json
    db.get("devices")
    // därefter så kollar .find efter den specifika id:n som skrivs in på URL:en
    .find({ id: id })
    // sedan så aktiverar .assign det som har skrivits nedan.
    .assign({ on: lockCheck, locked: lockCheck })
    .value();
    update();
  
    res.send({
         msg: `${id} är nu ${lockCheck}` 
        });
  });
