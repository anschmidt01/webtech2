const Buecher = require("../model/buecher.model.js");

// Create and Save a new Inhalt
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Inhalt
    const buecher = new Buecher({
        titel: req.body.titel,
        kurzbeschreibung: req.body.kurzbeschreibung,
        genre: req.body.genre,
        status: req.body.status,
    });

    // Save Customer in the database
    Buecher.create(buecher, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Buecher."
            });
        else res.send(data);
    });
};

// Retrieve all Inhalt from the database.
exports.findAll = (req, res) => {
    Buecher.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Buecher."
            });
        else res.send(data);
    });
};

// Find a single Inhalt with a inhaltId
exports.findOne = (req, res) => {
    Buecher.findById(req.params.buecherId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Inhalt with id ${req.params.buecherId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Buecher with id " + req.params.buecherId
                });
            }
        } else res.send(data);
    });
};

exports.findByGenre = (req, res) => {
    Buecher.findByGenre(req.params.buecherGenre, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Buecher with genre ${req.params.buecherGenre}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Buecher with genre " + req.params.buecherGenre
                });
            }
        } else res.send(data);
    });
};




exports.findByStatus = (req, res) => {
    Buecher.findByStatus(req.params.buecherStatus, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Buecher with status ${req.params.buecherStatus}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Buecher with status " + req.params.buecherStatus
                });
            }
        } else res.send(data);
    });
};
// Update a Inhalt identified by the inhaltId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const buecher = new Buecher({
        titel: req.body.titel,
        kurzbeschreibung: req.body.kurzbeschreibung,
        genre: req.body.genre,
        status: req.body.status,
    });

    Buecher.updateById(
        req.params.buecherId,
        new Buecher(req.body),
        
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Buecher with id ${req.params.buecherId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Buecher with id " + req.params.buecherId
                    });
                }
            } else res.send(data);
        }
    );
};
// Delete a Inhalt with the specified inhaltId in the request
exports.delete = (req, res) => {
    Buecher.remove(req.params.buecherId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Buecher with id ${req.params.buecherId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Buecher with id " + req.params.buecherId
                });
            }
        } else res.send({ message: `Buecher was deleted successfully!` });
    });
};

// Delete all Inhalt from the database.
exports.deleteAll = (req, res) => {
    Buecher.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Buecher."
            });
        else res.send({ message: `All Buecher were deleted successfully!` });
    });
};
