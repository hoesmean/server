const express = require('express');
const sequelize = require('./db/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = ('jsonwebtoken');

const app = express();



app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', require('./router/users'));
app.use('/api/product', require('./router/product'));

sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});     


app.get('/',  (req, res) => {
    res.send('api working');
}); 

sequelize.sync()
    .then(result =>{
        console.log(result);
    }).catch(err =>{
        console.log(err);
    });


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server başladı ${PORT}`);
});