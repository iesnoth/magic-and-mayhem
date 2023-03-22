const express = require('express');
const cors = require("cors");
const app = express();
const { sequelize, User, Pet } = require('./models')

//middleware
require('dotenv').config()
app.use(cors());
app.use(express.json());// parses req.body
app.use(express.urlencoded({ extended: false }))
// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
}

//create a dragon
//this is throwing an error of "artistId is null" in relation to dragons
app.post('/dragons', async (req, res) => {
    const { userUuid, name, images, price, artist, description } = req.body

    try {
        const user = await User.findOne({ where: { user_uid: userUuid } })

        const newDragon = Pet.create({ name, images, price, artist, description, artistId: user.id })
        return res.json(newDragon)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

//ROUTES FOR USER
const userController = require('./controllers/user_controller')
app.use('/users',userController)

app.listen(process.env.PORT, async () => {
    console.log(`server has started on port ${process.env.PORT}`);
    await sequelize.authenticate()
    console.log('Database connected!')
});