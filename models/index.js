const City = require('./city');
const Country = require('./country');
const CountryLanguage = require('./countryLanguage');


module.exports = (Sequelize, config) => {
    const dbOptions = {
        host: config.db.host,
        dialect: 'mysql',
        define: {
            timestamps: false,
            paranoid: false
        }
    };
    const sequelize = new Sequelize(config.db.name, config.db.user, config.db.pass, dbOptions);
    sequelize
        .authenticate()
        .then(function() {
            console.log('Connected');
        })
        .catch(function (err) {
            console.log('Error:', err);
        });
    const city = City(Sequelize, sequelize);
    const country = Country(Sequelize, sequelize);
    const countryLanguage = CountryLanguage(Sequelize, sequelize);

    country.hasMany(city, {foreignKey: 'countryCode'});
    country.hasMany(countryLanguage, {foreignKey: 'countryCode'});
    city.belongsTo(country, {as: 'country'});

    return {
        city,
        country,
        countryLanguage,
        sequelize: sequelize,
        Sequelize: Sequelize,
    };
};