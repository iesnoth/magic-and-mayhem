const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    port: 5432,
    database: "magic_and_mayhem"
});

module.exports = pool;