const sql = require("./db.js");

// constructor
const Buecher = function(buecher) {
    this.id = buecher.id;
    this.titel = buecher.titel;
    this.kurzbeschreibung = buecher.kurzbeschreibung;
    this.genre = buecher.genre;
    this.status = buecher.status;
};

Buecher.create = (newBuecher, result) => {
    sql.query("INSERT INTO buecher SET ? ", newBuecher, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created Buecher: ", { id: res.insertId, ...newBuecher });
        result(null, { id: res.insertId, ...newBuecher });
    });
};

Buecher.findById = (buecherId, result) => {
    sql.query(`SELECT * 
               FROM buecher
               WHERE id = ${buecherId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found buecher: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Inhalt with the id
        result({ kind: "not_found" }, null);
    });
};

Buecher.findByGenre = (buecherGenre, result) => {
    sql.query(`SELECT * FROM buecher WHERE genre = ${buecherGenre}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found buecher: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Inhalt with the genre
        result({ kind: "not_found" }, null);
    });
};


Buecher.findByStatus = (buecherStatus, result) => {
    sql.query(`SELECT * FROM buecher WHERE status = ${buecherStatus}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found buecher: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Inhalt with the status
        result({ kind: "not_found" }, null);
    });
}

Buecher.getAll = (result) => {
    sql.query("SELECT * FROM buecher;", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("buecher: ", res);
        result(null, res);
    });
};

Buecher.updateById = (id, buecher, result) => {
    sql.query(
        "UPDATE buecher SET titel = ?, kurzbeschreibung = ?, genre = ?,status = ?, WHERE id = ?",
        [buecher.titel, buecher.kurzbeschreibung, buecher.genre, buecher.status, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Buecher with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated buecher: ", { id: id, ...buecher });
            result(null, { id: id, ...buecher });
        }
    );
};

Buecher.remove = (id, result) => {
    sql.query("DELETE FROM buecher WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Inhalt with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted buecher with id: ", id);
        result(null, res);
    });
};

Buecher.removeAll = result => {
    sql.query("DELETE FROM buecher", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} buecher`);
        result(null, res);
    });
};

module.exports = Buecher;