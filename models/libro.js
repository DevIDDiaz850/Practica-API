const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Libro = sequelize.define('Libro', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  autor: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  publicacion: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'Libros',
  timestamps: true
});

module.exports = Libro;