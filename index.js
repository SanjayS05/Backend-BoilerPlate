const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = require('./config/database');

const app = express();
app.use(express.json());

// health check endpoint
app.get('/', (req, res) => {
    res.send('API is running');
});

// start server after database connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
        // run migrations / sync models
        await sequelize.sync();

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
})();
