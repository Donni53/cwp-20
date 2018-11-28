const express = require('express');
const router = express.Router();
const db = require('./db').db;

router.get('/:id.html', (req, res) => {
    (async ()=>{
        let city = await db.city.findOne({
            where:{
                id: req.params.id
            },
            include:[
                {
                    model: db.country,
                    as: 'country',
                    include:[{
                        model: db.countryLanguage,
                        where:{
                            isOfficial: 'T'
                        }
                    }]
                }
            ]
        });
        let capital = await db.city.findOne({where:{id: city.dataValues.country.capital}});
        res.render('cities', {city: city.dataValues, capital: capital});
    })();
});

module.exports = router;