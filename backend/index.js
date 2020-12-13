#!/usr/bin/env node
"use strict";
const cfg = require("./config");

const fs = require('fs');
process.chdir(cfg.CWD);

const express = require("express");

let app = express();
app.set("trust proxy", cfg.PROXY);
app.listen(cfg.PORT, cfg.ADDRESS, function () {
    console.log(`Listening on ${cfg.PORT}.`);
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors())

app.get("/read", (req, res) => {
    var file = req.headers.file;
    fs.readFile(file, (err, data) => {
        if (err) res.status(404).send(`File ${file} not found.`);
        res.send(data);
    });
});

app.post("/save", (req, res) => {
    var { subdir, file, data } = req.body;

    if (!data) res.status(400).send("Nothing to save.");

    if (subdir && !fs.existsSync(subdir)) fs.mkdirSync(subdir);

    if (!file.endsWith('.txt')) file = file + '.txt';
    var filePath = (subdir) ? `${subdir}/${file}` : file;

    if (fs.existsSync(filePath)) {
        // file exists, append content
        fs.appendFile(filePath, '\n\n' + data, 'utf8', (err) => {
            if (err) throw err;
            res.send(`Saved data to ${cfg.CWD}/${subdir}/${file}`)
        });
    }
    else {
        // file exists, write content
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (err) throw err;
            res.send(`Saved data to ${cfg.CWD}/${subdir}/${file}`)
        });
    }
})