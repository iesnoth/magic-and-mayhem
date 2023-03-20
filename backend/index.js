const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db");
const {sequelize} = require('./models')
//require dotenv

//middleware
app.use(cors());
app.use(express.json());//req.body

//

//ROUTES FOR USER

//CREATE A TODO
app.post("/users", async (req, res) => {
    try {
        const { name } = req.body
        const newUser = await pool.query(
            "INSERT INTO users (user_id, name) VALUES(uuid_generate_v4(),$1) RETURNING *",
            [name]
        );

        res.json(newUser.rows[0])
    } catch (err) {
        console.error(err.message);
    }
})
//GET ALL

app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//GET ONE

app.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);

        res.json(user.rows[0])
    } catch (err) {
        console.error(err.message);
    }
})

//UPDATE USER

app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updateUser = await pool.query(
            "UPDATE users SET name = $1 WHERE user_id = $2",
            [name, id]
        );

        res.json("User was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//DELETE A USER
app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [id]);

        res.json("User deleted.")
    } catch (err) {
        console.error(err.message);
    }
})


app.listen(5000, () => {
    console.log("server has started on port 5000");
});
