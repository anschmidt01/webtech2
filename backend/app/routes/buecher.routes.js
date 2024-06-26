module.exports = app => {
    const buecher = require("../controller/buecher.controller.js");

    // Create a new Inhalt
    app.post("/buecher", buecher.create);

    // GET all Inhalt
    app.get("/buecher", buecher.findAll);

    // GET one single Inhalt with inhaltId
    app.get("/buecher/:buecherId", buecher.findOne);

    // GET  Inhalt with inhaltGenre
    app.get("/buecher/genre/:buecherGenre", buecher.findByGenre);

    // GET  Inhalt with inhaltStatus
    app.get("/buecher/status/:buecherStatus", buecher.findByStatus);

    // Update one Inhalt with inhaltId
    app.put("/buecher/:buecherId", buecher.update);

    // Delete the Inhalt with inhaltId
    app.delete("/buecher/:buecherId", buecher.delete);

    // Delete all Inhalt
    app.delete("/buecher", buecher.deleteAll);
};