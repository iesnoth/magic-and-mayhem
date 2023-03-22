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

//create one
app.post('/users', async (req, res) => {
    const { name, email, password, vendor } = req.body

    try {
        const user = await User.create({ name, email, password, vendor })

        return res.json(user)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

//find all
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll()

        return res.json(users)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

//find one
app.get('/users/:user_uid', async (req, res) => {
    const uuid = req.params.user_uid
    try {
        const users = await User.findOne({
            where: { user_uid: uuid }
        })

        return res.json(users)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

//create a dragon
app.post('/dragons', async (req, res) => {
    const { userUuid, name, images, price, artist, description } = req.body

    try {
        const user = await User.findOne({ where: { user_uid: userUuid } })

        const newDragon = Pet.create({ name, images, price, artist, description, userId: user.id })
        return re.json(newDragon)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

//ROUTES FOR USER
//app.use('/users', require('./routes/user_routes'))

app.listen(process.env.PORT, async () => {
    console.log(`server has started on port ${process.env.PORT}`);
    await sequelize.authenticate()
    console.log('Database connected!')
});