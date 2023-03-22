//CRUD functions for the dragons db
//uses the Dragon and User models

//CREATE a dragon


//READ: get all dragons by a certain artist
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

//READ: get one dragon by id

//UPDATE a dragon by id

//DELETE a dragon by id

//