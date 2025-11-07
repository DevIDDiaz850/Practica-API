require('dotenv').config();
const { Sequelize } = require('sequelize');

const dbPass = process.env.DB_PASS || 'resistol850';
const dbHost = process.env.DB_HOST || 'localhost';
const dbUser = process.env.DB_USER || 'postgres';
const dbName = process.env.DB_NAME || 'Practica-V-1';

const sequelize = new Sequelize(
  dbName,
  dbUser,
  dbPass,
  {
    host: dbHost,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const conectarDB = async () => {
  try {
    if (typeof dbPass !== 'string') {
        throw new Error('La contraseña de la base de datos debe ser una cadena de texto (string).');
    }
    await sequelize.authenticate();
    console.log('Conexión a PostgreSQL establecida correctamente.');
    await sequelize.sync(); 
    console.log('Base de datos sincronizada.');
  } catch (error) {
    console.error('Error al conectar a PostgreSQL:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, conectarDB };