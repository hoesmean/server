const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.get('/', (req, res) => {
    User.findAll()
    .then(User => {
        res.json(User);
    })
    .catch(err => {
        console.log(err);
    })
});

router.post('/', (req, res)=> {
    User.create({
        email: req.body.email,
        password: req.body.password
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
    res.send(req.body);
});

router.get('/:id', (req,res) => {
    User.findByPk(req.params.id)
    .then(User => {
        res.json(User);
    })
    .catch(err => {
        console.log(err);
    })
})


module.exports = router;