const { Sequelize } = require('sequelize');
require('dotenv').config();

// create a Sequelize instance using environment variables
const sequelize = new Sequelize(
    process.env.DB_NAME || 'database',
    process.env.DB_USER || 'username',
    process.env.DB_PASSWORD || 'password',
    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
        dialect: 'postgres',
    }
);

module.exports = sequelize;
