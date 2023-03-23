const express = require('express');
const cors = require("cors");
const app = express();
const { sequelize } = require('./models')

//middleware
require('dotenv').config()
app.use(cors());
app.use(express.json());// parses req.body
app.use(express.urlencoded({ extended: false }))
// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
}

//Bring in errorHandler
const { errorHandler } = require('./middleware/errMiddleware')

//ROUTES FOR USER
app.use('/users', require('./routes/userRoutes'))
app.use('/dragons',require('./routes/dragonRoutes'))

//Set the app to use our errorHandler
app.use(errorHandler)

app.listen(process.env.PORT, async () => {
    console.log(`server has started on port ${process.env.PORT}`);
    await sequelize.authenticate()
    console.log('Database connected!')
});