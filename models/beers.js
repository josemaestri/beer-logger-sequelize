module.exports = function(sequelize,DataTypes){
  var beers = sequelize.define('beers',{
    beer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,255] 
      }
    },
    consumed:{
      type: DataTypes.BOOLEAN,
      allowNull: null,
      defaultValue: false
    }
  });

  return beers;
};