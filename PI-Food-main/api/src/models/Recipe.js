const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
   
    id: {      
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    image: {
      type: DataTypes.TEXT
     
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    healthScore:{
      type: DataTypes.INTEGER
    },

    dishTypes: {
      type: DataTypes.TEXT,
    },

    steps: {
      type: DataTypes.TEXT,
    },

    createdDB: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {timestamps: false}
  );
};
