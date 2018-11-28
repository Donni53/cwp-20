module.exports = (Sequelize, sequelize) => {
    return sequelize.define('country', {
        code: {
            type: Sequelize.STRING(3),
            primaryKey: true,
            allowNull: false
        },
        name: {
            type:Sequelize.STRING(52),
            validate: {
                notEmpty: true
            },
            allowNull: false
        },
        continent: {
            type:Sequelize.ENUM('Asia','Europe','North America','Africa','Oceania','Antarctica','South America'),
            allowNull: false,
            defaultValue: 'Asia'
        },
        region: {
            type:Sequelize.STRING(26),
            validate: {
                notEmpty: true
            },
            allowNull: false
        },
        surfaceArea: {
            type:Sequelize.FLOAT(10, 2),
            allowNull: false,
            defaultValue: 0.00
        },
        indepYear: {
            type:Sequelize.INTEGER(6),
        },
        population: {
            type:Sequelize.INTEGER(11),
            allowNull: false,
            defaultValue: 0
        },
        lifeExpectancy: {
            type:Sequelize.FLOAT(3,1)
        },
        GNP: {
            type:Sequelize.FLOAT(10, 2)
        },
        GNPOld: {
            type:Sequelize.FLOAT(10, 2)
        },
        localName: {
            type:Sequelize.STRING(45),
            allowNull: false
        },
        governmentForm: {
            type:Sequelize.STRING(45),
            notNull: true
        },
        headOfState: {
            type:Sequelize.STRING(60)
        },
        capital: {
            type:Sequelize.INTEGER(11)
        },
        code2: {
            type:Sequelize.STRING(2),
            allowNull: false
        }
    },
        {
            tableName: 'country'
        });
};