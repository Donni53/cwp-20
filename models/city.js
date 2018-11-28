module.exports = (Sequelize, sequelize) => {
    return sequelize.define('city', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type:Sequelize.STRING(35),
            validate: {
                notEmpty: true
            },
            allowNull: false
        },
        countryCode: {
            type:Sequelize.STRING(3),
            validate: {
                notEmpty: true
            },
            allowNull: false
        },
        district: {
            type:Sequelize.STRING(20),
            validate: {
                notEmpty: true
            },
            allowNull: false
        },
        population: {
            type:Sequelize.INTEGER,
            validate: {
                notEmpty: true
            },
            defaultValue: 0,
            allowNull: false
        }
    },
        {
            tableName: 'city'
        });
};