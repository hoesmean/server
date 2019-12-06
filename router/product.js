const express = require('express');
const router = express.Router();
const Product = require('../model/product');
router.get('/', (req, res) => Product.findAll());


    router.post('/', (req, res)=> {
        const result = Product.build ({
            desc: req.body.desc
        })
        const finalResult = result.save()
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })
        res.send(req.body);
    });



module.exports = router;