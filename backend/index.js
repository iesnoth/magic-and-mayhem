const express = require('express');
const cors = require("cors");
const app = express();
//const {sequelize} = require('./models')

//middleware
require('dotenv').config()
app.use(cors());
app.use(express.json());//req.body
app.use(express.urlencoded({ extended: false }))
// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
}

//ROUTES FOR USER
app.use('/users', require('./routes/user_routes'))

app.listen(process.env.PORT, () => {
    console.log(`server has started on port ${process.env.PORT}`);
});