var express = require('express');
var connection = require('../MySQL-db');
var router = express.Router();
const axios = require('axios');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM DB_15_08.command_08_1;', function(err, result) {
        res.send(result);
    })
});


// router.post('/EnrollFace', function(req, res, next) {
//     axios.post('http://192.168.0.2:5050/regist_face', {
//             member_id: req.body.member_id,
//         })
//         .then(response => {
//             console.log(response, "결과입니다")
//             res.send(response.data)
//         })
//         .catch(function(error) {
//             console.log(error);
//         });
// });

router.get('/speed', function(req, res, next) {
    connection.query('SELECT * FROM DB_15_08.sensing_08_1', function(err, result) {
        res.send(result)
    })

});

router.get('/angle', function(req, res, next) {
    connection.query('SELECT * FROM DB_15_08.sensing_08_1', function(err, result) {
        res.send(result)
    })

});

router.get('/temp', function(req, res, next) {
    connection.query('SELECT * FROM DB_15_08.sensing_08_1', function(err, result) {
        res.send(result)
    })

});


module.exports = router;