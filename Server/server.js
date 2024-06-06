const express = require('express');
const port = 5000;

const app = express();

const db = require('./models')


db.Sequelize.sync().then(()=>{
    app.listen(port,()=>console.log(`Server is listening port  ${port}`));

});

