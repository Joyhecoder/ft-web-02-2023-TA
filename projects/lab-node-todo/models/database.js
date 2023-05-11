const pgp = require('pg-promise')();
let connectionString = {
    host: 'localhost',
    port: 5432,
    database: 'todo2023',
    user: 'postgres'
}

const db = pgp(connectionString)

module.exports = db