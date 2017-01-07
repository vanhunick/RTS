var express = require('express');
var router = express.Router();

var postgres = require('pg');
var postgresClient = new postgres.Client('postgres://postgres:admin@localhost:5432/Users');
postgresClient.connect();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
