const express = require('express');

const db = require('./models/index');
const apiRoutes = require('./routes/index');

const app = express();

const {PORT} = require('./config/serverConfig');

const setupAndStartServer = () => {

    app.use(express.json());
    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log("server started at PORT " + PORT);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter: true});
        }
    })
}

setupAndStartServer();