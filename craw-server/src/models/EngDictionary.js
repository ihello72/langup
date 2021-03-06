// word( primary key, varchar(500))
module.exports = (sequelize, DataTypes) => {
    const EngDictionary = sequelize.define('EngDictionary', {
        word: {
            field: 'word',
            type: DataTypes.STRING(500),
            primaryKey: true,
        }
    }, {
        tableName: 'eng_dictionary',
        timestamps: false,
    });

    EngDictionary.associate = (models) => { // Define associate models.
        models.EngDictionary.hasMany(models.MeanDictionary, { as: 'meanDictionary', foreignKey: 'eng_word' });
    };

    return EngDictionary;
}