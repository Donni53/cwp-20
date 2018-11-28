const express = require('express');
const router = express.Router();
const db = require('./db').db;

router.get('/',  (req, res) => {
    db.country.findAll()
        .then(result =>
        {
            let page = req.query.page? req.query.page: 1;
            res.render('countries',
                {
                    pageNumber: page,
                    countries: result.slice(25 * (page - 1), 25 * page),
                    pageCount: Math.ceil(result.length / 25)
                });
        });
});

router.get('/:code.html', (req, res) => {
    (async ()=>{
        let country = await db.country.findOne({
            where: {
                Code: req.params.code
            },
            include:[
                {
                    model: db.city,
                    limit: 3,
                    order:[[db.sequelize.col('population'), 'DESC']]
                },
                {
                    model: db.countryLanguage,
                    limit: 3,
                    order:[[db.sequelize.col('percentage'), 'DESC']]
                }
            ]
        });
        let capital = await db.city.findOne({where:{id: country.dataValues.capital}});
        res.render('country',
            {
                country: country.dataValues,
                capital: capital.dataValues
            });
    })();
});

module.exports = router;