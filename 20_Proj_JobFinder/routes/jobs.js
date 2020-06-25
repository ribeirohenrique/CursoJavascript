const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

//Testar rota
router.get('/test', (req, res) => {
    res.send("Deu certo");
})

//Adicionar Job via post
router.post('/add', (req, res) => {
    let {title, salary, company, description, email, newjob} = req.body;

    //Insert
    Job.create({
        title,
        salary,
        company,
        description,
        email,
        newjob,
    })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));

});

module.exports = router;
