module.exports = (Sequelize, sequelize) => {
    return sequelize.define('countryLanguage', {
        countryCode: {
            type: Sequelize.STRING(3),
            primaryKey: true,
            allowNull: false
        },
        language: {
            type:Sequelize.STRING(30),
            primaryKey: true,
            notNull: true
        },
        isOfficial: {
            type:Sequelize.ENUM('T', 'F'),
            defaultValue: 'F',
            allowNull: false
        },
        percentage: {
            type:Sequelize.FLOAT(4, 1),
            allowNull: false,
            defaultValue: 0.0
        }
    },
        {
            tableName: 'countrylanguage'
        });
};